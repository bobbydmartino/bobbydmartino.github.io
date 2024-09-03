import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem';
import projectsData from '../data/projects.json';

const Portfolio = () => {
  return (
    <section id="portfolio" className="page-section bg-light">
      <Container>
        <h2 className="section-heading text-uppercase text-center mb-5">Projects</h2>
        <Row>
          {projectsData.projects.map((project) => (
            <Col md={4} key={project.id}>
              <PortfolioItem {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
