import React, { useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-scroll"
import { useSelector } from "react-redux"

import ToggleTheme from "../ToggleTheme/ToggleTheme"
import Music from "../Music/Music"
import Button from "../Button/Button"

import "./Navbar.scss";

export default function CustomNavbar() {
  const { mode } = useSelector(state => state.darkMode);
  const [expanded, setExpanded] = useState(true);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded}>
      <Container>
        <ToggleTheme />
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links d-flex flex-row justify-content-center align-items-center gap-3 navigation-bar">
            <Nav.Link className={mode ? "nav-link" : "nav-light-mode"}
              as={Link} spy={true} to="skills" smooth={true} duration={60} offset={28}>
              Skills
            </Nav.Link>
            <Nav.Link className={mode ? "nav-link" : "nav-light-mode"}
              as={Link} spy={true} to="cards-collection" smooth={true} duration={60} offset={-60}>
              My Card
            </Nav.Link>
            <Nav.Link className={mode ? "nav-link" : "nav-light-mode"}
              as={Link} spy={true} to="projects" smooth={true} duration={60} offset={42}>
              Projects
            </Nav.Link>
          </Nav>
          <Music />
          <Nav className="ms-auto nav-btns d-flex flex-row justify-content-center align-items-center mt-3">
            <Link spy={true} to="contact" smooth={true} duration={60} offset={115}>
              <Button styleBtn="colored-btn" hasOnClick={false}>Contact me</Button>
            </Link>
            <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download aria-label="Download CV">
              <Button styleBtn="colored-btn" hasOnClick={false}>Dowload CV</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
