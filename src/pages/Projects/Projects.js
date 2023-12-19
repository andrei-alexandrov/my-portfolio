import React, { useState, useRef, useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { themeContext } from "../../Contex"
import ColoredLines from "../../components/ColoredLines/ColoredLines";
import Arrows from "../../components/Arrows/Arrows";
import SwiperComponent from "../../components/ImageSlider/ImageSlider";

// Sports match project photos
import LoginPage from "../../images/projects/sports_match/loginPage.png"
import HomeScreen from "../../images/projects/sports_match/homeScreen.png"
import ProfilePage from "../../images/projects/sports_match/profilePage.jpg"
import ActivitiesPage from "../../images/projects/sports_match/activitiesPage.jpg"
import BuddySearch from "../../images/projects/sports_match/buddySearch.jpg"
import ChatPage from "../../images/projects/sports_match/chatPage.jpg"
import PlacesPage from "../../images/projects/sports_match/placesPages.jpg"

//Cocktail site project photos
import CocktailsStartingPage from "../../images/projects/cocktail_site/cocktails-starting-image.png"
import CocktailsHomePage from "../../images/projects/cocktail_site/cocktails-home.png"
import CocktailsFavoritesPage from "../../images/projects/cocktail_site/cocktails-favorites.png"
import CocktailsDetailsPage from "../../images/projects/cocktail_site/cocktails-details.png"

//Countdown game project photos
import CountdownGame from "../../images/projects/countdown_game/countdownGame.png"
import CountdownGameWin from "../../images/projects/countdown_game/countdown-game-win.png"
import CountdownGameLoss from "../../images/projects/countdown_game/countdown-game-loss.png"

//Adopt aliens project photos
import LoginAlienPage from "../../images/projects/adopt_aliens/login.jpg"
import HomeAlienPage from "../../images/projects/adopt_aliens/home.jpg"
import AdoptedAlienPage from "../../images/projects/adopt_aliens/adopted.jpg"
import DonateAlienPage from "../../images/projects/adopt_aliens/donate.jpg"
import LoginAlienPageTwo from "../../images/projects/adopt_aliens/login2.jpg"
import Github from "../../images/projects/github.png"


import "./Projects.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
    const [enlargedImg, setEnlargedImg] = useState(null);
    const swiperRefProjectOne = useRef(null);
    const swiperRefProjectTwo = useRef(null);
    const swiperRefProjectThree = useRef(null);
    const swiperRefProjectFour = useRef(null);

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
                            <span style={{ color: "white" }}>Used:&nbsp;</span>
                            <span style={{ color: "#fba51e" }}>Javascript</span>,
                            <span style={{ color: "#129dca" }}>&nbsp;React.js</span>,
                            <span style={{ color: "#ce6b9c" }}>&nbsp;Sass</span>
                            <br />
                            <span style={{ color: "white" }}>Additional:&nbsp; </span> react-bootstrap, react router,
                            emoji-picker-react, sweetalert2, react-icons, AJAX, local/session storage. <br />
                            Possible chat between 2 users in 2 different tabs from the same browser. <br />
                        </div>
                        <br></br>
                        <div className="link-content">Source code:
                            <a href="https://www.github.com/andrei-alexandrov/sports-match" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <SwiperComponent
                            images={[
                                HomeScreen,
                                BuddySearch,
                                ChatPage,
                                LoginPage,
                                ProfilePage,
                                ActivitiesPage,
                                PlacesPage]}
                            swiperRef={swiperRefProjectOne}
                            enlargeImage={handleImageClick}
                        />
                        <Arrows swiperRef={swiperRefProjectOne} />

                        {/* Project 2 */}
                        <div className="project-title">2. Cocktail site</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            Find interesting cocktails and get their recipes. If you like a specific one, add it to favorites.
                            <br />
                            ---
                            <br />
                            <span style={{ color: "white" }}>Used:&nbsp;</span>
                            <span style={{ color: "#fba51e" }}>Javascript</span>,
                            <span style={{ color: "#129dca" }}>&nbsp;React.js</span>,
                            <span style={{ color: "#7a50be" }}>&nbsp;Redux</span>,
                            <span style={{ color: "#ce6b9c" }}>&nbsp;Sass</span>
                            <br />
                            <span style={{ color: "white" }}>Additional:&nbsp;</span>
                            redux thunk, react-router, gsap, react-boostrap, lottie-react, TheCocktailDb.<br />
                        </div>

                        <a href="https://cocktail-site-andrei.netlify.app/" target='_blank' rel="noreferrer">
                            <button className="project-3-play-btn">Visit here</button>
                        </a>

                        <br></br>
                        <div className="link-content">Source code:
                            <a href="https://github.com/andrei-alexandrov/cocktails-site" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <SwiperComponent
                            images={[
                                CocktailsStartingPage,
                                CocktailsHomePage,
                                CocktailsFavoritesPage,
                                CocktailsDetailsPage,
                            ]}
                            swiperRef={swiperRefProjectTwo}
                            enlargeImage={handleImageClick}
                        />
                        <Arrows swiperRef={swiperRefProjectTwo} />

                        {/* Project 3 */}
                        <div className="project-title">3. Countdown game</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            Stop the timer once you estimate that time is (almost) up. Lowest score is 1, max is 99.
                            <br />
                            ---
                            <br />
                            <span style={{ color: "white" }}>Used:&nbsp;</span>
                            <span style={{ color: "#fba51e" }}>Javascript</span>,
                            <span style={{ color: "#129dca" }}>&nbsp;React.js</span>,
                            <span style={{ color: "#ce6b9c" }}>&nbsp;Sass</span>
                        </div>

                        <a href="https://countdown-timer-game.netlify.app/" target='_blank' rel="noreferrer">
                            <button className="project-3-play-btn">Play here</button>
                        </a>
                        <br></br>
                        <div className="link-content">Source code:
                            <a href="https://github.com/andrei-alexandrov/countdown-game" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <SwiperComponent
                            images={[
                                CountdownGame,
                                CountdownGameWin,
                                CountdownGameLoss,
                            ]}
                            swiperRef={swiperRefProjectThree}
                            enlargeImage={handleImageClick}
                        />
                        <Arrows swiperRef={swiperRefProjectThree} />

                        {/* Project 4 */}
                        <div className="project-title">4. Adopt Alien Creatures</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            A small project for adopting alien creatures. You can adopt/leave an alien, or
                            donate to support it. Animated background on most pages.
                            <br />
                            ---
                            <br />
                            <span style={{ color: "white" }}>Used:&nbsp;</span>
                            <span style={{ color: "#fba51e" }}>Javascript</span>,&nbsp;MVC pattern</div>
                        <br></br>
                        <div className="link-content">Source code:
                            <a href="https://www.github.com/andrei-alexandrov/adopt-aliens" target='_blank' rel="noreferrer">
                                <img src={Github} alt="Github" />
                            </a>
                        </div>

                        <SwiperComponent
                            images={[
                                LoginAlienPage,
                                HomeAlienPage,
                                AdoptedAlienPage,
                                DonateAlienPage,
                                LoginAlienPageTwo
                            ]}
                            swiperRef={swiperRefProjectFour}
                            enlargeImage={handleImageClick}
                        />
                        <Arrows swiperRef={swiperRefProjectFour} />

                        {/* Project 5 */}
                        <div className="project-title">5. This portfolio</div>
                        <div className={darkMode ? "portfolio-project-text" : "portfolio-project-text-light"}>
                            ---
                            <br />
                            <span style={{ color: "white" }}>Used:&nbsp;</span>
                            <span style={{ color: "#fba51e" }}>Javascript</span>,
                            <span style={{ color: "#129dca" }}>&nbsp;React.js</span>,
                            <span style={{ color: "#ce6b9c" }}>&nbsp;Sass</span>
                            <br />
                            <span style={{ color: "white" }}>Additional: </span>
                            swiper, react-particles, emailJS, framer motion, react-scroll,
                            iconscout/react-unicorns, tsparticles, TheCocktailDb API, react-lottie, gsap.
                            Fully responsive.
                        </div>
                        <br></br>
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
