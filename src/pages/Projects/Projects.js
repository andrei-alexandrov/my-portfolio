import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import ColoredLines from "../../components/ColoredLines/ColoredLines";
import Arrows from "../../components/Arrows/Arrows";
import SwiperComponent from "../../components/ImageSlider/ImageSlider";
import Button from "../../components/Button/Button";

// Sports match project photos
import LoginPage from "../../images/projects/sports_match/loginPage.png";
import HomeScreen from "../../images/projects/sports_match/homeScreen.png";
import ProfilePage from "../../images/projects/sports_match/profilePage.jpg";
import ActivitiesPage from "../../images/projects/sports_match/activitiesPage.jpg";
import BuddySearch from "../../images/projects/sports_match/buddySearch.jpg";
import ChatPage from "../../images/projects/sports_match/chatPage.jpg";
import PlacesPage from "../../images/projects/sports_match/placesPages.jpg";

//Cocktail site project photos
import CocktailsStartingPage from "../../images/projects/cocktail_site/cocktails-starting-image.png";
import CocktailsHomePage from "../../images/projects/cocktail_site/cocktails-home.png";
import CocktailsFavoritesPage from "../../images/projects/cocktail_site/cocktails-favorites.png";
import CocktailsDetailsPage from "../../images/projects/cocktail_site/cocktails-details.png";

//IMDb project photos
import imdbImageOne from "../../images/projects/imdb-clone/imdb-clone-1.png";
import imdbImageTwo from "../../images/projects/imdb-clone/imdb-clone-2.png";
import imdbImageThree from "../../images/projects/imdb-clone/imdb-clone-3.png";

//Countdown game project photos
import CountdownGame from "../../images/projects/countdown_game/countdownGame.png";
import CountdownGameWin from "../../images/projects/countdown_game/countdown-game-win.png";
import CountdownGameLoss from "../../images/projects/countdown_game/countdown-game-loss.png";

//Taskify project photos
import TaskifyCompleted from "../../images/projects/taskify/taskify-completed.png";
import TaskifyDelete from "../../images/projects/taskify/daily-tasks-app.png";
import TaskifyEdit from "../../images/projects/taskify/taskify-edit.png";

