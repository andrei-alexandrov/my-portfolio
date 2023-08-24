import React from "react";
import { Link } from "react-scroll";
import { Container, Navbar, Nav } from "react-bootstrap";

import ToggleTheme from "../ToggleTheme/ToggleTheme";

import "./Navbar.scss";

export default function CustomNavbar() {
    return (
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand className="">
                        <ToggleTheme />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto nav-links d-flex flex-row justify-content-center align-items-center gap-3">
                            <Nav.Link as={Link} spy={true} to='skills' smooth={true} duration={60}>Skills</Nav.Link>
                            <Nav.Link as={Link} spy={true} to='cards-collection' smooth={true} duration={60} offset={-60}>My Card</Nav.Link>
                            <Nav.Link as={Link} spy={true} to='projects' smooth={true} duration={60} offset={-66}>Projects</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto nav-btns d-flex flex-row justify-content-center align-items-center mt-3">
                            <Link spy={true} to='contact' smooth={true} duration={60} offset={115}>
                                <button className="nav-btn" >Contact me</button>
                            </Link>
                            <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download>
                                <button className="nav-btn">Download CV</button>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
