import React, { useState, useContext } from 'react';
import { themeContext } from "../../Context"

import LetterA from "../../images/letterA.jpg"
import './ColoredCircle.scss';

export default function ColoredCircle() {
    const [insetShadowColor, setInsetShadowColor] = useState('rgba(56, 188, 0, 0.808)');
    const [outerShadowColor, setOuterShadowColor] = useState('rgba(140, 250, 239, 0.5)');

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const gradient = '#fba61e';

    const getRandomRGBA = () => {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        const randomA = Math.random();

        return `rgba(${randomR}, ${randomG}, ${randomB}, ${randomA})`;
    };

    const changeColors = () => {
        setInsetShadowColor(getRandomRGBA());
        setOuterShadowColor(getRandomRGBA());
    };

    return (
        <div id='ColoredCircle' className='drop-card-container'>
            <div
                className='drop-card'
                style={{
                    boxShadow: `25px 35px 20px rgba(0, 0, 0, 0.5),
                                inset -20px -20px 25px ${insetShadowColor},
                                0 0 70px ${outerShadowColor}`
                }}
            >
                <div className='drop-card-content'>
                    <h2> <img src={LetterA} alt='LetterA'></img></h2>
                    <p></p>
                    <button style={{
                        backgroundColor: darkMode ? gradient : '',
                        
                    }}
                        onClick={changeColors}>Change colors</button>
                </div>
            </div>
        </div>
    );
}
