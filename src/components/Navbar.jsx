import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollspyNav from "react-scrollspy-nav";

const HomeNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" className="navbar">
      <Container className='container-nav'>
        <Navbar.Brand className="logo-nav" href="/"><img src="https://i.ibb.co/yB2wbpM/favicon-1.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <ScrollspyNav className='nav' scrollTargetIds={ ['home', 'about', 'languages', 'projects'] } 
            activeNavClass="is-active"
            scrollDuration="10"
            currentClassName="is-current">
                <Nav.Link href="#home" className='nav-link' data-text="Home">Home</Nav.Link>
                <Nav.Link href="#about" className='nav-link' data-text="About">About</Nav.Link>
                <Nav.Link href="#languages" className='nav-link' data-text="Languages">Languages</Nav.Link>
                <Nav.Link href="#projects" className='nav-link' data-text="Projects">Projects</Nav.Link>
            </ScrollspyNav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNav;