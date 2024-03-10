import React, { useState } from "react";
import "./navbar.css";
import GooglePlay from "./google-play.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">PixelZen</div>
          <div
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="hamburger"></div>
          </div>
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="" className="firstMenu">
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
            <li>
              <button className="btn-light">
                <img src={GooglePlay} alt="" />
                <span>Download</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
