import React, { useState, useEffect, useContext } from "react"
import { motion } from "framer-motion"
import { themeContext } from "../../Context"

import Card from "../Card/Card"
import Github from "../../images/github.png"
import LinkedIn from "../../images/linkedin.png"
import Instagram from "../../images/instagram.png"
import OrangeShape from "../../images/orangeShape.png"

import "./AboutMe.scss"
import "../../index.scss"

export default function AboutMe() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 2, type: 'linear' };
    const [cocktail, setCocktail] = useState({
        image: "",
        name: ""
    });

    const handleCocktail = async () => {
        try {
            const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.drinks && data.drinks.length > 0) {
                    setCocktail({
                        image: data.drinks[0].strDrinkThumb,
                        name: data.drinks[0].strDrink
                    });
                } else {
                    console.error("No cocktail data found.");
                }
            } else {
                console.error("Error fetching cocktail. Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching cocktail:", error);
        }
    };

    useEffect(() => {
        handleCocktail();
    }, []);

    return (
        <div className="about-me-wrapper">
            <div className="about-me-left-side">
                <div className="about-me">
                    <span style={{ color: darkMode ? '#edebe8' : '' }} >Hello, I am</span>
                    <span>Andrei Alexandrov</span>
                    <span>
                        Front-end developer with JavaScript and React.js, based in Sofia, Bulgaria.<br />
                        <br />
                        Detail-oriented with a creative mind.<br />
                        Mostly attracted to web/app design and UX, <br />
                        but have also willingness to learn new concepts and technologies. <br />
                        <br />
                        I am passionate about furthering my IT knowledge <br />
                        and developing my skills and creativity as part of a dynamic team.
                    </span>
                </div>

                <div className="btn-message">
                    <button className="cocktail-btn" onClick={handleCocktail}>Click for a random cocktail</button>
                    {cocktail && (
                        <div className="cocktail-info">
                            <img src={cocktail.image} alt="Cocktail" />
                            <span>{cocktail.name}</span>
                        </div>
                    )}
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
                    initial={{ left: '-27%' }}
                    whileInView={{ left: '-43%' }}
                    transition={transition}
                    className="orange-splash" src={OrangeShape} alt="splash-image" />
            </div>
        </div>
    )
}