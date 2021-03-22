import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {


    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand><Link to="/" className="nav_link">Logo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <GiHamburgerMenu />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav className="nav-item"> <Link to="/" className="nav_link">Home</Link> </Nav>
                        <Nav className="nav-item"><Link to="/features" className="nav_link">Features</Link> </Nav>
                        <Nav className="nav-item"><Link to="/screenshots" className="nav_link">Screenshots</Link> </Nav>
                        <Nav className="nav-item"><Link to="/testimonials" className="nav_link">Testimonials</Link> </Nav>
                        <Nav className="nav-item"><Link to="/pricing" className="nav_link">Pricing</Link> </Nav>
                        <Nav className="nav-item"><Link to="/contact" className="nav_link">Contact</Link> </Nav>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
