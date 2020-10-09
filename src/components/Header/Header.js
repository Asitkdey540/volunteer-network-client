import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#donation">Donation</Nav.Link>
                            <Nav.Link to="#events">Events</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Link to="/login"><Button variant="outline-primary">Register</Button></Link>
                            <Button variant="outline-secondary">Admin</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;