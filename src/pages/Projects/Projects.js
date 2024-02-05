import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProjectCard from "../../components/ProjectDescription/ProjectDescription";

import ColoredLines from "../../components/ColoredLines/ColoredLines";
import Arrows from "../../components/Arrows/Arrows";
import SwiperComponent from "../../components/ImageSlider/ImageSlider";

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
  const swiperRefProjectFive = useRef(null);

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
            <ProjectCard
              title="1. Sports Match"
              description=" My own idea for a website that helps people with shared
              interests to interact and participate together in different
              sports. The website also provides an opportunity to choose the
              most convenient place for the desired activity in the respective
              city and neighborhood."
              used={[
                { name: "JavaScript", className: "javascript" },
                { name: "React.js", className: "react" },
                { name: "Sass", className: "sass" },
              ]}
              additional="react-bootstrap, react router, emoji-picker-react,
              sweetalert2, react-icons, AJAX, local/session storage.   
              Possible chat between 2 users in 2 different tabs from the same browser."
              sourceLink={{
                url: "https://github.com/andrei-alexandrov/sports-match",
                icon: Github,
              }}
              mode={mode}
            />

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
            <ProjectCard
              title="2. Cocktails Site"
              description="Find interesting cocktails and get their recipes. If you like
              a specific one, add it to favorites."
              used={[
                { name: "JavaScript", className: "javascript" },
                { name: "React.js", className: "react" },
                { name: "Sass", className: "sass" },
                { name: "Redux", className: "redux" },
              ]}
              additional="redux thunk, react-router, gsap, react-boostrap, lottie-react,
              TheCocktailDb."
              buttonLink={{
                url: "https://cocktail-site-andrei.netlify.app/",
              }}
              buttonText="Visit here"
              sourceLink={{
                url: "https://github.com/andrei-alexandrov/cocktails-site",
                icon: Github,
              }}
              mode={mode}
            />

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
            <ProjectCard
              title="3. IMDb clone"
              description="Find a movie, check trending and top rated movies in real time."
              used={[
                { name: "JavaScript", className: "javascript" },
                { name: "Next.js", className: "next-js" },
                { name: "Tailwind CSS", className: "sass" },
              ]}
              additional="Fully responsive."
              buttonLink={{
                url: "https://imdb-next-js-andrei-alexandrov.vercel.app/",
              }}
              buttonText="Visit here"
              sourceLink={{
                url: "https://github.com/andrei-alexandrov/imdb-next.js",
                icon: Github,
              }}
              mode={mode}
            />

            <SwiperComponent
              images={[imdbImageOne, imdbImageTwo, imdbImageThree]}
              swiperRef={swiperRefProjectThree}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectThree} />

            {/* Project 4 */}
            <ProjectCard
              title="4. Countdown game"
              description="Stop the timer once you estimate that time is (almost) up. Lowest score is 1, max is 99."
              used={[
                { name: "JavaScript", className: "javascript" },
                { name: "React.js", className: "react" },
                { name: "SASS", className: "sass" },
              ]}
              additional="Fully responsive."
              buttonLink={{
                url: "https://countdown-timer-game.netlify.app/",
              }}
              buttonText="Play here"
              sourceLink={{
                url: "https://github.com/andrei-alexandrov/countdown-game",
                icon: Github,
              }}
              mode={mode}
            />

            <SwiperComponent
              images={[CountdownGame, CountdownGameWin, CountdownGameLoss]}
              swiperRef={swiperRefProjectFour}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectFour} />

            {/* Project 5 */}
            <ProjectCard
              title="5. Taskify"
              description="Add/delete/edit one or more tasks."
              used={[
                { name: "TypeScript", className: "typescript" },
                { name: "React.js", className: "react" },
                { name: "CSS", className: "css" },
              ]}
              additional="Fully responsive."
              buttonLink={{
                url: "https://todo-app-typescript-andrei.vercel.app/",
              }}
              buttonText="Visit here"
              sourceLink={{
                url: "https://github.com/andrei-alexandrov/todo-app-typescript",
                icon: Github,
              }}
              mode={mode}
            />

            <SwiperComponent
              images={[TaskifyCompleted, TaskifyDelete, TaskifyEdit]}
              swiperRef={swiperRefProjectFive}
              enlargeImage={handleImageClick}
            />
            <Arrows swiperRef={swiperRefProjectFive} />

            {/* Project 6 */}
            <ProjectCard
              title="6. This portfolio"
              description="A place where i can post my projects."
              used={[
                { name: "JavaScript", className: "javascript" },
                { name: "React.js", className: "react" },
                { name: "Redux", className: "redux" },
                { name: "SASS", className: "sass" },
              ]}
              additional="three.js, swiper, react-particles, emailJS, framer motion, react-scroll,
              iconscout/react-unicorns, tsparticles, TheCocktailDb API,
              react-lottie, gsap. Fully responsive."
              buttonText="Visit here"
              sourceLink={{
                url: "https://github.com/andrei-alexandrov/my-portfolio",
                icon: Github,
              }}
              mode={mode}
            />

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
