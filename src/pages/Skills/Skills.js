import React, { useContext } from "react"
import { Link } from "react-scroll"
import { themeContext } from "../../Contex"
import { Container, Row, Col } from "react-bootstrap"

import Wheel from "../../components/Wheel/Wheel"

import "./Skills.scss";

export default function Skills() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Container>
            <Row id="skills" className="skills-wrapper">
                <Col className="skills-left-side">
                    <div className="skills-details">
                        <span className="" style={{ color: darkMode ? '#edebe8' : '' }}>My <span style={{ color: "#FCA61F" }}>Skills</span></span>
                        <span>
                            JavaScript ES2015+ features <br />React.js <br />
                            HTML5, CSS3, SASS, Bootstrap, <br />
                            DOM/BOM, OOP, MVC, HTTP, AJAX - Promises and fetch/axios<br />
                            REST API's, JSON, Error handling <br />
                            Responsive design<br />
                            Git/Github</span>
                        <div>
                            <span style={{ color: "#FCA61F" }}>Education:</span>
                            <div style={{ color: "#788097" }}>2022- 2023 IT Talents training camp <br />
                                2020 - 2021 Software university  {`(Java basics, 2 months)`} <br />
                                2014 – 2016	Sofia University {`(Master: European Projects)`} <br />
                                2008 – 2012	Sofia University  {`(Bachelor: European Studies)`}<br /><br />
                                <span style={{ color: "#FCA61F" }}>Hobbies: </span>
                                <div style={{ color: "#788097" }}>Badminton, Tennis/Table tennis <br />
                                    Movie music composer {`(digital piano)`} </div>
                            </div>
                        </div>

                        <div className="skills-btn-wrapper">
                            <Link spy={true} to='contact' smooth={true} duration={60} offset={115}>
                                <button className="contact-btn">Contact me</button>
                            </Link>

                            <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download>
                                <button className="contact-btn">Download CV</button>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col >
                    <Wheel />
                </Col>
            </Row>
        </Container >
    )
}

