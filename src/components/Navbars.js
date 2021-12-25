import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbars.css';

const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='main_navbar'>
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="/portfolio" className='navbar'>Portfolio</Nav.Link>
            <Nav.Link href="/about" className='navbar'>About</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="/contact" className='navbar'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars;
