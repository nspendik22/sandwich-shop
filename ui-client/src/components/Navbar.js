import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Sandwich Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;