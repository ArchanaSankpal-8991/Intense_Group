import React from "react";
import "../assets/style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="container text-center">
          <h1>CONTACT</h1>
          <div className="underline"></div>
        </div>
      </section>

      {/* Two-column layout */}
      <div className="container">
        <div className="row">
          {/* Left Column - Contact Form */}
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="formLable"> Name :</Form.Label>
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="formLable">Email :</Form.Label>
                <Form.Control type="password" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="formLable">Mobile No :</Form.Label>
                <Form.Control type="email" placeholder="1234567890" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="formLable">Comment :</Form.Label>
                <Form.Control type="password" placeholder="Comment" />
              </Form.Group>

              <Button type="submit">Button</Button>
            </Form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="col-md-6">
            <div className="contact-right">
              <h2>Contact Us</h2>
              <div className="sub-contact">
                <p>
                  <strong>Address:</strong> MIDC Ranjangaon, Karegaon, Tal. - Shirur, Dist. - Pune, 412220
                </p>
                <p>
                  <strong>Email:</strong> gmail@intensegroup.in
                </p>
                <p>
                  <strong>Phone:</strong> 8083 272 272
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50442.22612610651!2d74.24107680541908!3d18.78633578381613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc32965fc56b245%3A0xe2d82837be6df72b!2sRanjangaon%20MIDC%2C%20Maharashtra%20412220!5e1!3m2!1sen!2sin!4v1739683146497!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
