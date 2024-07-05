import React from "react";
import jsLogo from "../../images/javascript.svg";
import nodeLogo from "../../images/node.svg";
import figmaLogo from "../../images/figma.svg";
import vsLogo from "../../images/vscodes.svg";
import reactLogo from "../../images/react.svg";
import reduxLogo from "../../images/redux.svg";
import "./Skills.css";

const skillsData = [
  { logo: jsLogo, name: "JavaScript" },
  { logo: nodeLogo, name: "Node.js" },
  { logo: figmaLogo, name: "Figma" },
  { logo: reactLogo, name: "React" },
  { logo: vsLogo, name: "VS Code" },
  { logo: reduxLogo, name: "Redux" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h1>Software Skills</h1>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
              <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
