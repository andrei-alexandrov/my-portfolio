import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { Container, Navbar, Nav } from "react-bootstrap";
import { themeContext } from "../../Contex"
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import Music from "../Music/Music";

import "./Navbar.scss";

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(true);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded}>
      <Container>
        <ToggleTheme />
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links d-flex flex-row justify-content-center align-items-center gap-3">
            <Nav.Link className={darkMode ? "nav-link" : "nav-light-mode"}
              as={Link} spy={true} to="skills" smooth={true} duration={60} offset={54}>
              Skills
            </Nav.Link>
            <Nav.Link className={darkMode ? "nav-link" : "nav-light-mode"}
              as={Link} spy={true} to="cards-collection" smooth={true} duration={60} offset={-60}>
              My Card
            </Nav.Link>
            <Nav.Link className={darkMode ? "nav-link" : "nav-light-mode"}
              as={Link} spy={true} to="projects" smooth={true} duration={60} offset={42}>
              Projects
            </Nav.Link>
          </Nav>
          <Music />
          <Nav className="ms-auto nav-btns d-flex flex-row justify-content-center align-items-center mt-3">
            <Link spy={true} to="contact" smooth={true} duration={60} offset={115}>
              <button className="nav-btn" aria-label="Contact me">
                Contact me
              </button>
            </Link>
            <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download aria-label="Download CV">
              <button className="nav-btn">Download CV</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
