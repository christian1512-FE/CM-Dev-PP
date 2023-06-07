import React from "react";
import weatherapp from "../../assets/weather-app.png";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import "./projects.css";

const Projects = () => {
  const livelink = "https://www.linkedin.com/in/christian-mendez-/"; 
  const githublink = "https://christian1512-fe.github.io/DevCM-WA-3API/";

  return (

    <div className="portfolio-container" id="portfolio">
      <div className="heading">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="projects">
        <div className="img">
          <img src={weatherapp} alt="working" />
        </div>
        <div className="content">
          <h2>WEATHER API</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur porro ipsum commodi nemo
            recusandae cupiditate minima ut, ullam praesentium ipsa eum et quia
            voluptate nobis. Unde, magni?
          </p>
          <div className="links">
            <button>
            <a href={livelink}>
              Code
            <FaGithub />
            </a>
            </button>

            <button>
            <a href={githublink}>
              Live Demo
            <BiLinkExternal />
            </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
