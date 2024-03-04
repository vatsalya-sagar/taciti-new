import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footerBg">
          <div className="innerCard">
            <div className="row">
              <div className="box addressBox">
                <h1 className="serTxt">
                  Suite #204 <br />
                  6010 W Spring Creek Pkwy, <br />
                  Plano, TX 75024, USA <br />
                </h1>
                <a className="customLink" href="info@taciti.com">
                  <h2 className="ch2">info@taciti.com</h2>
                </a>
              </div>
              <div className="servicesBox mt-2  col-md-6">
                <h1 className="serTxt">Services</h1>
                <p>
                  <Link href="/business-consulting/" className="customLink">
                    Strategy & Advisory
                  </Link>
                </p>
                <p>
                  <Link href="/process-advisory/" className="customLink ">
                    ERP Lead Transformation
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/business-transformation/" className="customLink">
                    Transformation Management <br></br>& Governance
                  </Link>
                </p>
                <p>
                  <Link href="/technology-services/" className="customLink ">
                    Technology Services
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link
                    href="/talent-management-transformation/ "
                    className="customLink"
                  >
                    Human Capital Management
                  </Link>
                </p>
              </div>
              <div className="servicesBox mt-2   col-md-6">
                <h1 className="serTxt">Industries</h1>
                <p>
                  <Link
                    href="/manufacturing-industries/"
                    className="customLink"
                  >
                    Manufacturing Industries{" "}
                  </Link>
                </p>
                <p>
                  <Link href="/life-sciences/" className="customLink">
                    Life Sciences
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/consumer-packaged-goods/" className="customLink">
                    Consumer Packaged Goods{" "}
                  </Link>
                </p>
                <p>
                  <Link href="/hi-tech/" className="customLink">
                    Hi-Tech{" "}
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/utility/" className="customLink">
                    Utilities
                  </Link>
                </p>
              </div>
              <div className="servicesBox mt-2  col-md-6">
                <h1 className="serTxt">Quick Links</h1>
                <p className="">
                  <Link href="/contact-us/" className="customLink">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
