import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footerBg">
          <div className="innerCard-new">
            {/* <div className="container-fluid">
            <div className="row">
              <div className="box addressBox col-md-3 ps-5">
                <div className="serTxt">
                  Suite #204 <br />
                  6010 W Spring Creek Pkwy, <br />
                  Plano, TX 75024, USA <br />
                </div>
                <a className="customLink" href="#info@taciti.com">
                  <div className="ch2">info@taciti.com</div>
                </a>
              </div>
              <div className="servicesBox col-md-6">
                <div className="serTxt">Services</div>
                <div>
                  <Link href="/business-consulting/" className="customLink">
                    Strategy & Advisory
                  </Link>
                </div>
                <div>
                  <Link href="/process-advisory/" className="customLink ">
                    ERP Lead Transformation
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link href="/business-transformation/" className="customLink">
                    Transformation Management & Governance
                  </Link>
                </div>
                <div>
                  <Link href="/technology-services/" className="customLink ">
                    Technology Services
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href="/talent-management-transformation/ "
                    className="customLink"
                  >
                    Human Capital Management
                  </Link>
                </div>
              </div>
              <div className="servicesBox col-md-2">
                <div className="serTxt">Industries</div>
                <div>
                  <Link
                    href="/manufacturing-industries/"
                    className="customLink"
                  >
                    Manufacturing Industries{" "}
                  </Link>
                </div>
                <div>
                  <Link href="/life-sciences/" className="customLink">
                    Life Sciences
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link href="/consumer-packaged-goods/" className="customLink">
                    Consumer Packaged Goods{" "}
                  </Link>
                </div>
                <div>
                  <Link href="/hi-tech/" className="customLink">
                    Hi-Tech{" "}
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link href="/utility/" className="customLink">
                    Utilities
                  </Link>
                </div>
              </div>
              <div className="servicesBox  col-md-2">
                <div className="serTxt">Quick Links</div>
                <div className="">
                  <Link href="/contact-us/" className="customLink">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            </div> */}

            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <img src="/images/logo_footer.png"  alt="" /> <br/>
                   <div className="addres">Suite #204 <br/>6010 W Spring Creek Pkwy, Plano, TX 75024, USA</div>
                  <p>info@taciti.com</p>
                </div>
                <div className="col-lg-3">
                  <div className="footer-head">Services</div>
                      
                    <ul>
                      <li><Link href='/business-consulting/'>Strategy & Advisory</Link></li>
                      <li><Link href='/process-advisory/'>ERP Lead Transformation</Link></li>
                      <li><Link href='/business-transformation/'>Transformation Management & Governance</Link></li>
                      <li><Link href='/talent-management-transformation/'>Human Capital Management</Link></li>
                      <li><Link href='/technology-services/'>Technology Services</Link></li>
                    </ul>
                  </div>
                
                <div className="col-lg-3">
                <div className="footer-head">Industries</div>
                <ul>
                      <li><Link href='/manufacturing-industries/'>Manufacturing</Link></li>
                      <li><Link href='/life-sciences/'>Life Sciences</Link></li>
                      <li><Link href='/consumer-packaged-goods/'>Consumer Packaged Goods</Link></li>
                      <li><Link href='/hi-tech/'>Hi-Tech</Link></li>
                      <li><Link href='/utility/'>Utilities</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                <div className="footer-head">Quick Links</div>
                <ul> 
                  <li><Link href='/contact-us/'>Contact Us</Link></li>    
                </ul>
                </div>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
    </>
  );
}
