import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Being Outdoors",
      images: ["Outdoors9.jpg", "Outdoors12.jpg", "Outdoors13.jpg", "Outdoors14.jpg", "Outdoors15.jpg"],
      description: "I find tremendous joy in outdoor activities like running, biking, swimming, and road trips."
    },
    {
      title: "Sports",
      images: ["baseball.jpg", "Sports11.png", "Sports12.png", "Sports13.jpg", "Sports14.JPG"],
      description: "I played varsity baseball and ran cross country in high school, and continue to enjoy various sports."
    },
    {
      title: "US History",
      images: ["US History.jpeg", "USHistory11.jpg", "USHistory12.jpg", "USHistory13.jpg"],
      description: "I enjoy learning about the United States' role in the world, with a specific fascination for World War II events."
    }
  ];

  return (
    <section id="hobbies" className="page-section bg-light">
      <Container>
        <h2 className="section-heading text-uppercase text-center mb-5">Hobbies</h2>
        <Row>
          {hobbies.map((hobby, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Carousel>
                  {hobby.images.map((image, i) => (
                    <Carousel.Item key={i}>
                      <img className="d-block w-100" src={`assets/img/${image}`} alt={`${hobby.title} ${i + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{hobby.title}</Card.Title>
                  <Card.Text>{hobby.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hobbies;
