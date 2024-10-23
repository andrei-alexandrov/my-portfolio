import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import HumanPic from "../../images/cards/me-3.jpg"
import Lottie from 'lottie-react';  
import rocket from "../../animations/rocket-lottie.json"

import "./CardOne.css"

export default function CardOne() {
  const {mode} = useSelector(state => state.darkMode);
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  }

  const handleMouseOut = () => {
    setHovered(false);
  }

  return (
    <div
      className={`${mode ? "dark-mode cardOne lines" : "light-mode cardOne lines"}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <div className="lines"></div>
      <div className="imgBx">
        <img src={HumanPic} alt="person-pic" />
      </div>
      <div className="content">
        <div className="details">
          {!hovered ? (
            <>
              <p className="text-content-tap" style={{ color: "#fba61e" }}>
                Tap on the left
              </p>
              <p className="text-content" style={{ color: "#fba61e" }}>
                Hover here
              </p>
            </>
          ) : (
            <>
              <Lottie style={{ width: "110px", position: "relative", left: "4rem" }} animationData={rocket} />
              <h2 className="title">Nice to meet you!</h2>
              <p style={{ color: "#fba61e" }}>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
