import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="page-section">
      <Container>
        <h2 className="section-heading text-uppercase text-center mb-5">My Journey in Woodworking</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Carousel>
              {[1, 2, 3, 4, 5].map((num) => (
                <Carousel.Item key={num}>
                  <img
                    className="d-block w-100 rounded-circle"
                    src={`assets/img/about/TechClasses${num}.jpg`}
                    alt={`Wood Classes ${num}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6}>
            <h4>2014-2020</h4>
            <h5>Taking Tech Classes</h5>
            <p>
              My introduction to woodworking began in 7th-grade technology class, laying the groundwork for a technical skill set. 
              The journey progressed through wood construction classes in 10th and 12th grades, where I honed fundamental skills 
              and safety techniques. From the initial stages of learning basic cuts to mastering advanced woodworking techniques, 
              each step marked a technical evolution. As I reflect on this segment of my journey, it represents a progression from 
              foundational knowledge to technical proficiency.
            </p>
          </Col>
        </Row>
        {/* Add more rows for other journey milestones */}
      </Container>
    </section>
  );
};

export default About;
