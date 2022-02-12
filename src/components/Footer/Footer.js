import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <Row>
            <Col>
              <h4 className="" style={{ color: "black" }}>
                Jobs4You
              </h4>
            </Col>
            <Col>
              <h5>Information</h5>
              <div>
                <Link to="/" className="py-1">
                  About
                </Link>
                <Link to="/" className="py-1">
                  Browse Jobs
                </Link>
                <Link to="/" className="py-1">
                  FAQs
                </Link>
                <Link to="/" className="py-1">
                  Terms &#38; Conditions
                </Link>
                <Link to="/" className="py-1">
                  Privacy Policy
                </Link>
              </div>
            </Col>
            <Col>
              <h5>Employers</h5>
              <div>
                <Link to="/" className="py-1">
                  Free Account
                </Link>
                <Link to="/" className="py-1">
                  Employer Center
                </Link>
                <Link to="/" className="py-1">
                  Employers Blogs
                </Link>
              </div>
            </Col>
            <Col>
              <h5>Get Connected</h5>
              <div className="social-icons d-flex">
                <a
                  href="https://facebook.com"
                  className="social_bg facebook-bg"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://iastagram.com"
                  className="social_bg instagram-bg"
                >
                  <AiOutlineInstagram />
                </a>
                <a href="https://youtube.com" className="social_bg youtube-bg">
                  <AiOutlineYoutube />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="copyright">
        &copy; 2022 Nuzhat Parveen | All rights reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
