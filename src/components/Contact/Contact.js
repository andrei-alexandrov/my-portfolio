import React, { useRef, useState, useContext } from "react"
import { themeContext } from "../../Context"
import { Col, Row, Container } from "react-bootstrap"

import emailjs from "@emailjs/browser";
import heathEmoji from "../../images/hearthEmoji.png"
import "./Contact.scss";

export default function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending email...");

        emailjs.sendForm('service_pn3oa7b', 'template_v26dk7m', form.current, 'UPcddvsUqVlOgA_We')
            .then((result) => {
                console.log("Email sent:", result.text);
                setDone(true);
                form.current.reset();
                // setTimeout(() => {
                //     setDone(false);
                // }, 12000);
            })
            .catch((error) => {
                console.log("Error sending email:", error.text);
            });
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='contact-form' id='Contact'>
                        <div className='title'>
                            <div style={{ color: darkMode ? '#edebe8' : '' }}>Let's connect</div>
                            <div>Contact me</div>
                            <div className='blur'></div>
                        </div>

                        <div className='form'>
                            <form ref={form} onSubmit={sendEmail}>
                                <input type='text' name='user_name' className='user' placeholder='Name' required pattern=".{2,}"
                                    title="Name must be at least 2 characters long" />
                                <input type='email' name='user_email' className='user' placeholder='Email' required />
                                <textarea name='message' className='user' placeholder='Message' required minLength={10}
                                    title="Message must be at least 10 characters long"
                                />
                                <input type='submit' value="Let's talk" className='button' />
                                <span style={{ color: "#242D49", fontWeight: "bold", fontSize: "26px" }}>
                                    {done && (
                                        <div className="sent-message-text" >
                                            <span style={{ color: "#fba61e", fontSize: "1.4rem" }}>Thanks for contacting me.</span>
                                            <img src={heathEmoji} alt="Thank You" style={{ width: "70px", height: "80px", marginRight: "-55px" }} />
                                        </div>
                                    )}
                                </span>
                                <div className='blur'></div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
