import React, { useState } from 'react';
import HumanPic from "../../images/person6.png"
import { Col, Row, Container } from "react-bootstrap"

import './Card.css';

function Card() {
    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    }

    const handleMouseOut = () => {
        setHovered(false);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div id="nice-card">
                        <div className="container">
                            <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                <div className="lines"></div>
                                <div className="imgBx">
                                    <img src={HumanPic} alt="Card" />
                                </div>
                                <div className="content">
                                    <div className="details">
                                        {!hovered ? (
                                            <>
                                                <p className="textContentTap" style={{ color: "orange" }}>
                                                    Tap here
                                                </p>
                                                <p className="textContent" style={{ color: "orange" }}>
                                                    Hover me
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
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Card;
