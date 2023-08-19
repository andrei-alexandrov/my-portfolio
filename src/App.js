import NavBar from "./components/NavBar/NavBar"
import ParticlesAnimation from "./components/Particles/ParticlesAnimation"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { themeContext } from "./Context"
import { useContext } from "react"

import "./App.scss";
import ColoredCircle from "./components/ColoredCircle/ColoredCircle"

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={`App ${darkMode ? "dark-mode" : ""}`}
      style={{
        background: darkMode ? 'black' : ''
      }}
    >
      <NavBar />
      <ParticlesAnimation />
      <AboutMe />
      <Skills />
      <ColoredCircle />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
