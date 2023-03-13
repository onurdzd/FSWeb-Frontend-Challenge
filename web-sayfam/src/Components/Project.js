import React from "react";

const Project = (props) => {
  const { proje, aciklama, konular, linkler, imageLink } = props.proje;

  return (
      <div className="projects-box">
        <div className="projects-box-img">
          <img src={imageLink} alt="project-img"></img>
        </div>
        <div className="projects-box-text">
          <div>
            <h2>{proje}</h2>
            <p>{aciklama}</p>
          </div>
          <div className="projects-box-text-button">
            {konular.map((item, key) => (
              <div key={key}>
                <button>{item}</button>
              </div>
            ))}
          </div>
          <div className="projects-box-text-link">
            {linkler.map((link) => (
              <div>
                <a href={link.site}>{link.linkIsim}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Project;
