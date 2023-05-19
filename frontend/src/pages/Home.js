import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/maincab.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <p> DON'T WAIT . IF U WANNA RIDE</p>
        <h1> GRAB THE CAB </h1>
        <Link to="/menu">
          <button> RIDE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