import Github from "../../images/projects/github.png";

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

  const { mode } = useSelector((state) => state.darkMode);

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
              <span style={{ color: mode ? "white" : "black" }}>My</span>{" "}
              Projects
            </div>

            {/* Project 1 */}
            <div className="project-title">1. Sports Match</div>
            <div
              className={
                mode ? "portfolio-project-text" : "portfolio-project-text-light"
              }
            >
              <div>
                My own idea for a website that helps people with shared
                interests to interact and participate together in different
                sports. The website also provides an opportunity to choose the
                most convenient place for the desired activity in the respective
                city and neighborhood.
                <br />
                ---
                <br />
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Used:&nbsp;
                </span>
                <span className="javascript">JavaScript,</span>
                <span className="react">&nbsp;React.js,</span>
                <span className="sass">&nbsp;Sass</span>
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Additional:&nbsp;{" "}
                </span>
                <span>
                  react-bootstrap, react router, emoji-picker-react,
                  sweetalert2, react-icons, AJAX, local/session storage.{" "}
                </span>
                <br />
                <span>
                  Possible chat between 2 users in 2 different tabs from the
                  same browser.
                </span>
                <br />
              </div>
            </div>
            <br />
            <div className="link-content">
              Source code:
              <a
                href="https://www.github.com/andrei-alexandrov/sports-match"
                target="_blank"
                rel="noreferrer"
              >
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
                PlacesPage,
              ]}
              swiperRef={swiperRefProjectOne}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectOne} />

            {/* Project 2 */}
            <div className="project-title">2. Cocktails site</div>
            <div
              className={
                mode ? "portfolio-project-text" : "portfolio-project-text-light"
              }
            >
              <div>
                <span>
                  Find interesting cocktails and get their recipes. If you like
                  a specific one, add it to favorites.
                </span>
                <br />
                ---
                <br />
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Used:&nbsp;
                </span>
                <span className="javascript">JavaScript,</span>
                <span className="react">&nbsp;React.js,</span>
                <span className="redux">&nbsp;Redux,</span>
                <span className="sass">&nbsp;Sass</span>
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Additional:&nbsp;
                </span>
                <span>
                  redux thunk, react-router, gsap, react-boostrap, lottie-react,
                  TheCocktailDb.
                </span>
                <br />
              </div>
            </div>

            <a
              href="https://cocktail-site-andrei.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button styleBtn="project-play-btn" hasOnClick={false}>
                Visit here
              </Button>
            </a>

            <br />
            <div className="link-content">
              Source code:
              <a
                href="https://github.com/andrei-alexandrov/cocktails-site"
                target="_blank"
                rel="noreferrer"
              >
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
            <div className="project-title">3. IMDb clone</div>
            <div
              className={
                mode ? "portfolio-project-text" : "portfolio-project-text-light"
              }
            >
              <div>
                <span>
                  Find a movie, check trending and top rated movies in real
                  time.
                </span>
                <br />
                ---
                <br />
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Used:&nbsp;
                </span>
                <span className="javascript">JavaScript,</span>
                <span className="next-js">&nbsp;Next.js,</span>
                <span className="sass">&nbsp;Tailwind css</span>
                <br />
              </div>
            </div>

            <a
              href="https://imdb-next-js-andrei-alexandrov.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button styleBtn="project-play-btn" hasOnClick={false}>
                Visit here
              </Button>
            </a>

            <br />
            <div className="link-content">
              Source code:
              <a
                href="https://github.com/andrei-alexandrov/imdb-next.js"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>

            <SwiperComponent
              images={[
               imdbImageOne,
               imdbImageTwo,
               imdbImageThree
              ]}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectThree} />

            {/* Project 4 */}
            <div className="project-title">4. Countdown game</div>
            <div
              className={
                mode ? "portfolio-project-text" : "portfolio-project-text-light"
              }
            >
              <div>
                Stop the timer once you estimate that time is (almost) up.
                Lowest score is 1, max is 99.
                <br />
                ---
                <br />
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Used:&nbsp;
                </span>
                <span className="javascript">JavaScript,</span>
                <span className="react">&nbsp;React.js,</span>
                <span className="sass">&nbsp;Sass</span>
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Additional:{" "}
                </span>
                <span>&nbsp; Fully responsive.</span>
              </div>
            </div>

            <a
              href="https://countdown-timer-game.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button styleBtn="project-play-btn" hasOnClick={false}>
                Play here
              </Button>
            </a>
            <br />
            <div className="link-content">
              Source code:
              <a
                href="https://github.com/andrei-alexandrov/countdown-game"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>

            <SwiperComponent
              images={[CountdownGame, CountdownGameWin, CountdownGameLoss]}
              swiperRef={swiperRefProjectThree}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectThree} />

            {/* Project 5 */}
            <div className="project-title">5. Taskify</div>
            <div
              className={
                mode ? "portfolio-project-text" : "portfolio-project-text-light"
              }
            >
              <div>
                Add/delete/edit one or more tasks. <br />
                ---
                <br />
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Used:&nbsp;
                </span>
                <span className="typescript">TypeScript,</span>
                <span className="react">&nbsp;React.js,</span>
                <span className="css">&nbsp;CSS</span>
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Additional:{" "}
                </span>
                <span>
                  &nbsp;Fully responsive. This is my first project where I am
                  learning to use TypeScript with React.js. I will implement
                  redux toolkit and add new feautures soon.
                </span>
              </div>
            </div>

            <a
              href="https://todo-app-typescript-andrei.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button styleBtn="project-play-btn" hasOnClick={false}>
                Visit here
              </Button>
            </a>
            <br />

            <div className="link-content">
              Source code:
              <a
                href="https://github.com/andrei-alexandrov/todo-app-typescript"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>

            <SwiperComponent
              images={[TaskifyCompleted, TaskifyDelete, TaskifyEdit]}
              swiperRef={swiperRefProjectFour}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectFour} />

            {/* Project 6 */}
            <div className="project-title">6. This portfolio</div>
            <div
              className={
                mode ? "portfolio-project-text" : "portfolio-project-text-light"
              }
            >
              <div>
                ---
                <br />
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Used:&nbsp;
                </span>
                <span className="javascript">JavaScript,</span>
                <span className="react">&nbsp;React.js,</span>
                <span className="redux">&nbsp;Redux,</span>
                <span className="sass">&nbsp;Sass,</span>
                <br />
                <span
                  className={
                    mode ? "used-additional-white" : "used-additional-black"
                  }
                >
                  Additional:
                </span>
                <span>
                  &nbsp;<span className="three-js">Three.js, </span>
                  swiper, react-particles, emailJS, framer motion, react-scroll,
                  iconscout/react-unicorns, tsparticles, TheCocktailDb API,
                  react-lottie, gsap. Fully responsive.
                </span>
              </div>
            </div>
            <br />
            <div className="link-content">
              Source code:
              <a
                href="https://github.com/andrei-alexandrov/my-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>

            {enlargedImg && (
              <div
                className="enlarged-image-overlay"
                onClick={handleCloseClick}
              >
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
