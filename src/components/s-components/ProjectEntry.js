import React from 'react';
import { useState } from 'react';
import "./Small.css";

function ProjectEntry(props) {
  const [isActive, setIsActive] = useState(true);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div id={props.id} className="projects">
      <h2>{props.title}</h2>
      <p>
        <button onClick={toggleClass} className="moreInfo button-89">Click For Info On Project</button>
      </p>
      <div className={isActive ? "hide" : "show"}>
        <p>{props.desc}</p>
        <p>Languages: {props.lang}</p>
      </div>
      <div className="student">
        <div className="wrap-it">
          <img className="round" src={props.image} alt="project-snapshot" />
        </div>
        <div className="link-cont">
          {props.link && (
            <div className="link-wrapper">
              <span className="inner-wrapper wrapper-14">
                <a className="link hover-14" href={props.link} title="No Link" target="_blank" rel="noopener noreferrer">
                  <h3 className="normalLink">Link To Project</h3>
                </a>
              </span>
            </div>
          )}
          <div className="link-wrapper">
            <span className="inner-wrapper wrapper-14">
              <a className="link hover-14" href={props.git} target="_blank" rel="noopener noreferrer">
                <h3 className="normalLink">Link To Repository On GitHub</h3>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEntry;
