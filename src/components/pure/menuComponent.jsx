import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const MenuComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="nv-bar">
            <Container>
                <Navbar.Brand>React TODO-APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link href="/" className="nv-link">
                        Home
                    </Nav.Link>
                    <Nav.Link href="Tasks" className="nv-link">
                        Your Tasks
                    </Nav.Link>
                    <Nav.Link href="Register" className="nv-link">
                        Register
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuComponent;
