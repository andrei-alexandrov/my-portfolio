import React, { useRef, useState } from "react"
import { Container, Row } from "react-bootstrap"

import emailjs from "@emailjs/browser";
import heathEmoji from "../../images/contact/hearthEmoji.png"
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn"
import Lottie from "lottie-react"
import sendMessage from "../../animations/send-message-three.json"

import "./Contact.scss";
import { useSelector } from "react-redux";

export default function Contact() {
    const { mode } = useSelector(state => state.darkMode);

    const form = useRef();
    const [done, setDone] = useState(false);
    const [isInputClicked, setInputClicked] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending email...");

        emailjs.sendForm('service_pn3oa7b', 'template_v26dk7m', form.current, 'UPcddvsUqVlOgA_We')
            .then((result) => {
                console.log("Email sent:", result.text);
                setDone(true);
                setInputClicked(false);
                form.current.reset();
                setTimeout(() => {
                    setDone(false);
                }, 3000);
            })
            .catch((error) => {
                console.log("Error sending email:", error.text);
            });
    };

    const earthStyles = { //Временно дублиране
        width: "120px",
        // width: "100px",
        // marginBottom: "5px"
    };

    const sendMeesageStyles = { //Временно дублиране
        width: "120px",
    };

    return (
        <Container>
            <Row className="contact-form" id="contact">
                <div className="title">
                    <div style={{ color: mode ? "#edebe8" : "" }}>Let's connect</div>
                    <div>Contact me</div>
                    <Lottie
                        style={!isInputClicked ? sendMeesageStyles : earthStyles} //Временно дублиране
                        animationData={!isInputClicked ? sendMessage : sendMessage} //Временно дублиране
                    ></Lottie>
                </div>

                <div className="form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='user_name' className='user' placeholder='Name' required pattern=".{2,}"
                            title="Name must be at least 2 characters long" onClick={() => setInputClicked(true)} />
                        <input type='email' name='user_email' className='user' placeholder='Email' onClick={() => setInputClicked(true)} required />
                        <textarea name='message' className='user' placeholder='Message' required minLength={10}
                            title="Message must be at least 10 characters long" onClick={() => setInputClicked(true)}
                        />
                        <input type="submit" value="Let's talk" className="button" />
                        <span style={{ color: "#242D49", fontWeight: "bold", fontSize: "26px" }}>
                            {done && (
                                <div className="sent-message-text" >
                                    <span >Thanks for contacting me.</span>
                                    <img src={heathEmoji} alt="thanks-icon" />
                                </div>
                            )}
                        </span>
                        <ScrollToTopBtn />
                    </form>
                </div>
            </Row>
        </Container>
    )
}
