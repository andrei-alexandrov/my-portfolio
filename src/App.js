import { themeContext } from "./Contex"
import { useContext } from "react"

import ParticlesAnimation from './components/Particles/ParticlesAnimation'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import CardsCollection from './pages/CardsCollection/CardsCollection'
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"

import './App.scss'
import './index.scss'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={`App ${darkMode ? "dark-mode" : ""}`}
      style={{
        background: darkMode ? "black" : "whiteSmoke",
      }}
    >
      <ParticlesAnimation />
      <Navbar />
      <AboutMe />
      <Skills />
      <CardsCollection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
