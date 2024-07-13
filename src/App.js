import React, { useState } from "react"
import { useSelector } from "react-redux"

import ParticlesAnimation from "./components/Particles/ParticlesAnimation"
import Navbar from "./components/NavBar/NavBar"
import AboutMe from "./pages/AboutMe/AboutMe"
import Skills from "./pages/Skills/Skills"
import CardsCollection from "./pages/CardsCollection/CardsCollection"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import StartingPage from "./pages/StartingPage/StartingPage"

import "./App.scss"
import "./index.scss"

function App() {
  const mode = useSelector(state => state.darkMode.mode);
  const [showContent, setShowContent] = useState(false);

  const handleEnterComplete = () => {
    setShowContent(true);
  };

  return (
    <div
      className="App"
      style={{
        background: mode ? "black" : "#EAEAEA"
      }}
    >
      {showContent ? (
        <div className="fade-in">
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
