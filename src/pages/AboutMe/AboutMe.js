import React, { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { themeContext } from "../../Contex"
import ColoredCircle from "../../components/ColoredCircle/ColoredCircle"

import Github from "../../images/aboutMe/github.png"
import LinkedIn from "../../images/aboutMe/linkedin.png"

import "./AboutMe.scss"

export default function AboutMe() {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [cocktail, setCocktail] = useState({
        image: "",
        name: ""
    });

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const greetings = [
        "Hello", "Привет", "Hallo", "Bonjour", "Hola", "Hallå", "Bunâ", "Cześć",
        "Ciao", "Zdravo", "Nǐ hǎo", "Namaste", "Merhaba", "Ahoj", "Xin Chào"];

    const toggleFade = () => {
        setIsFadingOut((prevIsFadingOut) => !prevIsFadingOut);
    };

    const handleCocktail = async () => {
        try {
            const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.drinks && data.drinks.length > 0) {
                    setCocktail({
                        image: data.drinks[0].strDrinkThumb
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


    useEffect(() => {
        const intervalId = setInterval(() => {
            toggleFade();
            setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 2500);

        return () => {
            clearInterval(intervalId);
        };
    })

    return (
        <Container>
            <Row className="about-me-wrapper">
                <Col className="about-me-left-side">
                    <div className="about-me">
                        <span className={`${isFadingOut ? "fade-out" : "fade-in"}`} style={{ color: darkMode ? 'whitesmoke' : '#232d48' }}>{greetings[greetingIndex]}, I am</span>
                        <span className="special-font">Andrei Alexandrov</span>

                        <span className={darkMode ? "about-me-text" : "about-me-text-light-theme"}>
                            Front-End developer with JavaScript and React.js, based in Sofia, Bulgaria.<br />
                            <br />
                            Detail-oriented with a creative mind.<br />
                            Mostly attracted to web/app design and UX, <br />
                            but I am also willing to learn new concepts and technologies. <br />
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
                </Col>

                <Col className="">
                    <ColoredCircle />
                </Col>
            </Row>
        </Container>
    )
}
