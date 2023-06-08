import React, { useEffect } from "react";

import weatherapp from "../../assets/weather-app.png";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./projects.css";

const Projects = () => {
  const livelink = "https://www.linkedin.com/in/christian-mendez-/"; 
  const githublink = "https://christian1512-fe.github.io/DevCM-WA-3API/";

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    // CARD 2
    <div className="portfolio-container"  data-aos="fade-up-right" data-aos-duration="3000" id="portfolio">
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

{/* CARD 2 */}
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


{/* CARD 3 */}
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
