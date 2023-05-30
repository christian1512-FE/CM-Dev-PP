import React from "react";
import cm_pic from "../../assets/cm_profileimage.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import "./header.css";

const Header = () => {
  const linkedinURL = "https://www.linkedin.com/in/christian-mendez-/";
  const githubUrl = "https://github.com/christian1512-FE";

  return (
    <div className="cm__header" id="home">
      <div className="cm__header-content">
      <h2>
        <span>Hello, I'm</span>
        </h2>
        <h1><strong>Christian Mendez</strong>
      </h1>
        <h2>A Front-End Developer.</h2>
        <div className="links-icons">
          <a href={linkedinURL}>
            <FaLinkedin />
          </a>
          <a href={githubUrl}>
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div className="cm__image">
        <img src={cm_pic} alt="cmimage" />
      </div>
    </div>
  );
};

export default Header;
