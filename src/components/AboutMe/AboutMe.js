import React, { useState, useEffect, useContext } from "react"
import { themeContext } from "../../Context"
import { Col, Row, Container } from "react-bootstrap"

import ColoredCircle from "../ColoredCircle/ColoredCircle"
import Github from "../../images/github.png"
import LinkedIn from "../../images/linkedin.png"

import "./AboutMe.scss"
import "../../index.scss"

export default function AboutMe() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

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
                        // name: data.drinks[0].strDrink
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
        <Container fluid>
            <Row>
                <Col>
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
                                        {/* <div className="cocktail-text" style={{ color: darkMode ? '#edebe8' : '' }}>{cocktail.name}</div> */}
                                    </div>
                                )}
                            </div>

                            <div className="about-me-img-wrapper">
                                <a href="https://www.github.com/andrei-alexandrov" target='_blank' rel="noreferrer" >
                                    <img src={Github} alt="Github icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/andrei-alexandrov/" target='_blank' rel="noreferrer" >
                                    <img src={LinkedIn} alt="LinkedIn icon" />
                                </a>
                            </div>
                        </div>

                        <div className="about-me-right-side">
                            {/* <Card className={darkMode ? "dark-mode" : ""} /> */}
                            <ColoredCircle />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}