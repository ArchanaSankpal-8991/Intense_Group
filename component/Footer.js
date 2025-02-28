import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../images/intenselogo.png';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{marginTop:'100px'}}>
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Company Info */}
          <Col md={4} className="mb-3">
            <h5>IntenseFire Solutions</h5>
            <p>Leading provider of fire safety solutions for industries.</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {/* <li><a href="/about" className="text-light text-decoration-none">About Us</a></li> */}
              <li><Link to="/about">AboutUs</Link></li>
              <li><Link to="/companies">Companies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {/* <li><Link to="/faq">FAQ</Link></li> */}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <a className="navbar-brand col-5" href="#">
            <img src= {logo}alt="intenseLogo" className="logoImg"/>
              Intense Fire Industries
            </a>
            <p><FaMapMarkerAlt /> 123 Fire Safety Street, Pune, India</p>
            <p><FaPhone /> +91 9923076977</p>
            <p><FaEnvelope /> info@intensefire.com</p>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Social Media & Copyright */}
        <Row className="text-center">
          <Col>
            <a href="https://facebook.com" className="text-light me-3"><FaFacebook size={20} /></a>
            <a href="https://twitter.com" className="text-light me-3"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com" className="text-light"><FaLinkedin size={20} /></a>
            <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} IntenseFire Solutions. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;
