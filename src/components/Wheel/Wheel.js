import React, {useState} from 'react';
import { motion } from 'framer-motion';

import Lottie from 'lottie-react';
import bulbIcon from "../../animations/bulbLottie.json"
import hiIcon from "../../animations/hiLottie.json"
import smileIcon from "../../animations/smileLotie.json"
import laptop from "../../animations/laptop.json"
import success from "../../animations/success.json"
import funny from "../../animations/funny.json"
import slice from "../../animations/slice.json"

import "./Wheel.scss"

export default function Wheel() {
    const [rotationCompleted, setRotationCompleted] = useState(true);

    const handleMouseEnter = () => {
        if (!rotationCompleted) {
            return; 
        }

        const randomRotation = Math.random();
        document.querySelector('.main-circle').style.setProperty('--random-rotation', randomRotation);
        setRotationCompleted(false);

        setTimeout(() => {
            setRotationCompleted(true);
        }, 1500);
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
                    <Lottie className='bulb-lottie' animationData={bulbIcon} />
                    <Lottie className='smile-lottie' animationData={smileIcon} />
                    <Lottie animationData={hiIcon} />
                    <Lottie className='funny-lottie' animationData={funny} />
                    <Lottie className='slice-lottie' animationData={slice} />
                    <Lottie className='success-lottie' animationData={success} />
                    <Lottie className='laptop-lottie' animationData={laptop} />

                    {/* <span className="rotation">Hover for random rotation</span>
                    <span className="rotation-tap">Tap for random rotation</span> */}
                </div>
            </motion.div>
        </div>
    );
}
