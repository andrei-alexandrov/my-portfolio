import React from "react"
import ToggleTheme from "../ToggleTheme/ToggleTheme"
import { Link } from "react-scroll"
import "./NavBar.scss"

export default function NavBar() {
    return (
        <nav className="navbar-wrapper">
            <div className="navbar-left-side">
                <div className="navbar-name">A.A. </div>
                <ToggleTheme />
            </div>
            <div className="navbar-right-side">
                <div className="navbar-list">
                    <ul>
                        <Link spy={true} to='Skills' smooth={true} offset={-75}>
                            <li>Skills</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true} offset={-30}>
                            <li>Projects</li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="navbar-btn-wrapper">
                <Link spy={true} to='Contact' smooth={true} offset={-30}>
                    <button className="navbar-btn">Contact me</button>
                </Link>
                <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download>
                    <button className="navbar-btn">Download CV</button>
                </a>
            </div>
        </nav >
    )
}