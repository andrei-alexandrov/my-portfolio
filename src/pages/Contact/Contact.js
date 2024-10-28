import React, { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import heathEmoji from "../../images/contact/hearthEmoji.png";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn";
import Lottie from "lottie-react";
import sendMessage from "../../animations/send-message-three.json";
import "./Contact.scss";
import { useSelector } from "react-redux";

export default function Contact() {
  const { mode } = useSelector((state) => state.darkMode);
  const form = useRef();
  const [done, setDone] = useState(false);
  const [isError, setIsError] = useState(false);  // New state to track errors
  const [isInputClicked, setInputClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_pn3oa7b",
        "template_v26dk7m",
        form.current,
        "UPcddvsUqVlOgA_We"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        setDone(true);
        setInputClicked(false);
        form.current.reset();
        setTimeout(() => {
          setDone(false);
        }, 4000);
      })
      .catch((error) => {
        console.log("Error sending email:", error.text);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 9000);
      });
  };

  const earthStyles = {
    width: "120px",
  };

  const sendMeesageStyles = {
    width: "120px",
  };

  return (
    <Container>
      <Row className="contact-form" id="contact">
        <div className="title">
          <div style={{ color: mode ? "#edebe8" : "" }}>Let's connect</div>
          <div>Contact me</div>
          <Lottie
            style={!isInputClicked ? sendMeesageStyles : earthStyles}
            animationData={!isInputClicked ? sendMessage : sendMessage}
          ></Lottie>
        </div>

        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
              required
              pattern=".{2,}"
              title="Name must be at least 2 characters long"
              onClick={() => setInputClicked(true)}
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
              onClick={() => setInputClicked(true)}
              required
            />
            <textarea
              name="message"
              className="user"
              placeholder="Currently, sending messages is disabled. Reach out to me at andrei.alxv@gmail.com."
              required
              minLength={10}
              title="Message must be at least 10 characters long"
              onClick={() => setInputClicked(true)}
            />
            <input type="submit" value="Let's talk" className="button" />

            <span style={{ color: "#242D49", fontWeight: "bold", fontSize: "26px" }}>
              {done && (
                <div className="sent-message-text">
                  <span>Thanks for contacting me.</span>
                  <img src={heathEmoji} alt="thanks-icon" />
                </div>
              )}
            </span>

            <span style={{ color: "#fba61e", fontSize: "20px", textAlign: "center" }}>
              {isError && <div>Currently, sending messages is disabled. Reach out to me at andrei.alxv@gmail.com</div>}
            </span>

            <ScrollToTopBtn />
          </form>
        </div>
      </Row>
    </Container>
  );
}
