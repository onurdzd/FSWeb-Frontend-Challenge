import React from "react";
import jsLogo from "../../images/javascript.svg";
import nodeLogo from "../../images/node.svg";
import figmaLogo from "../../images/figma.svg";
import vsLogo from "../../images/vscodes.svg";
import reactLogo from "../../images/react.svg";
import reduxLogo from "../../images/redux.svg";
import "./Skills.css"

const Skills = () => {
  return (
    <div id="skills" className="skills container">
        <h1>Software Skills</h1>
      <div className="skills-box-1">
      </div>
      <div className="skills-box-2">
        <div className="skills-box-logos">
          <img src={jsLogo} alt="logo"></img>
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="skills-box-logos">
          <img src={nodeLogo} width="auto" alt="logo"></img>
          <h2>NODE</h2>
        </div>
        <div className="skills-box-logos">
          <img src={figmaLogo} alt="logo"></img>
          <h2>FIGMA</h2>
        </div>
        <div className="skills-box-logos">
          <img src={reactLogo} alt="logo"></img>
          <h2>REACT</h2>
        </div>
        <div className="skills-box-logos">
          <img src={vsLogo} alt="logo"></img>
          <h2>VS CODE</h2>
        </div>
        <div className="skills-box-logos">
          <img src={reduxLogo} alt="logo"></img>
          <h2>REDUX</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
