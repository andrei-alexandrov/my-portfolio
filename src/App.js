import React, { useContext, useState } from 'react';
import { themeContext } from "./Contex"

import ParticlesAnimation from './components/Particles/ParticlesAnimation'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import CardsCollection from './pages/CardsCollection/CardsCollection'
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import StartingPage from "./pages/StartingPage/StartingPage"

import './App.scss'
import './index.scss'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showContent, setShowContent] = useState(false);

  const handleEnterComplete = () => {
    setShowContent(true);
  };

  return (
    <div
      className={`App ${darkMode ? "dark-mode" : "light-mode"}`}
      style={{
        background: darkMode ? "black" : "whitesmoke",
        // background: darkMode ? "black" : "linear-gradient(to right, #1f1c2c, #928dab)"
        // background: darkMode ? "black" : "linear-gradient(to left, #bdc3c7, #2c3e50)"
      }}
    >
      {showContent ? (
        <div className='fade-in'>
          <ParticlesAnimation />
          <Navbar />
          <AboutMe />
          <Skills />
          <CardsCollection />
          <Projects />
          <Contact />
          <Footer />
        </div>
      ) : (
        <StartingPage onEnter={handleEnterComplete} />
      )}
    </div>
  );
}

export default App;
