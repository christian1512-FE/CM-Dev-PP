// import React from 'react'
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  
  const sendEmail = (e) => {
      e.preventDefault();
      setIsSending(true);

      emailjs.sendForm('service_q2hv0sr', 'template_m4shwwt', form.current, '1dk2hbA7g7OV-wJn5')
        .then((result) => {
            console.log(result.text);
            // reset 
            form.current.reset();
            setIsSending(false);

        }, (error) => {
            console.log(error.text);
            setIsSending(false);

        });
    };

  return (
    <div className="contact-container background-color" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="firstname" placeholder="First Name*" required />
          <input type="text" name="lastname" placeholder="Last Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <textarea rows="5" cols="50" name="message" placeholder="Your message here" required></textarea>
          <button type="submit" className="btn" name="submit" disabled={isSending}>
            {isSending ? 'Message Sent' : 'Send Message'}
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact
