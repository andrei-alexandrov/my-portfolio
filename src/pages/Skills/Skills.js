import React from "react"
import { Link } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"

import Wheel from "../../components/Wheel/Wheel"
import Button from "../../components/Button/Button"

import Lottie from 'lottie-react';
import reactIcon from "../../animations/reactIcon.json"
import gitHubIcon from "../../animations/gitHubRound.json"
import htmlIcon from "../../animations/htmlLottie.json"
import jsIcon from "../../animations/jsLottie.json"
import sassIconTwo from "../../images/skills/sass-icon-2.png"
import cssIcontwo from "../../images/skills/css-icon-two.png"
import reduxIcon from "../../images/skills/redux.png"

import "./Skills.scss"

export default function Skills() {
    const { mode } = useSelector(state => state.darkMode);

    return (
        <Container>
            <Row id="skills" className="skills-wrapper">
                <Col className="skills-left-side">
                    <div className="skills-details">
                        <span className="skills-header" style={{ color: mode ? '#edebe8' : '' }}>My <span style={{ color: "#fba61e" }}>Skills</span></span>
                        <div className="lottie-wrapper" style={{ display: "flex", position: "relative", right: "5px" }}>
                            <Lottie role="img" aria-label="JavaScript Icon" style={{ width: "46px" }} animationData={jsIcon} />
                            <Lottie role="img" aria-label="React Icon" style={{ width: "57px" }} animationData={reactIcon} />
                            <img className="redux-image" src={reduxIcon} alt="Bootstrap-icon" />
                            <Lottie role="img" aria-label="HTML5 Icon" style={{ width: "55px" }} animationData={htmlIcon} />
                            <img className="css-image" src={cssIcontwo} alt="Css-icon" />
                            <Lottie role="img" aria-label="Github Icon" style={{ width: "67px" }} animationData={gitHubIcon} />
                            <img className="sass-image" src={sassIconTwo} alt="Sass-icon" />
                        </div>
                        <span className={mode ? "skills-info" : "skills-info-light"}>
                            DOM/BOM - storage and timers <br />
                            MVC, HTTP, AJAX - Promises and fetch<br />
                            REST API's, JSON<br />
                            Responsive design<br />
                            Bootstrap <br />
                            Git/Github <br />
                            <br />
                            Currently learning:
                            {/* <span className="redux">&nbsp;Redux</span>, */}
                            <span className="typescript">&nbsp;TypeScript</span> with React.js
                        </span>
                        <div>
                            <span style={{ color: "#fba61e" }}>Education:</span>
                            <div
                                className={mode ? "skills-info" : "skills-info-light"}>
                                2022- 2023 IT Talents training camp <br />
                                2020 - 2021 Software university  {`(Java basics, 2 months)`} <br />
                                2014 – 2016	Sofia University {`(Master: European Projects)`} <br />
                                2008 – 2012	Sofia University  {`(Bachelor: European Studies)`}<br /><br />
                            </div>
                            <span style={{ color: "#fba61e" }}>Hobbies: </span>
                            <div className={mode ? "skills-info" : "skills-info-light"}>
                                Badminton, Tennis <br />
                                Chess <br />
                                Movie music composer {`(digital piano)`} </div>
                        </div>

                        <div className="skills-btn-wrapper">
                            <Link spy={true} to='contact' smooth={true} duration={60} offset={115}>
                                <Button
                                    styleBtn="contact-btn"
                                    hasOnClick={false}
                                >Contact me
                                </Button>
                            </Link>

                            <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download>
                                <Button
                                    styleBtn="contact-btn"
                                    hasOnClick={false}
                                >Download CV
                                </Button>
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

