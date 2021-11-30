import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" expand="lg">
                <Container className="nav-details">
                    <Navbar.Toggle className="bg-info nav-toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/skills">Skills</Nav.Link>
                            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;