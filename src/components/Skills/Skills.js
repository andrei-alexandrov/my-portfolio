import React from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

import ReactIcon from "../../images/skillsImages/ReactIcon.png"
import JsIcon from "../../images/skillsImages/JSImage.jpg"
import CSSIcon from "../../images/skillsImages/CSS.png"
import HTMLIcon from "../../images/skillsImages/HTML.png"
import SASSIcon from "../../images/skillsImages/Sass.png"
import GithubIcon from "../../images/skillsImages/GitHub-Mark.png"
import BootstrapIcon from "../../images/skillsImages/bootstrap5.jpeg"

import "./Skills.scss";


export default function Skills() {
    const transition = { duration: 1.7, ease: 'linear' };

    const handleMouseEnter = () => {
        const randomRotation = Math.random();
        document.querySelector('.main-circle').style.setProperty('--random-rotation', randomRotation);

    };

    return (
        <div id="Skills">
            <div className="skills-wrapper">
                <div className="skills-left-side">
                    <div className="skills-details">
                        <span style={{ color: "#232d48" }}>My <span style={{ color: "#FCA61F" }}>Skills</span></span>
                        <span>JavaScript ES2015+ features <br />React.js <br />
                            HTML5, CSS3, SASS, Bootstrap, <br />
                            DOM/BOM, OOP, MVC, HTTP, AJAX - Promises and fetch/axios<br />
                            Error handling <br />
                            Responsive design basics<br />
                            Git/Github</span>
                        <span style={{ color: "#FCA61F" }}>Education:</span>
                        <div style={{ color: "#788097" }}>2022- 2023 IT Talents training camp</div>
                        <Link spy={true} to='Contact' smooth={true} offset={-30}>
                            <button className="contact-btn">Contact me</button>
                        </Link>
                    </div>
                </div>

                <motion.div className="skills-right-side"
                    initial={{ left: '45%' }}
                    whileInView={{ left: '3%' }}
                    transition={transition}>
                    <div className="main-circle"
                        onMouseEnter={handleMouseEnter}>
                        <div className="secondary-circle">
                            <img src={ReactIcon} alt="React icon" />
                            <img src={CSSIcon} alt="CSS icon" />
                            <img src={JsIcon} alt="JS icon" />
                            <img src={HTMLIcon} alt="HTML icon" />
                            <img src={SASSIcon} alt="SASS icon" />
                            <img src={GithubIcon} alt="Github icon" />
                            <img src={BootstrapIcon} alt="Bootstrap icon" />
                            <span className="rotation">Hover for random rotation</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div>
                <div className="blur-right" ></div>
                <div className="blur-bottom"></div>
            </div>
        </div>
    )
}