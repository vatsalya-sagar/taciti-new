import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { BASEPATH } from "@/config";

export default function AboutUs({ userData }) {
  console.log("userData", userData);

  const [isOpen, setIsOpen] = useState(false);
  const [userTeamData, setuserTeamData] = useState({});

  const openPopup = (databaseId) => {
    setIsOpen(true);
    const getData =
      userData && userData.find((item) => item.databaseId == databaseId);
    getData && setuserTeamData(getData);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="section about-section">
        <div className="container">
          <h1>About us</h1>
        </div>
      </div>
      <div className="about-second">
        <div className="container">
          <h2 className="text-center">Know us</h2>
          <div className="space5"></div>
          <p>
            Founded in 2019 as DPCon Solutions by enterprise professionals with
            over 25 years of experience. Recently we have undertaken a
            rebranding exercise and have change the firm’s name to Taciti
            Consulting
          </p>
          <p>
            At Taciti we offer unbiased and informed advisory services to
            empower businesses to adapt and grow in the ever-evolving digital
            landscape. We have worked with some of the biggest brands across the
            globe. Whether you’re seeking strategic insights, innovative
            solutions, or practical implementation strategies, our mission is to
            support you in achieving your digital transformation goals and
            staying ahead of the competition. We are committed to delivering
            results and building long-term relationships with our clients.
          </p>
          <div className="space5"></div>
          <div className="qot-right">
            <img src="/images/quot-1.webp" alt="" />
          </div>
          <div className="row inner-qot-data">
            <div className="col-lg-2">
              <div className="vision-heading">VISION</div>
            </div>
            <div className="col-lg-10">
              <p>
                At Taciti, our vision is to cultivate a community of passionate
                and innovative minds, dedicated to providing unparalleled
                customer experience. We firmly believe in delivering tangible
                business value, transcending beyond mere services."
              </p>
            </div>
            <div className="col-lg-2">
              <div className="vision-heading">MISSION</div>
            </div>
            <div className="col-lg-10">
              <p>
                To be a trusted transformation partner for both Business and IT
                organizations by providing unbiased consulting to unearth “True
                Transformations" that drive higher organizational growth.
              </p>
            </div>
            <div className="col-lg-2">
              <div className="vision-heading">VALUES</div>
            </div>
            <div className="col-lg-10">
              <p>
                Customer centricity, Transparency, Innovative solutions, On-Time
                Delivery
              </p>
            </div>
          </div>
          <div className="qot-left">
            <img src="/images/quot-2.webp" alt="" />
          </div>

          <div className="row  about-team-class">
            <h4 className="text-center">Meet our Team</h4>
            <p>
              A reverse pyramid model with highly experienced team of
              professionals, committed to designing industry solutions based on
              leading best practices and client needs. Deep expertise across
              business process reengineering, benchmarking, large scale
              transformation management, roadmap definition and implementations.
            </p>
            <div className="space5"></div>
            {userData.map((item, index) => (
              <div
                className="col-lg-3 cusor"
                key={item.id}
                onClick={() => openPopup(item.databaseId)}
              >
                <div className="card-body-list">
                  <div
                    className="about-team"
                    style={{
                      backgroundImage: `url(${item.featuredImage.node.guid})`,
                    }}
                  >
                    <div className="inline-name openButton">
                      <h6 className="text-center">{item.title}</h6>
                      <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: item.excerpt }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Modal className="" show={isOpen} onHide={closePopup}>
              <div className="modal-background "></div>
              <div className="popupContainer ">
                <div className="popup modal-body mt-5">
                  <div className="closeButton" onClick={closePopup}>
                    close
                  </div>
                  <div className="teamCard   ">
                    <div className="head">
                      <h2 className="text-center">{userTeamData.title}</h2>
                      <div
                        className="inner-design"
                        dangerouslySetInnerHTML={{
                          __html: userTeamData.excerpt,
                        }}
                      ></div>

                      <div
                        className="content-design"
                        dangerouslySetInnerHTML={{
                          __html: userTeamData.content,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${BASEPATH}graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query NewQuery {
              teams {
                nodes {
                  title
                  content
                  excerpt
                  databaseId
                  featuredImage {
                    node {
                      guid
                    }
                  }
                }
              }
            }
          `,
      }),
    });

    const data = await response.json();

    return {
      props: {
        userData: data.data.teams.nodes,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        userData: null,
        error: "Error fetching data",
      },
    };
  }
}
