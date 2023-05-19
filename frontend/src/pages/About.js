import React from "react";
import Multiple from "../assets/1cab.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Multiple})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          
        </p>
      </div>
    </div>
  );
}

export default About;
