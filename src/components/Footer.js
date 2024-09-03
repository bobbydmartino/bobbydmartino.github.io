import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-lg-start">
            Copyright Stephen J. Martino © {new Date().getFullYear()}
          </Col>
          <Col lg={4} className="my-3 my-lg-0">
            {/* You can add social media links here if you want */}
          </Col>
          <Col lg={4} className="text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
