import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import "./StartingPage.scss";

const StartingPage = ({ onEnter }) => {
    const introRef = useRef(null);

    useEffect(() => {
        const DOM = {
            enterCtrl: introRef.current.querySelector('.button-enter'),
        };

        const circleText = [...introRef.current.querySelectorAll('text.circles-text')];
        const enterBackground = introRef.current.querySelector('.circles');

        const initEvents = () => {
            DOM.enterCtrl.addEventListener('mouseenter', onMouseEnter);
            DOM.enterCtrl.addEventListener('mouseleave', onMouseLeave);
            gsap.set(circleText, { transformOrigin: '50% 50%' });
        };

        const start = () => {
            gsap.timeline()
                .to(circleText, {
                    duration: 1.8,
                    startAt: { opacity: 0, scale: 1.4 },
                    scale: 1,
                    opacity: 1,
                })
        };

        const onMouseEnter = () => {
            gsap.to(enterBackground, {
                duration: 5,
                ease: 'expo',
                scale: 1.1
            });
            gsap.to(circleText, {
                duration: 5,
                ease: 'expo',
                scale: 1.15,
                rotation: i => i % 2 ? '-=90' : '+=90',
                opacity: 0.4,
            });
        };

        const onMouseLeave = () => {
            gsap.to(enterBackground, {
                duration: 5,
                ease: 'expo',
                scale: 1
            });
            gsap.to(circleText, {
                duration: 5,
                ease: 'expo',
                scale: 1,
                rotation: i => i % 2 ? '+=110' : '-=110',
                opacity: 1,
                stagger: {
                    amount: -0.2
                }
            });
        };

        start();
        initEvents();
    }, []);

    return (
        <div ref={introRef} className="circles">
            <main>
                <svg className="circles" viewBox="0 0 1400 1400">
                    <defs>
                        <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
                        <path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
                        <path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
                        <path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
                    </defs>
                    <text className="circles-text circles-text-1">
                        <textPath xlinkHref="#circle-1" textLength="2830">Welcome▸to my▸portfolio▸</textPath>
                    </text>
                    <text className="circles-text circles-text-2">
                        <textPath xlinkHref="#circle-2" textLength="2001">React▸JS▸Sass▸</textPath>
                    </text>
                    <text className="circles-text circles-text-3">
                        <textPath xlinkHref="#circle-3" textLength="1341">Html▸css▸git▸&nbsp;</textPath>
                    </text>
                    <text className="circles-text circles-text-4">
                        <textPath xlinkHref="#circle-4" textLength="836"></textPath>
                    </text>
                </svg>

                <button className="button-enter" onClick={onEnter}>
                    <span className="button-enter-btn-text">Enter</span>
                </button>
            </main>
        </div>
    );
};

export default StartingPage;
