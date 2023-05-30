import React from 'react'
import "./contact.css";


const Contact = () => {
  return (
    <div className="contact-container background-color" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" name="firstname" placeholder="First Name*" required />
          <input type="text" name="lastname" placeholder="Last Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <textarea rows="5" cols="50" name="message" placeholder="Your message here" required />
          <button type="submit" className="btn" name="submit">Send Message</button> 
        </form>
      </div>

    </div>
  )
}

export default Contact
