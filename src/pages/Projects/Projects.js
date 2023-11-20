import React, { useState, useRef, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Row, Col } from "react-bootstrap"
import { themeContext } from "../../Contex"
import ColoredLines from "../../components/ColoredLines/ColoredLines";
import Arrows from "../../components/Arrows/Arrows";

// Sports match project photos
import LoginPage from "../../images/projects/sports_match/loginPage.png"
import HomeScreen from "../../images/projects/sports_match/homeScreen.png"
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
import Github from "../../images/projects/github.png"

//Countdown game project photos
import CountdownGame from "../../images/projects/countdown_game/countdownGame.png"
import CountdownGameWin from "../../images/projects/countdown_game/countdown-game-win.png"
import CountdownGameLoss from "../../images/projects/countdown_game/countdown-game-loss.png"

//Technologies used
// import ReactIcon from "../../images/skills/ReactIcon.png"
// import JsIcon from "../../images/skills/JSImage.jpg"
// import SassIcon from "../../images/skills/sass-icon-2.png"

import "./Projects.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
    const [enlargedImg, setEnlargedImg] = useState(null);
    const swiperRefProjectOne = useRef(null);
    const swiperRefProjectTwo = useRef(null);
    const swiperRefProjectThree = useRef(null);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleImageClick = (img) => {
        setEnlargedImg(img);
    };

    const handleCloseClick = () => {
        setEnlargedImg(null);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className="portfolio" id="projects">
                        <ColoredLines />
                        <div className="project-header">
                            <span style={{ color: darkMode ? "white" : "black" }}>My</span> Projects
                        </div>
                        {/* Project 1 */}
                        <div className="project-title">1. Sports Match</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            My own idea created with React.js that helps people with common interests in different sports
                            to meet and play together. The website also provides an opportunity to choose the most
                            convenient places for practicing the desired sport in the respective city/neighborhood.
                            <br />
                            ---
                            <br />
                            Used:
                            <span style={{ color: "#fba51e" }}> Javascript</span>,
                            <span style={{ color: "#129dca" }}> React.js</span>,
                            <span style={{ color: "#ce6b9c" }}> Sass</span>
                            <br />
                            Additional: react-bootstrap, react router,
                            emoji-picker-react, sweetalert2, react-icons, AJAX, local/session storage. <br />
                            Possible chat between 2 users in 2 different tabs from the same browser. <br />
                        </div>

                        <div className="link-content">Source code:
                            <a href="https://www.github.com/andrei-alexandrov/sports-match" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <Swiper
                            ref={swiperRefProjectOne}
                            spaceBetween={30}
                            slidesPerView={4}
                            grabCursor={true}
                            className="portfolio-slider"
                            breakpoints={
                                {
                                    1: {
                                        slidesPerView: 2
                                    },
                                    768: {
                                        slidesPerView: 3
                                    }
                                }
                            }
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
                                        alt="project-pic"
                                        onClick={() => handleImageClick(img)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Arrows swiperRef={swiperRefProjectOne} />

                        {/* Project 2 */}
                        <div className="project-title">2. Adopt Alien Creatures</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            A small project for adopting alien creatures. You can adopt/leave an alien, or
                            donate to support it. Animated background on most pages.
                            <br />
                            ---
                            <br />
                            Used:  <span style={{ color: "#fba51e" }}> Javascript</span>, MVC pattern</div>

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
                            breakpoints={
                                {
                                    1: {
                                        slidesPerView: 2
                                    },
                                    768: {
                                        slidesPerView: 3
                                    }

                                }
                            }
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
                                        alt="project-pic"
                                        onClick={() => handleImageClick(img)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Arrows swiperRef={swiperRefProjectTwo} />

                        {/* Project 3 */}
                        <div className="project-title">3. Countdown game</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            Stop the timer once you estimate that time is (almost) up. Lowest score is 1, max is 99.
                            <br />
                            ---
                            <br />
                            Used:
                            <span style={{ color: "#fba51e" }}> Javascript</span>,
                            <span style={{ color: "#129dca" }}> React.js</span>,
                            <span style={{ color: "#ce6b9c" }}> Sass</span>
                        </div>

                        <div className="link-content">Source code:
                            <a href="https://github.com/andrei-alexandrov/countdown-game" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <Swiper
                            ref={swiperRefProjectThree}
                            spaceBetween={30}
                            slidesPerView={3}
                            grabCursor={true}
                            className="portfolio-slider"
                            breakpoints={
                                {
                                    1: {
                                        slidesPerView: 2
                                    },
                                    768: {
                                        slidesPerView: 3
                                    }

                                }
                            }
                        >
                            {[
                                CountdownGame,
                                CountdownGameWin,
                                CountdownGameLoss,
                            ].map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt="project-pic"
                                        onClick={() => handleImageClick(img)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Arrows swiperRef={swiperRefProjectThree} />

                        {/* Project 4 */}
                        <div className="project-title">4. This portfolio</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            ---
                            <br />
                            Used:
                            <span style={{ color: "#fba51e" }}> Javascript</span>,
                            <span style={{ color: "#129dca" }}> React.js</span>,
                            <span style={{ color: "#ce6b9c" }}> Sass</span>
                            <br />
                            Additional: swiper, react-particles, emailJS, framer motion, react-scroll,
                            iconscout/react-unicorns, tsparticles, thecocktaildb API, react-lottie, gsap. Fully responsive.
                        </div>
                        <div className="link-content">Source code:
                            <a href="https://github.com/andrei-alexandrov/my-portfolio" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        {enlargedImg && (
                            <div className="enlarged-image-overlay" onClick={handleCloseClick}>
                                <div className="enlarged-image-container">
                                    <img src={enlargedImg} alt="pic" className="enlarged-image" />
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
