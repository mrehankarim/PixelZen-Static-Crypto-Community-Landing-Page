import React from "react";
import "./heromain.css";
import heroImg from "./Scene.png";
import googlePaly from "../Navbar/google-play.png";
function Heromain() {
  return (
    <>
      <div className="main">
        <div className="left">
          <h1>
            Discover the <br /> largest Crypto <br /> Community.
          </h1>
          <p>
            We are the one of the largest crypto community app in the <br />
            world. We try to connect every crypto user in a single <br />
            platform.
          </p>
          <div className="btn">
            <button className="btn-dark">Connect With Us</button>
            <button
              className="btn-light
            "
            >
              <img src={googlePaly} alt="" />
              Download
            </button>
          </div>
        </div>
        <div className="right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Heromain;
