import React, { useEffect, useRef } from "react";

export default function Contact() {
  return (
    <div id="contacthffkui">
      <div className="contactbg">
        <div className="contactbox">
          <h3 className="contacttext">Contact Us</h3>
        </div>
      </div>

      <div className="mainLineImgcont">
        <div className="contacttextc">
          <h1 className="contactheadfirst">
            To make requests for further information, contact us
          </h1>
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
              type="number"
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

        <div className="contacttextc  ">
          <div className="contacttextwidth ">
            <select className="contactheadsec col-12">
              <option value="" disabled selected hidden>
                Select Industry
              </option>
              <option value="industry1">Industry 1</option>
              <option value="industry2">Industry 2</option>
              <option value="industry3">Industry 3</option>
            </select>
          </div>

          <div className="contacttextwidth  ">
            <select className="contactheadsec col-12">
              <option value="" disabled selected hidden>
                Select Services
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
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
  );
}
