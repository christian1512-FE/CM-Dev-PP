import React from "react";
import cmlogo from "../../assets/cm_logo_new.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="cm__navbar">
       <div className="cm__logo">
             <img src={cmlogo} alt="weblogo" />    
       </div>
        <div className="cm__navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
      </div>
  );
};

export default Navbar;


