import React from "react";
// import cmlogo from "../../assets/cmlogo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="cm__navbar">
       <div className="cm__logo">DevCM
             {/* <img src={cmlogo} alt="weblogo" />    */}
       </div>
        <div className="cm__navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        </div>
      </div>
  );
};

export default Navbar;


