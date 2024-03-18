import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Taciti.com</title>
        <link rel="icons" href="/public/favicon.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div id="Home">
        <div className="landingBox">
          <div className="textBox">
            <h1 className="headhero">
              Empowering <br /> Digital <br /> Transformation
            </h1>
            <div className="descripitioncustom">
              Our expertise lies in providing end-to-end digital <br />
              transformation services for businesses. Our unbiased <br />
              advisory approach helps our clients achieve growth <br />
              and success in their industries. Our services include <br />
              Strategy & Advisory , Process Reengineering & Optimization, <br />
              and Technology Implementation.
            </div>
          </div>
        </div>
      </div>
      {/* Screens */}
      <div id="About">
        <div className="mainLineImg">
          <div className="AboutUs">
            <div className="AboutUsBox">
              <h1 className="headTxt">About Us</h1>
              <h2 className="detailTxt">
                We are specialize in Business <br /> & Technology Consulting.
              </h2>
              <p className="para">
                Founded in 2019 as DPCon Solutions by enterprise professionals
                with over 25 years of experience, <br />
                we have recently undertaken a rebranding exercise and changed
                the firm's name to Taciti Consulting. <br /> We offer unbiased
                advisory services and comprehensive end-to-end digital
                transformation solutions.
                <br /> We have worked with some of the biggest brands across the
                globe through process and technology innovations, <br />
                helping them flourish as well as adding value to the internal
                and external stakeholders.
              </p>
              <a href="/contact-us/">
                <button className="ContactBtn">Contact Us</button>
              </a>
            </div>
          </div>

          {/* Services */}

          <div id="Services">
            <div className="AboutUs">
              <div className="AboutUsBox">
                <h1 className="headTxt">Recent Client Engagements</h1>
                <h2 className="detailTxt2">
                  End-to-End Digital Transformation Service
                </h2>
                <div className="container cont-sx mb-3">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/images/orderCash.png"
                        className="cardImgRce"
                        height="110"
                        width="110"
                        alt=""
                      />
                      <h1 className="carHeadTxt">
                        Order-to-order <br /> Transformation
                      </h1>
                      <p className="parain">
                        A recent collaboration with a client from the
                        environmental and life sciences industry involved and
                        impactful "Order-to-Cash Assessment and Process
                        Improvement initiative"
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        src="/images/businessImg.png"
                        className="cardImgRce"
                        height="110"
                        width="110"
                        alt=""
                      />
                      <h1 className="carHeadTxt">
                        Business Transformation
                        <br /> Through Cloud{" "}
                      </h1>
                      <p className="parain">
                        We spearheaded a worldwide transformation of a Learning
                        Management System (LMS) for a prominent global
                        technology leader.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        src="/images/sap.png"
                        className="cardImgRce"
                        height="110"
                        width="110"
                        alt=""
                      />
                      <h1 className="carHeadTxt">
                        SAP S / 4HANA Led <br /> Digital Transformation
                      </h1>
                      <p className="parain">
                        The primary objectives are to streamline operations by
                        minimizing complexity, fostering process harmonization
                        among various business units, and establishing
                        standardized procedures through a unified digital core
                        built on SAP S/4HANA.
                      </p>
                    </div>
                  </div>
                </div>
                <a href="/case-studies/">
                  <button className="ContactBtn">Show all</button>
                </a>
              </div>
            </div>
          </div>

          {/* Industries */}

          <div id="Industries">
            <div className="AboutUs">
              <div className="AboutUsBox">
                <h1 className="headTxt">Case Studies</h1>
                <h2 className="detailTxt2">Our Projects make Us Proud</h2>
                <div className="container cont-sx">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="cardInCase ">
                        <div className="cardhead ">
                          <img
                            src="/images/stratergy.svg"
                            height="210"
                            width="100"
                            className="cardImgCase"
                            alt=""
                          />
                        </div>
                        <div className="cardbody">
                          <h1 className="caseheadTxt">Strategy & Advisory</h1>
                          <p className="casePara">
                            Optimizing Working Capital, An <br /> Order-to-Cash
                            Transformation for a<br /> Leading Life Sciences
                            Major.
                          </p>
                          <a
                            href="/casestudy/case-study-category-strategy-advisory/"
                            style={{ textDecoration: "none" }}
                          >
                            <h2 className="caseStudy">
                              View Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="rgba(8, 106, 216, 1)"
                                className="bi bi-arrow-right mx-3"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                              </svg>
                            </h2>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cardInCase">
                        <div className="cardhead">
                          <img
                            src="/images/erp.svg"
                            height="210"
                            width="100"
                            className="cardImgCase"
                            alt=""
                          />
                        </div>
                        <div className="cardbody">
                          <h1 className="caseheadTxt">ERP Transformation</h1>
                          <p className="casePara">
                            A large scale SAP S/4HANA-led <br />
                            digital transformation for a <br />
                            US-based manufacturer.
                          </p>
                          <a
                            href="/casestudy/case-study-category-erp-transformation/"
                            style={{ textDecoration: "none" }}
                          >
                            <h2 className="caseStudy">
                              View Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="rgba(8, 106, 216, 1)"
                                className="bi bi-arrow-right mx-3"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                              </svg>
                            </h2>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cardInCase">
                        <div className="cardheadpng ">
                          <img
                            src="/images/thumbnail7.png"
                            height="200"
                            width="500"
                            alt=""
                            className="cardheadtech"
                          />
                        </div>
                        <div className="cardbody">
                          <h1 className="caseheadTxt">Technology Services</h1>
                          <p className="casePara">
                            Empowering services with <br />
                            No-Code/Low-Code (Microsoft Power Platform) for a
                            manufacturing leader.
                            <br />
                          </p>
                          <a
                            href="/casestudy/case-study-category-technology-services/"
                            style={{ textDecoration: "none" }}
                          >
                            <h2 className="caseStudy">
                              View Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="rgba(8, 106, 216, 1)"
                                className="bi bi-arrow-right mx-3"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                              </svg>
                            </h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="ContactBtn">Show all</button>
              </div>
            </div>
          </div>
        </div>

        {/* Increamental Improvments */}

        <div id="Increamental">
          <div className="xaxisSlide">
            <div className="contentBox">
              <h1 className="incremanetalHeadTxt">
                We are passionate about accelerated <br /> and incremental
                improvements.
              </h1>
              <div className="borderROundedRec">
                <div className="innerBox">
                  <img src="/images/client.png" height="70" width="70" alt="" />
                  <div className="contentCard">
                    <h1 className="num">11</h1>
                    <h1 className="text">Clients</h1>
                  </div>
                </div>
                <div className="innerBox">
                  <img
                    src="/images/completed.png"
                    height="70"
                    width="70"
                    alt=""
                  />
                  <div className="contentCard">
                    <h1 className="num">24</h1>
                    <h1 className="text">Completed Projects</h1>
                  </div>
                </div>
                <div className="innerBox">
                  <img
                    src="/images/ongoing.png"
                    height="70"
                    width="70"
                    alt=""
                  />
                  <div className="contentCard">
                    <h1 className="num">36</h1>
                    <h1 className="text">Ongoing Projects</h1>
                  </div>
                </div>
                <div className="innerBox">
                  <img src="/images/expert.png" height="70" width="70" alt="" />
                  <div className="contentCard">
                    <h1 className="num">160</h1>
                    <h1 className="text">Experts at work</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bookBox">
          <div className="container cont-sx">
            <div className="row">
              <div className="col-md-6">
                <div className="reco-img-sx">
                  <img
                    src="/images/book.svg"
                    height="600"
                    width="500"
                    alt=""
                    className="book"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="reconBox">
                  <h1 className="headingReconTxt">Recognition</h1>
                  <p className="recogPara">
                    Lam Research acknowledges <br />
                    our expertise and significant <br />
                    contribution to their digital <br />
                    transformation journey
                  </p>
                  <p className="liteTxt">
                    With our recent rebranding exercise, we have changed our{" "}
                    <br />
                    Company name from DPcon Solutions to Taciti Consulting.
                  </p>
                </div>
              </div>
              <div className="col-md-12 text-center techPartrSx">
                <div className="TecBox">
                  <h1 className="kkk">
                    <span>Our</span> Technology Partner
                  </h1>
                  <div className="belowBox">
                    <div className="textBox">
                      <h1 className="sap">SAP</h1>
                      <h2>Silver partner</h2>
                    </div>
                    <div className="textBox">
                      <h1 className="sap">Corner Stone</h1>
                      <h2>Teaming Agreement</h2>
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
