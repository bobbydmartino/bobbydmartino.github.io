import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  return (
    <section id="education" className="page-section bg-light">
      <Container>
        <h2 className="section-heading text-uppercase text-center mb-5">Education</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="assets/img/Shaker.jpg" />
              <Card.Body>
                <Card.Title>Shaker High School</Card.Title>
                <Card.Text>
                  445 Watervliet Shaker Rd, Latham, NY 12110<br />
                  Graduated June 2020
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="assets/img/siena.jpg" />
              <Card.Body>
                <Card.Title>Siena College</Card.Title>
                <Card.Text>
                  515 Loudon Rd, Loudonville, NY 12211<br />
                  Bachelors Degree in Applied Physics<br />
                  Minor in Data Science, Math, & Computer Science<br />
                  Graduated May 2024<br />
                  GPA: 3.55 / 4.0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="assets/img/Clarkson.png" />
              <Card.Body>
                <Card.Title>Clarkson University</Card.Title>
                <Card.Text>
                  80 Nott Terrace, Schenectady, NY 12308<br />
                  Masters Degree in Mechanical Engineering<br />
                  Expected December 2025<br />
                  GPA: 3.67 / 4.0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
