//Artist portfolio photos
import ArtistIntro from "./images/projects/artist-portfolio/artist-intro.JPG";
import ArtistAboutOne from "./images/projects/artist-portfolio/artist-about.JPG";
import ArtistAboutTwo from "./images/projects/artist-portfolio/artist-about-2.JPG";
import ArtistActivities from "./images/projects/artist-portfolio/artist-activities.JPG";
import ArtistGallery from "./images/projects/artist-portfolio/artist-gallery.JPG";
import ArtistCourses from "./images/projects/artist-portfolio/artist-courses.JPG";
import ArtistContacts from "./images/projects/artist-portfolio/artist-contact.JPG";

//Sports match project photos
import LoginPage from "./images/projects/sports_match/loginPage.png";
import HomeScreen from "./images/projects/sports_match/homeScreen.png";
import ProfilePage from "./images/projects/sports_match/profilePage.jpg";
import ActivitiesPage from "./images/projects/sports_match/activitiesPage.jpg";
import BuddySearch from "./images/projects/sports_match/buddySearch.jpg";
import ChatPage from "./images/projects/sports_match/chatPage.jpg";
import PlacesPage from "./images/projects/sports_match/placesPages.jpg";

//Cocktail site project photos
import CocktailsStartingPage from "./images/projects/cocktail_site/cocktails-starting-image.png";
import CocktailsHomePage from "./images/projects/cocktail_site/cocktails-home.png";
import CocktailsFavoritesPage from "./images/projects/cocktail_site/cocktails-favorites.png";
import CocktailsDetailsPage from "./images/projects/cocktail_site/cocktails-details.png";

//IMDb project photos
import imdbImageOne from "./images/projects/imdb-clone/imdb-clone-1.png";
import imdbImageTwo from "./images/projects/imdb-clone/imdb-clone-2.png";
import imdbImageThree from "./images/projects/imdb-clone/imdb-clone-3.png";

//Countdown game project photos
import CountdownGame from "./images/projects/countdown_game/countdownGame.png";
import CountdownGameWin from "./images/projects/countdown_game/countdown-game-win.png";
import CountdownGameLoss from "./images/projects/countdown_game/countdown-game-loss.png";

//Taskify project photos
import TaskifyCompleted from "./images/projects/taskify/taskify-completed.png";
import TaskifyDelete from "./images/projects/taskify/daily-tasks-app.png";
import TaskifyEdit from "./images/projects/taskify/taskify-edit.png";

//My portfolio project photos
import StartingPage from "./images/gitHubImages/starting-page-animation.gif";
import About from "./images/gitHubImages/portfolio-aboutMe-dark.png";
import Skills from "./images/gitHubImages/skills-new-dark.png";

import Github from "./images/projects/github.png";

