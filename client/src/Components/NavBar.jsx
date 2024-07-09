import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to='/'>ChatApp</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
