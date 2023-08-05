import React, { useState } from "react";
import "./Projects.css";
import Project from "./Project";
import projeData from "./ProjectsData";
import axios from "axios";
import { useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  const [hata, setHata] = useState();

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", projeData)
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(error);
        setHata(error);
      });
  }, []);

  return (
    <div id="projects" className="projects">
    <div className="projects container">
      <h1>My Projects</h1>
      <div className="project">
        {hata ? (
          <div className="projects-hata">Proje datası alınamadı {hata}</div>
        ) : data.length !== 0 ? (
          <div className={data.length > 3 ? "projects-scroll" : ""}>
            {data.map((proje) => (
              <div key={proje.id}>
                <Project proje={proje}></Project>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-hata">Projeler yükleniyor {hata}</div>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default Projects;
