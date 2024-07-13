import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import classNames from "classnames";

import ColoredCircle from "../../components/ColoredCircle/ColoredCircle";
import Button from "../../components/Button/Button";

import Github from "../../images/aboutMe/github.png";
import LinkedIn from "../../images/aboutMe/linkedin.png";
import "./AboutMe.scss";

export default function AboutMe() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [cocktail, setCocktail] = useState({
    image: "",
  });

  const { mode } = useSelector((state) => state.darkMode);

  const greetings = [
    "Hello",
    "Привет",
    "Hallo",
    "Bonjour",
    "Hola",
    "Hallå",
    "Bunâ",
    "Cześć",
    "Ciao",
    "Zdravo",
    "Nǐ hǎo",
    "Namaste",
    "Merhaba",
    "Ahoj",
    "Xin Chào",
  ];

  const toggleFade = () => {
    setIsFadingOut((prevIsFadingOut) => !prevIsFadingOut);
  };

  const handleCocktail = async () => {
    try {
      const response = await fetch(
        "https://thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.drinks && data.drinks.length > 0) {
          setCocktail({
            image: data.drinks[0].strDrinkThumb,
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
  });

  return (
    <Container>
      <Row className="about-me-wrapper">
        <Col className="about-me-left-side">
          <div className="about-me">
            <span
              className={classNames({
                "fade-out": isFadingOut,
                "fade-in": !isFadingOut,
              })}
              style={{ color: mode ? "whitesmoke" : "#232d48" }}
            >
              {greetings[greetingIndex]}, I am
            </span>
            <span className="special-font">Andrei Alexandrov</span>

            <span
              className={classNames({
                "global-text-description-dark": mode,
                "global-text-description-light": !mode,
              })}
            >
              <br />
              Front-End developer with JavaScript and React.js, based in Sofia,
              Bulgaria.
              <br />
              <br />
              I pay close attention to details and enjoy creating visually
              appealing and interactive web applications.
              <br />
              <br />I am eager to further my IT knowledge, develop my skills and{" "}
              <br />
              use my creativity as a part of a dynamic team.
              <br />
              <br />
            </span>
          </div>

          <div className="btn-message">
            <Button styleBtn="cocktail-btn" handleAction={handleCocktail}>
              Click for a random cocktail
            </Button>

            {cocktail && (
              <div className="cocktail-info">
                <img src={cocktail.image} alt="Cocktail" />
              </div>
            )}
          </div>

          <div className="about-me-img-wrapper">
            <a
              href="https://www.github.com/andrei-alexandrov"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrei-alexandrov/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn icon" />
            </a>
          </div>
        </Col>

        <Col>
          <ColoredCircle />
        </Col>
      </Row>
    </Container>
  );
}
