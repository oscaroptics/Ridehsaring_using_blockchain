import React, { useState } from "react";
import LOGO from "../assets/LOGO.png";
import '../styles/Homepage.css';

function Homepage() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={LOGO} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Continue With Metamask</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </nav>
      <div className="content">
        <h4>Revolutionizing Transportation with Blockchain</h4>
        <h1>Welcome to <strong>Decentralized Ride Sharing</strong></h1>
        <button type="submit">RIDE IN</button>
      </div>
    </div>
  );
}

export default Homepage;
