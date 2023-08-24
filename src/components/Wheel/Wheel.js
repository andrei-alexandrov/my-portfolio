import React from 'react';
import { motion } from 'framer-motion';

import ReactIcon from "../../images/skills/ReactIcon.png"
import JsIcon from "../../images/skills/JSImage.jpg"
import CSSIcon from "../../images/skills/CSS.png"
import HTMLIcon from "../../images/skills/HTML.png"
import SASSIcon from "../../images/skills/Sass.png"
import GithubIcon from "../../images/skills/GitHub-Mark.png"
import BootstrapIcon from "../../images/skills/bootstrap5.jpeg"

import "./Wheel.scss"

export default function Wheel() {
    const handleMouseEnter = () => {
        const randomRotation = Math.random();
        document.querySelector('.main-circle').style.setProperty('--random-rotation', randomRotation);
    };

    return (
        <div className="skills-right-side" >
            <motion.div
                className="main-circle"
                initial={{ left: '45%' }}
                whileInView={{ left: '2%' }}
                transition={{ duration: 1.5, ease: 'linear' }}
                onMouseEnter={handleMouseEnter}
            >
                <div className="secondary-circle">
                    <img src={ReactIcon} alt="React icon" />
                    <img src={CSSIcon} alt="CSS icon" />
                    <img src={JsIcon} alt="JS icon" />
                    <img src={HTMLIcon} alt="HTML icon" />
                    <img src={SASSIcon} alt="SASS icon" />
                    <img src={GithubIcon} alt="Github icon" />
                    <img src={BootstrapIcon} alt="Bootstrap icon" />
                    <span className="rotation">Hover for random rotation</span>
                    <span className="rotation-tap">Tap for random rotation</span>
                </div>
            </motion.div>
        </div>
    );
}
