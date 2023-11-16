import React, { useContext } from "react"
import { Link } from "react-scroll"
import { themeContext } from "../../Contex"
import { Container, Row, Col } from "react-bootstrap"

import Lottie from 'lottie-react';
import reactIcon from "../../animations/reactIcon.json"
import gitHubIcon from "../../animations/gitHubRound.json"
import cssIcon from "../../animations/cssLottie.json"
import htmlIcon from "../../animations/htmlLottie.json"
import jsIcon from "../../animations/jsLottie.json"

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
                        <span className="skills-header" style={{ color: darkMode ? '#edebe8' : '' }}>My <span style={{ color: "#fba61e" }}>Skills</span></span>
                        <div className="lottie-wrapper" style={{ display: "flex", position: "relative", right: "5px" }}>
                            <Lottie role="img" aria-label="JavaScript Icon" style={{ width: "44px" }} animationData={jsIcon} />
                            <Lottie role="img" aria-label="React Icon" style={{ width: "55px" }} animationData={reactIcon} />
                            <Lottie role="img" aria-label="HTML5 Icon" style={{ width: "55px" }} animationData={htmlIcon} />
                            <Lottie role="img" aria-label="CSS3 Icon" style={{ width: "50px" }} animationData={cssIcon} />
                            <Lottie role="img" aria-label="Github Icon" style={{ width: "60px" }} animationData={gitHubIcon} />
                        </div>
                        <span className={darkMode ? "skills-info" : "skills-info-light"}>
                            JavaScript ES2015+ features <br /> React.js<br />
                            HTML5, CSS3, SASS, Bootstrap, <br />
                            DOM/BOM, OOP, MVC, HTTP, AJAX - Promises and fetch<br />
                            REST API's, JSON, Error handling <br />
                            Responsive design<br />
                            Git/Github</span>
                        <div>
                            <span style={{ color: "#fba61e" }}>Education:</span>
                            <div className={darkMode ? "skills-info" : "skills-info-light"}>2022- 2023 IT Talents training camp <br />
                                2020 - 2021 Software university  {`(Java basics, 2 months)`} <br />
                                2014 – 2016	Sofia University {`(Master: European Projects)`} <br />
                                2008 – 2012	Sofia University  {`(Bachelor: European Studies)`}<br /><br />
                            </div>
                            <span style={{ color: "#fba61e" }}>Hobbies: </span>
                            <div className={darkMode ? "skills-info" : "skills-info-light"}>Badminton, Tennis/Table tennis <br />
                                Movie music composer {`(digital piano)`} </div>
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
                <Col className="center-column" >
                    <Wheel />
                </Col>
            </Row>
        </Container >
    )
}

