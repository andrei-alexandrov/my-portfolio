import React from "react";
import classNames from "classnames";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

import Wheel from "../../components/Wheel/Wheel";
import Button from "../../components/Button/Button";

//Skills icons
import sassIconTwo from "../../images/skills/sass-icon-2.png";
import reduxIcon from "../../images/skills/redux.png";
import tsIcon from "../../images/skills/typescript.png";
import jsIconTwo from "../../images/skills/javascript.png";
import html from "../../images/skills/html_1051277.png";
import css from "../../images/skills/social_11516361.png";
import bootstrap from "../../images/skills/bootstrap5.jpeg";
// import tailwind from "../../images/skills/tailwind.png";
import nextJsWhite from "../../images/skills/nextjs-white-bg.jpg";
import nextJsBlack from "../../images/skills/next-js-black-bg.jpg";
import reactImage from "../../images/skills/reactjs.png";
import github from "../../images/skills/github.png";
import git from "../../images/skills/git-icon.png";

import "./Skills.scss";

export default function Skills() {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <Container>
      <Row id="skills" className="skills-wrapper">
        <Col className="skills-left-side">
          <div className="skills-details">
            <span
              className="skills-header"
              style={{ color: mode ? "#edebe8" : "" }}
            >
              My <span style={{ color: "#fba61e" }}>Skills</span>
            </span>
            <span
              className="skills-icons-categories"
              style={{ color: mode ? "#edebe8" : "black" }}
            >
              Base:
            </span>

            <div
              className="skills-icons"
              style={{ gap: "1px", position: "relative", right: "6px" }}
            >
              <img
                src={jsIconTwo}
                alt="JavaScript icon"
                width={49}
                height={49}
              />
              <img src={tsIcon} alt="TypeScript icon" width={50} height={50} />
              <img className="github-image" src={github} alt="Github icon" />
              <img className="git-image" src={git} alt="git" />
            </div>

            <span
              className="skills-icons-categories"
              style={{ color: mode ? "#edebe8" : "black" }}
            >
              Design:
            </span>

            <div className="skills-icons" style={{ gap: "11px" }}>
              <img
                className="html-image"
                src={html}
                alt="html-icon"
                width={40}
                height={40}
              />
              <img
                className=""
                src={css}
                alt="css-icon"
                width={41}
                height={41}
              />
              <img className="sass-image" src={sassIconTwo} alt="sass-icon" />
              <img
                className=""
                src={bootstrap}
                alt="bootstrap-icon"
                width={39}
                height={39}
              />
              {/* <img className="sass-image" src={tailwind} alt="taiwlind-icon" /> */}
            </div>

            <span className={mode ? "skills-info" : "skills-info-light"}>
              Responsive design
              <br />
            </span>

            <span
              className="skills-icons-categories"
              style={{ color: mode ? "#edebe8" : "black" }}
            >
              Frameworks/Libraries:
            </span>

            <div className="skills-icons" style={{ gap: "11px" }}>
              <img
                className="react-image"
                src={reactImage}
                alt="react-icon"
                width={41}
                height={41}
              />
              <img
                className="nextJs-image"
                src={mode ? nextJsBlack : nextJsWhite}
                alt="nextJs-icon"
                width={138}
              />
              <img
                className="redux-image"
                src={reduxIcon}
                alt="Bootstrap-icon"
              />
            </div>

            <div style={{lineHeight: "1.6rem"}}>
              <span style={{ color: "#fba61e" }}>Education:</span>
              <div
                className={classNames("global-text-description", {
                  "global-text-description-dark": mode,
                  "global-text-description-light": !mode,
                })}
              >
                2024 React & TypeScript: The Practical Guide (Maximilian
                Schwarzmüller Udemy)
                <br />
                2022 - 2023: IT Talents training camp <br />
                2020 - 2021: Software university {`(Java basics)`}{" "}
                <br />
                2014 - 2016: Sofia University {`(Master: European Projects)`}{" "}
                <br />
                2008 - 2012: Sofia University {`(Bachelor: European Studies)`}
              </div>
              <br />
              <span style={{ color: "#fba61e" }}>Experience: </span>
              <div className={classNames("global-text-description", {
                "global-text-description-dark": mode,
                "global-text-description-light": !mode,
              })}>
                2024 (March - July): <span style={{color: "#129dca"}}>EnduroSat AD </span><br />
                Junior Front-End Developer for Satellite Operation Systems
                Engaged in the design and development of a next-generation
                satellite operations platform capable of autonomously managing
                hundreds of satellites.
                Built efficient components within an Electron-based application
                utilizing React.js and Node.js.
              </div>
              <br />
              <span style={{ color: "#fba61e" }}>Hobbies: </span>
              <div className={classNames("global-text-description", {
                "global-text-description-dark": mode,
                "global-text-description-light": !mode,
              })}>
                Movie music composer {`(digital piano)`}
                <br />
                Badminton, Table tennis <br />
                Chess
              </div>
            </div>

            <div className="skills-btn-wrapper">
              <Link
                spy={true}
                to="contact"
                smooth={true}
                duration={60}
                offset={115}
              >
                <Button styleBtn="contact-btn" hasOnClick={false}>
                  Contact me
                </Button>
              </Link>

              <a href="/pdf-files/Andrei_Alexandrov_CV.pdf" download>
                <Button styleBtn="contact-btn" hasOnClick={false}>
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </Col>
        <Col className="center-column">
          <Wheel />
        </Col>
      </Row>
    </Container>
  );
}
