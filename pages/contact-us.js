import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [isOpend, setIsOpend] = useState(false);
  const [selectedOptiond, setSelectedOptiond] = useState(null);
  const optionsd = ["Option 1", "Option 2", "Option 3"];

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
                    {optionsd.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClickd(option)}
                      >
                        {optionsd}
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
        </div>
      </div>

      <div id="footer" className="footer">
        <div className="footerBg-2">
          <div className="innerCard container">
            <div className="row">
            <h3>Our Offices</h3>
              <div className="col-md-4">
               
                <strong>Plano, TX, USA</strong>
                <p>
                  Suite #204 <br />
                  6010 W Spring Creek Pkwy, <br />
                  Plano, TX 75024, USA <br />
                </p>
                <a className="customLink" href="info@taciti.com">
                  <p>info@taciti.com</p>
                </a>
              </div>
              <div className="servicesBox cent col-md-4  ">
                <strong>Pune, India</strong>
                <div>
                  <p>
                    C-607, Teerth Technospace, <br />
                    Begnaluru-Mumbai Highway,
                    <br /> Baner, Pune – 411045, India.
                  </p>
                </div>
                <div>
                  <p>
                    info@taciti.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
