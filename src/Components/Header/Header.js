import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const activeStyle = { fontWeight: "bold",color: "rgba(255,255,255,.75)" }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home"><FontAwesomeIcon icon={faCode} /> DevOps</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">Services</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/instructor">Our Instructors</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;