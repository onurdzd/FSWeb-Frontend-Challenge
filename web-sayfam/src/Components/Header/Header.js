import React from "react";
import imgHero from "../../images/hero-right.jpg";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-box container">
        <div className="header-box-1 ">
          <div className="header-box-1-text">
            <div>
            <h2>Onur Erk</h2>
              <p>
                 Financial Expert | Software Solutions Specialist
              </p>
              <div className="header-box-1-button">
                  <button
                    onClick={() =>
                      window.open("https://github.com/onurdzd", "_blank")
                    }
                  >
                    <img src={github} alt=""></img>
                      Github
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://www.linkedin.com/feed/", "_blank")
                    }
                  >
                    <img src={linkedin} alt=""></img>
                   Linkedin
                  </button>
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
