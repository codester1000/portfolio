import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'

const HomeNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" className="navbar">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Scrollspy className='nav' items={ ['Home', 'About', 'Languages', 'Projects'] } currentClassName="is-current">
              <Nav.Link href="#home" className='nav-link'><li>Home</li></Nav.Link>
              <Nav.Link href="#about" className='nav-link'><li>About</li></Nav.Link>
              <Nav.Link href="#languages" className='nav-link'><li>Languages</li></Nav.Link>
              <Nav.Link href="#projects" className='nav-link'><li>Projects</li></Nav.Link>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNav;