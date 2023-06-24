import React from "react";
import workingimage from "../../assets/aboutme-image.png";
import "./about.css";

// data-aos="fade-up" data-aos-duration="1000"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-image">
        <img src={workingimage} alt="working" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I&apos;m Christian Mendez, a creative web developer residing in Austin,
          Texas seeking a Junior front-end development position.
        </p>
        <p>
          I was born and raised in Isabela, Puerto Rico and fluently speak
          Spanish, which is an extremely valuable asset to the industry.
        </p>
        <p>
          I graduated from the University of Texas at San Antonio in 2020 with
          my Bachelors of Business degree in cyber security. Most recently, I
          furthered my skill set and completed the reputable Full-Stack Web
          Developer coding bootcamp through The University of Texas at Austin in
          2023. This program sharpened my comprehensive knowledge of front and
          back-end development.
        </p>
        <p>
          I&apos;m most passionate about front-end development and creating dynamic,
          engaging and seamless experiences for consumers using React. I&apos;m
          detail oriented, highly motivated and eager to advance my career.
        </p>
        <p>
          In my free time, I enjoy playing video games with my beloved wife,
          Hope and exploring the beautiful city of Austin!
        </p>
      </div>
    </div>
  );
};

export default About;
