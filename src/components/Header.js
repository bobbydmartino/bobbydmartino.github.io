import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="masthead">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="masthead-subheading">Stephen J Martino</div>
            <div className="masthead-heading text-uppercase">
              Woodworker<br />
              Graduate Student<br />
              Mechanical Engineer
            </div>
          </Col>
          <Col md={6}>
            <img 
              src="assets/img/Collage.png" 
              alt="Header" 
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
