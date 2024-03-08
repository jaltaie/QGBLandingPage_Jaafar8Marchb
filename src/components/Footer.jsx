import React from "react";
import "./Footer.css";
import footer_phone from "../images/footer-phone.png";
import footer_email from "../images/footer-email.png";
import footer_mobile from "../images/footer-mobile.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import google from "../images/google+.png";
import x from "../images/x.png";
import insta from "../images/insta.png";
import behance from "../images/behance.png";
import up from "../images/up.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer__bg">
      <div className="btn_up">
        <a href="#section1">
          <img src={up} alt="up btn" />
        </a>
      </div>
      <Container fluid>
        <Row>
          <Col className="banner-rectangle"></Col>
        </Row>
      </Container>
      <div className="relative overflow-hidden">
        <div className="footer-top-section">
          <Container>
            <Row className="justify-content-between mt-5">
              <div className="col-lg-6 col-sm-12">
                <div className="footer-title footer-title-1">
                  للتـواصل
                  <div></div>
                </div>
                <Row className="mt-4 pb-4 ps-4">
                  <Col className="footer-phone">
                    الهاتف الارضي:<img src={footer_phone}></img>
                  </Col>
                </Row>
                <Row className="pb-4 ps-4">
                  <Col className="footer-email">
                    البريد الإلكتروني: <img src={footer_email}></img>
                  </Col>
                </Row>
                <Row className="pb-4 ps-4">
                  <Col className="footer-mobile">
                    الهاتف الخلوي: <img src={footer_mobile}></img>
                  </Col>
                </Row>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="footer-title footer-title-2">
                  تــابعنا
                  <div></div>
                </div>
                <Row className="mt-4 pb-4">
                  <Col className="col-lg-1 col-sm-2 social-insta">
                    <img src={insta}></img>
                  </Col>
                  <Col className="col-lg-1 col-sm-2 social-behance">
                    <img src={behance}></img>
                  </Col>
                  <Col className="col-lg-1 col-sm-2 social-google">
                    <img src={google}></img>
                  </Col>
                  <Col className="col-lg-1 col-sm-2 social-x">
                    <img src={x}></img>
                  </Col>
                  <Col className="col-lg-1 col-sm-2 social-facebook">
                    <img src={facebook}></img>
                  </Col>
                  <Col className="col-lg-1 col-sm-2 social-youtube">
                    <img src={youtube}></img>
                  </Col>
                </Row>

              </div>
            </Row>
          </Container>
        </div>
        <div className="relative z-w-full bg-black text-center py-4 font-medium footer-copyrights">
          جميع الحقوق محفوظة © ديوان الخدمة المدنية والتطوير الحكومي / مع 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
