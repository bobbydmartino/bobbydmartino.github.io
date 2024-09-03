import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Stephen J Martino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#about">Journey</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#portfolio">Projects</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resumé</Nav.Link>
            <Nav.Link as={Link} to="/my-tools">My Tools</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSekWCByEFeH3DT9d0s8onA1Brjz0CnPTDJGaO-2rAq4VuydPw/viewform?usp=pp_url" target="_blank">Flag Quote Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
