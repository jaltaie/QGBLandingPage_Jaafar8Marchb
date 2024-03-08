import React from "react";
import "./Section5.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fiveStars from "../images/five_star.png";

const Section5 = () => {

    const card_info_line_1 = [
        {
            id: 1,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/4b/bca2a4dc43408497819f5b976e14e9/302050841.jpeg",
            title: 'AWS Cloud Technology Consultant Professional Certificate',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/aws-cloud-technology-consultant?authProvider=cgbqatar',
            description: 'Start a career as a Cloud Technology Consultant . In this program, you’ll learn in-demand skills to advise clients on the use of cloud technology to meet business objectives. No degree or experience required',
        },
        {
            id: 2,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/8c/e0f2fd124b441fa8d9aa68fdab2167/Marketing-Image.png",
            title: 'Microsoft Power BI Data Analyst Professional Certificate',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/microsoft-power-bi-data-analyst?authProvider=cgbqatar',
            description: 'Launch your career as a Power BI analyst. Learn the in-demand business intelligence skills that will have you job-ready in less than 5 months. No prior experience required to get started.',
        },
        {
            id: 3,
            imageUrl: "https://coursera-course-photos.s3.amazonaws.com/48/cdef7ad117457bb1d2712791bc54e2/shutterstock_1698393829.jpg",
            title: 'Leadership Skills',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/leadershipskills?authProvider=cgbqatar',
            description: 'This course provides a foundation for leadership practice and aims to take you on a journey of self-discovery. ',
        },
    ];
    const card_info_line_2 = [
        {
            id: 4,
            imageUrl: "https://coursera-course-photos.s3.amazonaws.com/99/822afcb77f4e8dadd2ea897dedf267/Logo_Santos_SWBT.png",
            title: 'The Science of Well-Being for Teens',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/the-science-of-well-being-for-teens?authProvider=cgbqatar',
            description: 'In this course, you will explore what the field of psychology teaches us about how to be happier, how to feel less stressed, and how to thrive in high school and beyond. ',
        },
        {
            id: 5,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/8c/b75571d8ad4d24bddff436beab0bad/DL_Square_Banner_Coursera_800x800.png",
            title: 'Mathematics for Machine Learning and Data Science Specialization',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/mathematics-for-machine-learning-and-data-science?authProvider=cgbqatar',
            description: 'Mathematics for Machine Learning and Data Science is a beginner-friendly Specialization where you’ll learn the fundamental mathematics toolkit of machine learning: calculus, linear algebra, statistics, and probability.',
        },
        {
            id: 6,
            imageUrl: "https://d15cw65ipctsrr.cloudfront.net/df/ccc92936344beb9c95b5cfedd08c69/Program_Logo_5.png",
            title: 'HRCI Human Resource Associate Professional Certificate',
            smallImageUrl: fiveStars,
            link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/hrci-human-resource-associate?authProvider=cgbqatar',
            description: 'Launch your career in Human Resources. In this program, you’ll learn in-demand skills for a career as an Human Resource Associate. No degree or prior experience needed.',
        }
    ];
    return (
        <div className="section5-bg mb-5 pb-5" id="section5">
            <Container className="section5-header justify-content-center d-flex">
                <div className="text-center mt-auto mb-auto">
                    <div className="section5-header-title">
                        جديدنا من الدورات
                    </div>
                    <div className="section5-header-subtitle">
                        تزويد الموظفين بأحدث المهارات التي تساهم في تعزيز الكفاءة
                        والابتكار في الأداء الوظيفي.
                    </div>
                </div>
            </Container>
            <div className="subsection5-bg">
                <Container className="section5-container">
                    <Row>
                        {
                            card_info_line_1.map((elem, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sx-12">
                                        <a href="javascript:void(0)" key={index}>
                                            <Card className="section5-card mb-4 shadow-sm flex flex-col justify-between">
                                                <Card.Img variant="top" src={elem.imageUrl} className="shadow-lg" />
                                                <Card.Body className="text-start">
                                                    <Card.Title>
                                                        {elem.title}
                                                    </Card.Title>
                                                    <Card.Text className="align-items-end">
                                                        {elem.description}
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
                                            <Card className="section5-card shadow-sm flex flex-col justify-between">
                                                <Card.Img variant="top" src={elem.imageUrl} className="shadow-lg" />
                                                <Card.Body className="text-start">
                                                    <Card.Title>
                                                        {elem.title}
                                                    </Card.Title>
                                                    <Card.Text className="align-items-end">
                                                        {elem.description}
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
        </div>
    );
};

export default Section5;
