import React, { useState, useContext } from 'react';
import { themeContext } from "../..//Contex"

import LetterA from "../../images/aboutMe/letterA.jpg"
import './ColoredCircle.scss';

export default function ColoredCircle() {
    // rgb(191, 21, 168),  rgb(123, 19, 250)
    // const [insetShadowColor, setInsetShadowColor] = useState('rgba(30, 115, 251, 0.808)');
    // const [outerShadowColor, setOuterShadowColor] = useState('rgba(90, 34, 139, 1)');
    const [insetShadowColor, setInsetShadowColor] = useState('rgba(56, 188, 0)');
    const [outerShadowColor, setOuterShadowColor] = useState('rgba(140, 250, 239, 0.5)');

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const gradient = '#fba61e';

    const getRandomRGBA = () => {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);

        return `rgba(${randomR}, ${randomG}, ${randomB})`;
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
                    <button style={{
                        backgroundColor: darkMode ? gradient : '',
                    }}
                        onClick={changeColors}>Change colors</button>
                </div>
            </div>
        </div>
    );
}
