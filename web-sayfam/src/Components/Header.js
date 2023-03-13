import React from "react";
import imgHero from "../images/hero-right.jpg";
import github from "../images/github.svg";
import linkedin from "../images/LinkedIn.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-box container">
      <div className="header-box-1 ">
        <div className="header-box-1-text">
          <h2>Onur Erk</h2>
          <div>
            <h1>I am a Frontend Developer...</h1>
            <p>
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div className="header-box-1-button">
              <div>
                <button className="header-box-1-button">
                  <img src={github} alt=""></img>
                 <a href="https://github.com/onurdzd">Github</a>
                </button>
              </div>
              <div>
                <button className="header-box-1-button"><img src={linkedin} alt=""></img>
                <a href="https://www.linkedin.com/feed/">Linkedin
                 </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-box-2">
        <img alt="hero-right" src={imgHero}></img>
      </div>
      </div>
    </div>
  );
};

export default Header;
