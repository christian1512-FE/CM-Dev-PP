import React from 'react'
import workingimage from "../../assets/workingimage.png";
import "./about.css";

const About = () => {
  return (
  <div className="about-container" data-aos="fade-up" data-aos-duration="3000" id="about">
    <div className="about-image">
      <img src={workingimage} alt="working" />
    </div>
    <div className="about-content">
      <h2>About Me</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus maiores excepturi dicta? Porro cupiditate, sit odit eveniet minima architecto sint quasi possimus id ullam provident excepturi corrupti! Corrupti, veritatis et?</p> <br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa velit eligendi nulla odit quibusdam, veritatis unde officiis, nam deserunt voluptate quia ipsum laudantium maxime? Amet delectus fugit consectetur praesentium necessitatibus.</p> <br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa velit eligendi nulla odit quibusdam, veritatis unde officiis, nam deserunt voluptate quia ipsum laudantium maxime? Amet delectus fugit consectetur praesentium necessitatibus.</p>
    </div>


  </div>


  )
}

export default About
