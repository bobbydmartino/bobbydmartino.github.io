import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="page-section">
      <Container>
        <h2 className="section-heading text-uppercase text-center mb-5">Contact Stephen</h2>
        <Row className="justify-content-center mb-5">
          <Col md={2}>
            <a href="https://www.linkedin.com/in/stephen-martino/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg btn-block">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
          <Col md={2}>
            <a href="https://github.com/stephenjmartino" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg btn-block">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
