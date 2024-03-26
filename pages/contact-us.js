import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    "Manufacturing Industries",
    "Life Sciences",
    "Consumer Packaged Goods",
    "Hi-Tech",
    "Utilities",
    "Other",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [isOpend, setIsOpend] = useState(false);
  const [selectedOptiond, setSelectedOptiond] = useState(null);
  const optionsd = [
    "Strategy & Advisory",
    "ERP Led Transformations",
    "Transformation Management & Governance",
    "Technology Services",
    "Human Capital Management",
    "Other",
  ];

  const toggleDropdownd = () => {
    setIsOpend(!isOpend);
  };

  const handleOptionClickd = (optiond) => {
    setSelectedOptiond(optiond);
    setIsOpend(false);
  };
  return (
    <>
      <div id="contacthffkui">
        <div className="contactbg">
          <div className="contactbox">
            <h1 className="contacttext">Contact Us</h1>
          </div>
        </div>

        <div className="mainLineImgcont">
          <div className="contacttextc">
            <div className="contactheadfirst">
              To make requests for further information, contact us
            </div>
          </div>
          <div className="contacttextc">
            <text className="contactheadsub">
              We will respond within 2 business days of receiving your inquiry.
            </text>
          </div>
          <div className="contacttextc  ">
            <div className="contacttextwidth ">
              <input
                className="contactheadsec col-12 input-blue-bottom-border"
                placeholder="Your name*"
              />
            </div>

            <div className="contacttextwidth  ">
              <input
                className="contactheadsec col-12 input-blue-bottom-border"
                placeholder="Last name*"
              />
            </div>
          </div>

          <div className="contacttextc  ">
            <div className=" contacttextwidth ">
              <input
                className="contactheadsec col-12 input-blue-bottom-border"
                placeholder="Your Email*"
                type="email"
              />
            </div>

            <div className="contacttextwidth  ">
              <input
                className="contactheadsec col-12 input-blue-bottom-border"
                placeholder="Your Number*"
              />
            </div>
          </div>

          <div className="contacttextc  ">
            <div className="contacttextwidth ">
              <input
                className="contactheadsec col-12 input-blue-bottom-border"
                placeholder="Your Company Name*"
              />
            </div>

            <div className="contacttextwidth  ">
              <input
                className="contactheadsec col-12 input-blue-bottom-border"
                placeholder="Your Country*"
              />
            </div>
          </div>

          <div className="contacttextc mt-4  ">
            <div className="contacttextwidth ">
              <div className="custom-dropdown">
                <div className="dropdown-header" onClick={toggleDropdownd}>
                  {selectedOptiond || " Select Services"}
                  {isOpend ? (
                    <MdArrowDropUp className="mdarrow" />
                  ) : (
                    <MdArrowDropDown className="mdarrow" />
                  )}
                </div>
                {isOpend && (
                  <ul className="dropdown-options">
                    {optionsd.map((optiond, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClickd(optiond)}
                      >
                        {optiond}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="contacttextwidth  ">
              <div className="custom-dropdown">
                <div className="dropdown-header" onClick={toggleDropdown}>
                  {selectedOption || " Select Services"}
                  {isOpen ? (
                    <MdArrowDropUp className="mdarrow" />
                  ) : (
                    <MdArrowDropDown className="mdarrow" />
                  )}
                </div>
                {isOpen && (
                  <ul className="dropdown-options">
                    {options.map((option, index) => (
                      <li key={index} onClick={() => handleOptionClick(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="contacttextc  ">
            <div className="contacttextwidthdes ">
              <textarea
                className="col-12 input-blue-bottom-borderone"
                placeholder="Please describe what you need"
                style={{ height: "170px", resize: "vertical" }}
                // Adjust height and add resizing
              />
            </div>
          </div>
          <div className="contacttextc mt-4 ">
            <button className="Contactsendmsg">Send message</button>
          </div>

          <div id="footer" className="footer">
            <div className="footerBcontact mt-5">
              <div className="innerCard ">
                <div className="container">
                <div className="serTxtcon-2 text-center">
                      <text className="contactheadfirst ">Our Offices</text>
                    </div>
                <div className="row">
                  <div className="box addressBox col-md-4 ">
                    <div className="serTxtcon">
                      <h1 className="serTxtcon ">Plano, TX, USA</h1>
                    </div>
                    <div className="customLinkcont mt-3 ">
                      Suite #204 <br />
                      6010 W Spring Creek Pkwy, <br />
                      Plano, TX 75024, USA <br />
                    </div>
                    <a className="customLinkcont" href="#info@taciti.com">
                      <div className="ch2cont">info@taciti.com</div>
                    </a>
                  </div>
                  <div className="servicesBox  col-md-4  ">
                    <div className="serTxtcon">
                      <h1 className="serTxtcon">Pune, India</h1>
                    </div>
                    <div>
                      <div className="customLinkcont">
                        C-607, Teerth Technospace, Begnaluru-Mumbai Highway,
                        Baner, Pune – 411045, India.
                      </div>
                    </div>
                    <div>
                      <div className="customLinkcont ">
                        info@taciti.com
                      </div>
                    </div>
                  </div>

                  <div className="servicesBox  col-md-4 ">
                    <h1 className="serTxtcon">Hyderabad, India</h1>
                    <div>
                      <div className="customLinkcont">
                        Trendz JR, 5B, Survey No:31-36, Vittal Rao
                        Nagar,Madhapur, Hyderabad-500081, India
                      </div>
                    </div>
                    <div>
                      <div className="customLinkcont">
                        info@taciti.com
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
