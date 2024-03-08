import React from "react";
import "./Section3.css";
import section3_right_boxes from "../images/section3_right_boxes.png";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fiveStars from "../images/five_star.png";

const Section3 = () => {
  const card_info_line_1 = [
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/33/56fa78ec0542f19eaa977b8854c833/coursera2.jpg",
      title: "مهارات رواد الأعمال",
      subT: "",
      desc: "تشمل قدرات تأسيس وإدارة الأعمال بما في ذلك التخطيط والتسويق والابتكار",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/project-management-foundations?authProvider=cgbqatarstaging&source=search",
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/f8/d2bb2e728e4622af311ff38339693d/1_CYBER_FOUNDATION.png",
      title: "مهارات السلامة والصحة المهنية",
      subT: "",
      desc: "تتعلق بتطبيق إجراءات السلامة والصحة في مكان العمل لضمان بيئة عمل آمنة وصحية",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/foundations-of-cybersecurity?authProvider=cgbqatarstaging&source=search",
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/17/6c132ca5c44fbdbd30fdab2504779c/coursera3.jpg",
      title: "مهارات البيئة",
      subT: "",
      desc: "تركز على فهم وتحسين التفاعل بين الأفراد والشركات مع البيئة الطبيعية",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/foundations-user-experience-design?authProvider=cgbqatarstaging&source=search",
    },
  ]
  const card_info_line_2 = [
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/75/0f6327601d444da1545fc560bc5ac4/1200x600_certsResize_2.png",
      title: "مهارات الشهادات المهنية",
      subT: "",
      desc: "تشمل القدرة على تحصيل وتقديم شهادات مهنية تؤكد على مستوى معين من الكفاءة في مجال محدد",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/project-planning-google?authProvider=cgbqatarstaging&source=search"
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/66/e2793ae80742ccac9bdebe7f538a1c/excel-g9ac6b342d_1920.png",
      title: "المهارات الأساسية",
      subT: "",
      desc: "تعنى بالمهارات الأساسية المطلوبة للتفوق في مختلف جوانب الحياة الشخصية والمهنية",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/business-analytics-excel?authProvider=cgbqatarstaging&source=search",
    },
    {
      img: "https://coursera-course-photos.s3.amazonaws.com/94/fc7cea2c9f47aab0b8161a0775e972/Analyze-Data-to-Answer-Questions.png",
      title: "مهارات المشاريع إرشادية",
      subT: "",
      desc: "تشمل قدرات الإرشاد والتوجيه لضمان تنفيذ المشاريع بنجاح وفقاً للأهداف المحددة",
      btn_text: "اقرأ المزيد",
      smallImageUrl: fiveStars,
      link: "https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/analyze-data?authProvider=cgbqatarstaging&source=search"
    },
  ];
  return (

    <div className="section3-bg" id="section3">
    <img alt="section3 right boxes" src={section3_right_boxes}
         className="section3-right-boxes"/>
    <Container className="section3-container">
      <Row>
        {
          card_info_line_1.map((elem, index) => {
            return (
                <Col className="m-auto" key={index}>
                  <a href={elem.link} target="_blank" rel="noreferrer">
                    <Card className="section3-card mb-4 shadow-sm flex flex-col justify-between">
                      <Card.Img variant="top" src={elem.img} className="shadow-lg"/>
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
                                 className="mb-2 align-self-end"/>
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
                </Col>
            )
          })
        }
      </Row>
      <Row>
        {
          card_info_line_2.map((elem, index) => {
            return (
              <Col className="" key={index}>
                <a href={elem.link} key={index} target="_blank" rel="noreferrer">
                  <Card className="section3-card shadow-sm flex flex-col justify-between">
                    <Card.Img variant="top" src={elem.img} className="shadow-lg"/>
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
                               className="mb-2 align-self-end"/>
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
              </Col>
            )
          })
        }
      </Row>
    </Container>
  </div>





   
/*     <div className="section3-bg" id="section3">
      <img alt="section3 right boxes" src={section3_right_boxes}
        className="section3-right-boxes" />
      <Container className="section3-container">
        <Row>
          {
          card_info_line_1.map((elem, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sx-12">
                  <a href="javascript:void(0)" key={index}>
                    <Card className="section3-card mb-4 shadow-sm flex flex-col justify-between">
                      <Card.Img variant="top" src={elem.img} className="shadow-lg" />
                      <Card.Body className="text-start">
                        <Card.Title>
                          <h5>{elem.title}</h5>
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
        <Row>
          {
            card_info_line_2.map((elem, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sx-12">
                  <a href="javascript:void(0)" key={index}>
                    <Card className="section3-card shadow-sm flex flex-col justify-between">
                      <Card.Img variant="top" src={elem.img} className="shadow-lg" />
                      <Card.Body className="text-start">
                        <Card.Title>
                          <h5>{elem.title}</h5>
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
    </div> */
  );
};

export default Section3;
