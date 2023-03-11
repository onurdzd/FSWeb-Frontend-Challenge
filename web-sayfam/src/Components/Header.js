import React from "react";
import imgHero from "../images/hero-right.jpg";
import github from "../images/github.svg";
import linkedin from "../images/LinkedIn.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header ">
      <div className="header-box-1">
        <h2>Onur Erk</h2>
        <div className="header-box-1-text">
          <h1>I am a Frontend Developer...</h1>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="header-box-1-button">
            <div>
              <button className="header-box-1-button">
                <img src={github} alt=""></img>
                <span>Github</span>
              </button>
            </div>
            <div>
              <button className="header-box-1-button">
                <img src={linkedin} alt=""></img>
                <span>Linkedin</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-box-2">
        <div className="header-box-2-image">
          <img alt="hero-right" src={imgHero}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
