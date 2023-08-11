import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import Card from "../Card/Card"
import Github from "../../images/github.png"
import LinkedIn from "../../images/linkedin.png"
import Instagram from "../../images/instagram.png"
import OrangeShape from "../../images/orangeShape.png"

import "./AboutMe.scss"
import "../../index.scss"

export default function AboutMe({ darkMode }) {
    const transition = { duration: 2, type: 'linear' };
    const [cocktail, setCocktail] = useState("");

    const handleCocktail = async () => {
        try {
            const response = await fetch("https:thecocktaildb.com/api/json/v1/1/random.php");
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.drinks && data.drinks.length > 0) {
                    setCocktail(data.drinks[0].strDrinkThumb);
                } else {
                    console.error("No cocktail data found.");
                }
            } else {
                console.error("Error fetching joke. Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    useEffect(() => {
        handleCocktail();
    }, []);

    return (
        <div className="about-me-wrapper">
            <div className="about-me-left-side">
                <div className="about-me-name">
                    <span>Hello, i Am</span>
                    <span>Andrei Alexandrov</span>
                    <span>
                        Frontend developer with JavaScript and React.js, based in Sofia/Bulgaria.<br />
                        <br />
                        Detail-oriented with a creative mind.<br />
                        Mostly attracted to web/app design and UX, <br />
                        but have also willingness to learn new concepts and technologies. <br />
                        <br />
                        Excited to gain more IT knowledge, <br />
                        I am eager to contribute my skills and creativity to a dynamic team.
                    </span>
                </div>

                <div className="surprise-message">
                    <button className="cocktail-btn" onClick={handleCocktail}>Click for a random cocktail</button>
                    {cocktail && <img src={cocktail} alt="Cocktail" />}
                </div>

                <div className="about-me-img-wrapper">
                    <a href="https://www.github.com/andrei-alexandrov" target='_blank'>
                        <img src={Github} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/andrei-alexandrov/" target='_blank'>
                        <img src={LinkedIn} alt="LinkedIn icon" />
                    </a>
                    <a href="https://www.instagram.com/andrei_alexandrov_/" target='_blank'>
                        <img src={Instagram} alt="Instagram icon" />
                    </a>
                </div>

            </div>

            <div className="about-me-right-side">
                <Card className={darkMode ? "dark-mode" : ""} />
                <motion.img
                    initial={{ left: '-87%' }}
                    whileInView={{ left: '-43%' }}
                    transition={transition}
                    className="orange-splash" src={OrangeShape} alt="rocket-image" />
            </div>

            <div>
                <div className="blur-right" ></div>
                <div className="blur-bottom"></div>
            </div>
        </div>
    )
}