import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" className="pt-5" expand="lg">
                <Container className="nav-details">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="white" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#skills">Skills</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#portfolio">Portfolio</Nav.Link>
                            {/* <Nav.Link as={HashLink} to="/home#contect">Contect</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;