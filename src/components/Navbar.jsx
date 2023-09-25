import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollspyNav from "react-scrollspy-nav";


const HomeNav = () => {
  return (
    <Navbar bg="white" className="navbar">
      <Container className='container-nav'>
        <Navbar.Brand className="logo-nav" href="/">
          <img src="https://i.ibb.co/yB2wbpM/favicon-1.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto">
          {/* Your left-hand side links */}
        </Nav>
        <Nav className="ml-auto"> {/* This will position the collapsed Navbar on the right */}
          <ScrollspyNav className='nav' scrollTargetIds={['home', 'about', 'languages', 'projects']}
            activeNavClass="is-active"
            scrollDuration="10"
            currentClassName="is-current">
            <Nav.Link href="#home" className='nav-link' data-text="Home">Home</Nav.Link>
            <Nav.Link href="#about" className='nav-link' data-text="About">About</Nav.Link>
            <Nav.Link href="#languages" className='nav-link' data-text="Languages">Languages</Nav.Link>
            <Nav.Link href="#projects" className='nav-link' data-text="Projects">Projects</Nav.Link>
          </ScrollspyNav>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default HomeNav;