const projectsData = [
  {
    title: "1. Freelance project - artist portfolio",
    description: `The portfolio was developed for a vocal and artist coach based in Sofia, Bulgaria.`,
    usedTechnologies: [
      { name: "TypeScript", className: "typescript" },
      { name: "Next.js 14", className: "next-js" },
      { name: "Sass", className: "sass" },
    ],
    additionalDescription: `gsap, lottie-react, swiper, bootstrap, next-intl, react-icons, slick-carousel.`,
    buttonLink: {
      url: "https://www.iskra-vocal-coach.com/bg",
      buttonText: "Visit here",
    },
    images: [
      ArtistIntro,
      ArtistGallery,
      ArtistAboutOne,
      ArtistContacts,
      ArtistAboutTwo,
      ArtistActivities,
      ArtistCourses,
    ],
  },
  {
    title: "2. Sports Match",
    description: `My own idea for a website that helps people with shared interests to interact and participate together 
      in different sports. The website also provides an opportunity to choose the most convenient place for the desired 
      activity in the respective city and neighborhood.`,
    usedTechnologies: [
      { name: "JavaScript", className: "javascript" },
      { name: "React.js", className: "react" },
      { name: "Sass", className: "sass" },
    ],
    additionalDescription: `react-bootstrap, react router, emoji-picker-react, sweetalert2, react-icons, AJAX, local/session storage.   
    Possible chat between 2 users in 2 different tabs from the same browser.`,
    sourceCodeLink: {
      url: "https://github.com/andrei-alexandrov/sports-match",
      icon: Github,
    },
    images: [
      HomeScreen,
      BuddySearch,
      ChatPage,
      LoginPage,
      ProfilePage,
      ActivitiesPage,
      PlacesPage,
    ],
  },

  {
    title: "3. Cocktails Site",
    description: `Find interesting cocktails and get their recipes. If you like a specific one, add it to favorites.`,
    usedTechnologies: [
      { name: "JavaScript", className: "javascript" },
      { name: "React.js", className: "react" },
      { name: "Sass", className: "sass" },
      { name: "Redux", className: "redux" },
    ],
    additionalDescription: `redux thunk, react-router, gsap, react-boostrap, lottie-react, TheCocktailDb.`,
    sourceCodeLink: {
      url: "https://github.com/andrei-alexandrov/cocktails-site",
      icon: Github,
    },
    images: [
      CocktailsStartingPage,
      CocktailsHomePage,
      CocktailsFavoritesPage,
      CocktailsDetailsPage,
    ],
    buttonLink: {
      url: "https://cocktail-site-andrei.netlify.app/",
      buttonText: "Visit here",
    },
  },

  {
    title: "4. IMDb clone",
    description: `Find a movie, check trending and top rated movies in real time.`,
    usedTechnologies: [
      { name: "JavaScript", className: "javascript" },
      { name: "Next.js", className: "next-js" },
      { name: "Tailwind CSS", className: "sass" },
    ],
    additionalDescription: `Fully responsive.`,
    sourceCodeLink: {
      url: "https://github.com/andrei-alexandrov/imdb-next.js",
      icon: Github,
    },
    images: [imdbImageOne, imdbImageTwo, imdbImageThree],
    buttonLink: {
      url: "https://imdb-next-js-andrei-alexandrov.vercel.app/",
      buttonText: "Visit here",
    },
  },

  {
    title: "5. Countdown game",
    description: `Stop the timer once you estimate that time is (almost) up. Lowest score is 1, max is 99.`,
    usedTechnologies: [
      { name: "JavaScript", className: "javascript" },
      { name: "React.js", className: "react" },
      { name: "SASS", className: "sass" },
    ],
    additionalDescription: `Fully responsive.`,
    sourceCodeLink: {
      url: "https://github.com/andrei-alexandrov/countdown-game",
      icon: Github,
    },
    images: [CountdownGame, CountdownGameWin, CountdownGameLoss],
    buttonLink: {
      url: "https://countdown-timer-game.netlify.app/",
      buttonText: "Play here",
    },
  },

  {
    title: "6. Taskify",
    description: `Add/delete/edit one or more tasks. Mark them as completed.`,
    usedTechnologies: [
      { name: "TypeScript", className: "typescript" },
      { name: "React.js", className: "react" },
      { name: "CSS", className: "css" },
    ],
    additionalDescription: `Fully responsive.`,
    sourceCodeLink: {
      url: "https://github.com/andrei-alexandrov/todo-app-typescript",
      icon: Github,
    },
    images: [TaskifyCompleted, TaskifyDelete, TaskifyEdit],
    buttonLink: {
      url: "https://todo-app-typescript-andrei.vercel.app/",
      buttonText: "Visit here",
    },
  },

  {
    title: "7. This portfolio",
    description: `A place where i can post my projects.`,
    usedTechnologies: [
      { name: "JavaScript", className: "javascript" },
      { name: "React.js", className: "react" },
      { name: "Redux", className: "redux" },
      { name: "SASS", className: "sass" },
    ],
    additionalDescription: `three.js, swiper, react-particles, emailJS, framer motion, react-scroll,
    iconscout/react-unicorns, tsparticles, TheCocktailDb API, react-lottie, gsap. Fully responsive.`,
    sourceCodeLink: {
      url: "https://github.com/andrei-alexandrov/my-portfolio",
      icon: Github,
    },
    images: [StartingPage, About, Skills],
  },
];

export default projectsData;