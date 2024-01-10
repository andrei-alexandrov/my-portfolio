import React, { useState } from 'react';
import HumanPic from "../../images/cards/me1.png"
import Lottie from 'lottie-react';
import helloEmoji from "../../animations/helloAnimation.json"

import "./CardOne.css"

export default function CardOne() {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  }

  const handleMouseOut = () => {
    setHovered(false);
  }

  return (
    <div className="cardOne" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
              <Lottie style={{ width: "110px", position: "relative", left: "4rem" }} animationData={helloEmoji} />
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
