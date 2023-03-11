import React from "react";
import "./Projects.css";
import Project from "./Project";
import projeData from "./ProjectsData"

const Projects = () => {

  return (
    <div className="projects">
      <div className="container">
        <h1>Projects</h1>
        {projeData.map((proje,key)=>(
            <div key={proje.id}>
            <Project proje={proje}></Project>
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default Projects;
