import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
function Topbar() {
  return (
    <Navbar bg="light" expand="lg" className='navbar fixed-top navbar-light'>
      <Container>
        <Navbar.Brand className='nav-item'>
            <Link className='nav-link' to='/'>CAK</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" activeKey="/">
            <Nav.Link className='nav-item'><Link className='nav-link' to="/">Home</Link></Nav.Link>
            {/* <Nav.Link className='nav-item'><Link classNameName='nav-link' to="/experience">Experience</Link></Nav.Link> */}
            <Nav.Link className='nav-item'><Link className='nav-link' to="/blog">Blog</Link></Nav.Link>
            <Nav.Link className='nav-item'><Link className='nav-link' to="/portfolio">Portfolio</Link></Nav.Link>
            <Nav.Link className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar