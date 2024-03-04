import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesOpenInd, setIsServicesOpenInd] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const searchInputRef = useRef(null);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsServicesOpenInd(false); // Close Industries dropdown when Services dropdown is opened
    setOpenDropdown(isServicesOpen ? null : "services"); // Toggle dropdown icon
  };

  const toggleServicesInd = () => {
    setIsServicesOpenInd(!isServicesOpenInd);
    setIsServicesOpen(false); // Close Services dropdown when Industries dropdown is opened
    setOpenDropdown(isServicesOpenInd ? null : "servicesInd"); // Toggle dropdown icon
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="headermain">
        <div className="brandLogo">
          <Link href="/">
            {/* <Image src="./images/tactiti.svg" height="70" width="160" alt="" /> */}
            <img src="/images/tactiti.svg" alt="logo" height="70" width="160"  />

          </Link>
        </div>
        <div className="LinkBox  ">
          <Link href="/about-us/">About Us</Link>
          <div className="pb-4 dropdown pt-4  ">
            <div className="dropdown ">
              <Link href="/our-services/">
                Our Services <RiArrowDropDownLine />
              </Link>

              <div class="dropdown-content">
                <a href="/business-consulting/">Strategy & Advisory</a>
                <a href="/process-advisory/">ERP Lead Transformation</a>
                <a href="/business-transformation/">
                  Transformation Management <br></br>& Governance
                </a>
                <a href="/technology-services/">Technology Services</a>
                <a href="/talent-management-transformation/">
                  Human Capital Management
                </a>
              </div>
            </div>
          </div>
          <div className="pb-4 dropdown pt-4  ">
            <div className="dropdown">
              <Link href="/manufacturing-industries/">
                Industries <RiArrowDropDownLine className="arrowiconsx" />
              </Link>
              <div class="dropdown-content">
                <a href="/manufacturing-industries/">
                  Manufacturing Industries
                </a>
                <a href="/life-sciences/">Life Sciences</a>
                <a href="/consumer-packaged-goods/">Consumer Packaged Goods</a>
                <a href="/hi-tech/">Hi-Tech</a>
                <a href="/utility/">Utilities</a>
              </div>
            </div>
          </div>
          <Link href="/case-studies/">Case Studies</Link>
          <Link href="/contact-us/">Contact Us</Link>
        </div>
        <div className="drawerToggle">
          <Image
            src="./images/bars.svg"
            height="25"
            width="25"
            alt=""
            className="threeBars"
            onClick={toggleDrawer}
          />

          <PiDotsThreeOutline className="searchbtn" onClick={toggleSearch} />
        </div>
        {isSearchVisible && (
          <div ref={searchInputRef} className="searchInputContainer">
            <input className="inputd" type="text" />
            <div className="searchIconContainer">
              <FaSearch className="searchiconPopup" />
            </div>
          </div>
        )}
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawerContent">
            <div className="crossBtnRight">
              <Image
                src="./images/tactiti.svg"
                height="60"
                width="100"
                alt=""
                className="crossbtn"
                onClick={toggleDrawer}
              />
              <Image
                src="./images/cross.svg"
                height="30"
                width="30"
                alt=""
                className="crossbtn"
                onClick={toggleDrawer}
              />
            </div>

            <div className="Rahil">
              <Link href="/about-us/">About Us</Link>

              <div className="dropdown" onClick={toggleServices}>
                {/* Our Services dropdown */}
                <Link href="/our-services/">Our Services</Link>
                <span className="toggle-sub-menu">
                  {openDropdown === "services" ? (
                    <RiArrowDropUpLine className="RiArrowDropUpLineSx" />
                  ) : (
                    <RiArrowDropDownLine className="RiArrowDropDownLineSx" />
                  )}
                </span>
                {/* Dropdown content */}
                {isServicesOpen && (
                  <div className="innerDropdownContent">
                    <a href="/business-consulting/">Strategy & Advisory</a>
                    <a href="/process-advisory/">ERP Lead Transformation</a>
                    <a href="/business-transformation/">
                      Transformation Management <br></br>& Governance
                    </a>
                    <a href="/technology-services/">Technology Services</a>
                    <a href="/talent-management-transformation/">
                      Human Capital Management
                    </a>
                  </div>
                )}
              </div>

              <div className="dropdown" onClick={toggleServicesInd}>
                {/* Industries dropdown */}
                <Link href="/manufacturing-industries/">Industries</Link>
                <span className="toggle-sub-menu">
                  {openDropdown === "servicesInd" ? (
                    <RiArrowDropUpLine className="RiArrowDropUpLineSx" />
                  ) : (
                    <RiArrowDropDownLine className="RiArrowDropDownLineSx" />
                  )}
                </span>
                {/* Dropdown content */}
                {isServicesOpenInd && (
                  <div className="innerDropdownContent">
                    <a href="/manufacturing-industries/">
                      Manufacturing Industries
                    </a>
                    <a href="/life-sciences/">Life Sciences</a>
                    <a href="/consumer-packaged-goods/">
                      Consumer Packaged Goods
                    </a>
                    <a href="/hi-tech/">Hi-Tech</a>
                    <a href="/utility/">Utilities</a>
                  </div>
                )}
              </div>

              <Link href="/case-studies/">Case Studies</Link>
              <Link href="/contact-us/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



