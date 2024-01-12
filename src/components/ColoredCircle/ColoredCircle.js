import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import logoOne from "../../images/aboutMe/myLogo-1.png"
import logoTwo from "../../images/aboutMe/myLogo-2.png"
import './ColoredCircle.scss';

export default function ColoredCircle() {
    const [insetShadowColor, setInsetShadowColor] = useState('rgba(30, 115, 251)');
    const [outerShadowColor, setOuterShadowColor] = useState('rgba(90, 34, 139)');

    const { mode } = useSelector(state => state.darkMode);

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
                                0 0 30px ${outerShadowColor}`
                }}
            >
                <div className='drop-card-content'>
                    <div className='image-wrapper-logo'>
                        <img src={mode ? logoOne : logoTwo} alt='LetterA' />
                    </div>
                    <button
                        className={`${mode ? "darkThemeBtnColor" : "lightThemeBtnColor"}`}
                        onClick={changeColors}>
                        Change colors
                    </button>
                </div>
            </div>
        </div >
    );
}
