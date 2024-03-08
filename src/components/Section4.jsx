import React from "react";
import "./Section4.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fiveStars from "../images/five_star.png";

const Section4 = () => {
  const card_info_line_1 = [
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/62/36b5b68e1c469a8fcde93a982629a6/PowerPoint-01.png",
      title: "Work Smarter with Microsoft PowerPoint",
      subT: "",
      desc: "This course is intended for learners with some experience using Microsoft Windows, who are seeking to build presentation skills with Microsoft PowerPoint",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/microsoft-powerpoint-work-smarter?authProvider=cgbqatarstaging",
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/40/8dbf10ac1911e68f5119007c0cf554/GettyImages-547015901-Thumbnail.jpg",
      title: "The Strategy of Content Marketing",
      subT: "",
      desc: "In this course, you will learn the core strategies content marketers use to acquire and retain customers profitably",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/content-marketing?authProvider=cgbqatarstaging",
    },
  ]
  const card_info_line_2 = [
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/3f/12474d620f49b1ac45032b13b00f37/gww_wordsandwordorder_V1.jpg",
      title: "Writing and Editing: Word Choice and Word Order",
      subT: "",
      desc: "This course will teach you how to use your written words to become more persuasive. You’ll learn creative ways to use syntax, effective techniques for telling stories, and a clever method for arranging a complex series of information",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/writing-editing-words?authProvider=cgbqatarstaging&source=search",
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/9e/99993ca1e24d5094be9adf2277c568/Collaborate-Effectively.jpg",
      title: "Collaborate Effectively for Professional Success",
      subT: "",
      desc: "This short course will help you develop the foundational soft skills to enhance the way you collaborate with your team, others in your company, business partners, and clients",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/collaborate-effectively?authProvider=cgbqatarstaging&source=search"
    },
  ];
  return (
    <div className="section4-bg" id="section4">
      <Container fluid className="section4-container">
        <Row>
          <Col className="col-md-12 col-xs-12">
            <Card className="section4-middle-card p-3 shadow-lg">
              <Card.Body className="justify-content-center d-flex">
                <Card.Text className="text-center mt-auto mb-auto">
                  اخترنا لكم من الدورات
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-around mt25">

          {
            card_info_line_1.map((elem, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sx-12">
                  <a href="javascript:void(0)" key={index}>
                    <Card className="section4-card shadow-sm flex flex-col justify-between">
                      <Card.Img variant="top" src={elem.img} />
                      <Card.Body className="text-start">
                        <Card.Title>
                          {elem.title}
                        </Card.Title>
                        <Card.Text className="align-items-end">
                          {elem.desc}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Row className="justify-content-between d-flex">
                          <Col className="justify-content-start d-flex">
                            <img src={elem.smallImageUrl}
                              alt={`${elem.title}`}
                              className="mb-2 align-self-end" />
                          </Col>
                          <Col className="justify-content-end d-flex">
                            <button className="font-bold align-self-end">
                              سجل الآن
                            </button>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </a>
                </div>



              )
            })
          }

          {
            card_info_line_2.map((elem, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sx-12">
                  <a href="javascript:void(0)" key={index}>
                    <Card className="section4-card shadow-sm flex flex-col justify-between">
                      <Card.Img variant="top" src={elem.img} />
                      <Card.Body className="text-start">
                        <Card.Title>
                          {elem.title}
                        </Card.Title>
                        <Card.Text className="align-items-end">
                          {elem.desc}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Row className="justify-content-between d-flex">
                          <Col className="justify-content-start d-flex">
                            <img src={elem.smallImageUrl}
                              alt={`${elem.title}`}
                              className="mb-2 align-self-end" />
                          </Col>
                          <Col className="justify-content-end d-flex">
                            <button className="font-bold align-self-end">
                              سجل الآن
                            </button>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </a>
                </div>

              )
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
