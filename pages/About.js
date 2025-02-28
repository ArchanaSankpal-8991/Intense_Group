import React from 'react';
import "../assets/style.css";
import { Container } from "react-bootstrap";


const About = () => {
  return (
    <div>
    <section className="contact-section">
      <div className="container text-center">
        <h1>About Us</h1>
        {/* Underline div placed right below the text */}
        <div className="underline"></div>
      </div>
    </section>

    <Container className="mt-4">
      
      <hr className="mb-4" style={{ width: "50%", margin: "auto", borderTop: "3px solid red" }} />

      <h4><strong>About The Company</strong></h4>
      <p>
        Intense Group now constitutes a full-service specialist technical solution provider,
        committed to meeting customer needs for fire protection and safety.
      </p>

      <h4><strong>Our Mission</strong></h4>
      <p>
        To expand and continually improve by utilizing quality practices. We maintain integrity in interactions with business partners and customers.
      </p>

      <h4><strong>Our Vision</strong></h4>
      <p>
        Our vision is to be the **premier technical solution provider company** in the industry,
        focusing on customer value, service, and predictable growth.
      </p>

      <h4><strong>Why Us?</strong></h4>
      <ul>
        <li>Timely delivery</li>
        <li>Extensive range</li>
        <li>Economical prices</li>
        <li>Premium quality</li>
        <li>Excellent service backup</li>
      </ul>
    </Container>
    </div>
  )
}

export default About