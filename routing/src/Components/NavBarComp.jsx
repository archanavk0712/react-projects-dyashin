import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBarComp() {
  return (
    <div>
       <Navbar bg="light" data-bs-theme="light"  expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Luxurious resort</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default NavBarComp
