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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          maiores excepturi dicta? Porro cupiditate, sit odit eveniet minima
          architecto sint quasi possimus id ullam provident excepturi corrupti!
          Corrupti, veritatis et?
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          maiores excepturi dicta? Porro cupiditate, sit odit eveniet minima
          architecto sint quasi possimus id ullam provident excepturi corrupti!
          Corrupti, veritatis et?
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
