import React, { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Arrows from "../Arrows/Arrows";
import { Col, Row, Container } from "react-bootstrap"

// Sports match project photos
import LoginPage from "../../images/projects/sports_match/loginPage.jpg"
import HomeScreen from "../../images/projects/sports_match/homeScreen.jpg"
import ProfilePage from "../../images/projects/sports_match/profilePage.jpg"
import ActivitiesPage from "../../images/projects/sports_match/activitiesPage.jpg"
import BuddySearch from "../../images/projects/sports_match/buddySearch.jpg"
import ChatPage from "../../images/projects/sports_match/chatPage.jpg"
import PlacesPage from "../../images/projects/sports_match/placesPages.jpg"

//Adopt aliens project photos
import LoginAlienPage from "../../images/projects/adopt_aliens/login.jpg"
import HomeAlienPage from "../../images/projects/adopt_aliens/home.jpg"
import AdoptedAlienPage from "../../images/projects/adopt_aliens/adopted.jpg"
import DonateAlienPage from "../../images/projects/adopt_aliens/donate.jpg"
import LoginAlienPageTwo from "../../images/projects/adopt_aliens/login2.jpg"
import Github from "../../images/github.png"

import "./Projects.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Projects() {
    const [enlargedImg, setEnlargedImg] = useState(null);
    const swiperRefProjectOne = useRef(null);
    const swiperRefProjectTwo = useRef(null);

    const handleImageClick = (img) => {
        setEnlargedImg(img);
    };

    const handleCloseClick = () => {
        setEnlargedImg(null);
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="portfolio" id="Projects">
                        <div>My Projects</div>
                        <div className="project-title">1. Sports Match</div>
                        <div className="portfolio-project-text">My own idea created with React.js that helps people with common interests in different sports
                            to meet and play together. The website also provides an opportunity to choose the most
                            convenient places for practicing the desired sport in the respective city/neighborhood.
                            <br />
                            ---
                            <br />
                            Used: Javascript, React.js, React Router, SASS, react-bootstrap,
                            emoji-picker-react, sweetalert2, react-icons, AJAX, local/session storage.
                        </div>

                        <div className="link-content">Source code:
                            <a href="https://www.github.com/andrei-alexandrov/sports-match" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <Swiper
                            ref={swiperRefProjectOne}
                            spaceBetween={30}
                            slidesPerView={3}
                            grabCursor={true}
                            className="portfolio-slider"
                        >
                            {[
                                HomeScreen,
                                BuddySearch,
                                ChatPage,
                                LoginPage,
                                ProfilePage,
                                ActivitiesPage,
                                PlacesPage
                            ].map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt="Project"
                                        onClick={() => handleImageClick(img)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Arrows swiperRef={swiperRefProjectOne} />

                        <div className="project-title">2. Adopt Alien Creatures</div>
                        <div className="portfolio-project-text">A small project for adopting alien creatures. You can adopt/leave an alien, or
                            donate to support it. Animated background on most pages.
                            <br />
                            ---
                            <br />
                            Used: Javascript, MVC pattern</div>

                        <div className="link-content">Source code:
                            <a href="https://www.github.com/andrei-alexandrov/adopt-aliens" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <Swiper
                            ref={swiperRefProjectTwo}
                            spaceBetween={30}
                            slidesPerView={3}
                            grabCursor={true}
                            className="portfolio-slider"
                        >
                            {[
                                LoginAlienPage,
                                HomeAlienPage,
                                AdoptedAlienPage,
                                DonateAlienPage,
                                LoginAlienPageTwo
                            ].map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt="Project"
                                        onClick={() => handleImageClick(img)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Arrows swiperRef={swiperRefProjectTwo} />

                        <div className="project-title">3. This portfolio</div>
                        <div className="portfolio-project-text">
                            Used: JavaScript, React.js, swiper, react-particles, SASS, emailJS, framer motion, react-scroll,
                            iconscout/react-unicorns, tsparticles, thecocktaildb API.
                        </div>
                        <div className="link-content">Source code:
                            <a href="https://github.com/andrei-alexandrov/my-portfolio" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        {enlargedImg && (
                            <div className="enlarged-image-overlay" onClick={handleCloseClick}>
                                <div className="enlarged-image-container">
                                    <img src={enlargedImg} alt="" className="enlarged-image" />
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
