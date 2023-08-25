import React, { useState } from 'react';
import HumanPic from "../../images/cards/person1.png"

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
        <img src={HumanPic} alt="Card" />
      </div>
      <div className="content">
        <div className="details">
          {!hovered ? (
            <>
              <p className="textContentTap" style={{ color: "orange" }}>
                Tap on the left
              </p>
              <p className="textContent" style={{ color: "orange" }}>
                Hover here
              </p>
            </>
          ) : (
            <>
              <h2 className="title">Nice to meet you!</h2>
              <p className="textContentInside" style={{ color: "orange" }}>
                Have a nice day {":)"}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
