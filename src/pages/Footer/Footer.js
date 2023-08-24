import React from 'react'
import Github from "@iconscout/react-unicons/icons/uil-github"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"

import "./Footer.scss"

export default function Footer() {

    return (
        <div className='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FCA61F" fillOpacity="1" d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,117.3C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className='footer-wrapper'>
                <span className='footer-text'>Created by Andrei Alexandrov 2023</span>
                <span className='footer-text'>andrei.alxv@gmail.com</span>
                <div className='icons'>
                    <a href='https://www.github.com/andrei-alexandrov' target='_blank' rel="noreferrer">
                        <Github color='white' size='3rem' />
                    </a>
                    <a href='https://www.linkedin.com/in/andrei-alexandrov/' target='_blank' rel="noreferrer">
                        <LinkedIn color='white' size='3rem' />
                    </a>
                </div>
            </div>
        </div>
    )
}
