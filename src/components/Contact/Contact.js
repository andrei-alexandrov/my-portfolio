import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import heathEmoji from "../../images/hearthEmoji.png"
import "./Contact.scss";

export default function Contact() {
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
                setTimeout(() => {
                    setDone(false);
                }, 9000);
            })
            .catch((error) => {
                console.log("Error sending email:", error.text);
            });
    };

    return (
        <div className='contact-form' id='Contact'>
            <div className='title'>
                <div>Let's connect</div>
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
                            <div>
                                <span style={{ color: "#fba61e", fontSize: "1.5rem" }}>Thanks for contacting me.</span>
                                <img src={heathEmoji} alt="Thank You" style={{ width: "80px", height: "95px", marginRight: "-60px" }} />
                            </div>
                        )}
                    </span>
                    <div className='blur'></div>
                </form>
            </div>
        </div>
    )
}