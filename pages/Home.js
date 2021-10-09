import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/saree.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Fashions </h1>
        <p> LOOK PRETTY BY WEARING THE FASHIONS COLLECTIONS</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
