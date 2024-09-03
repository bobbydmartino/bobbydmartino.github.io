import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

const PortfolioItem = ({ title, date, category, client, images, description }) => {
  return (
    <Card className="mb-4">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`${title} - ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
          <strong>Category:</strong> {category}<br />
          <strong>Client:</strong> {client}<br />
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PortfolioItem;
