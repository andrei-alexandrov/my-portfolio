import React from "react"
import ToggleTheme from "../ToggleTheme/ToggleTheme"
import { Link } from "react-scroll"
import { Container, Row, Col  } from "react-bootstrap"

import "./NavBar.scss"

export default function NavBar() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <nav className="navbar-wrapper">
                        <div className="navbar-left-side">
                            <ToggleTheme />
                        </div>
                        <div className="navbar-right-side">
                            <div className="navbar-list">
                                <ul>
                                    <Link spy={true} to='Skills' smooth={true} duration={60} offset={-55}>
                                        <li>Skills</li>
                                    </Link>
                                    <Link spy={true} to='Card' smooth={true} duration={60} offset={-165}>
                                        <li>Card</li>
                                    </Link>
                                    <Link spy={true} to='Projects' smooth={true} duration={60} offset={-30}>
                                        <li>Projects</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                        <div className="navbar-btn-wrapper">
                            <Link spy={true} to='Contact' smooth={true} offset={-22}>
                                <button className="navbar-btn">Contact me</button>
                            </Link>
                            <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download>
                                <button className="navbar-btn">Download CV</button>
                            </a>
                        </div>
                    </nav >
                </Col>
            </Row>
        </Container>
    )
}