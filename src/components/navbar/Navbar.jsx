import React from "react";
// import cmlogo from "../../assets/cm_logo_new.png";
import cmlogo from "../../assets/web-logo.png";

import "./navbar.css";

const Navbar = () => {
  const homelink = "https://christian1512-fe.github.io/CM-Dev-PP/#home";
  return (
    <div className="cm__navbar" id="nav">
       <div className="cm__logo">
             <a href={homelink}>
             <img src={cmlogo} alt="weblogo"/>
             </a>
       </div>
        <div className="cm__navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          {/* <li><a href={homelink}>Home</a></li> */}
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
      </div>
  );
};

export default Navbar;


