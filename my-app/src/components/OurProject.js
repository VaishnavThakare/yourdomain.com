import React, { useState } from "react";
import projectImg1 from "./projectImg1.png";
import projectImg2 from "./projectImg2.png";
import projectImg3 from "./projectImg3.png";
import "./OurProject.css";

function OurProject() {
  const [currentImage, setCurrentImage] = useState(projectImg1);
  const [selectedProject, setSelectedProject] = useState("project1");

  const handleProjectClick = (project, image) => {
    setCurrentImage(image);
    setSelectedProject(project);
  };

  return (
    <>
      <div className="passage4">
        <div>
          <p className="para1">OUR PROJECT</p>
          <p className="para2">WHY WE ARE BEST</p>
          <img className="projectImg" src={currentImage} alt="Project Image" />
        </div>
        <div className="projects">
          <div
            className={`project1 ${selectedProject === "project1" ? "selected" : ""}`}
            onClick={() => handleProjectClick("project1", projectImg2)}
          >
            <p className="projectHeading1">Genderless Kei - Japan's Hot</p>
            <p className="projectPara1">
              Set to launch on manufacturer's new A330 neo aircraft in 2017, its offering lots of
            </p>
          </div>

          <div
            className={`project2 ${selectedProject === "project2" ? "selected" : ""}`}
            onClick={() => handleProjectClick("project2", projectImg1)}
          >
            <p className="projectHeading2">Build your Business</p>
            <p className="projectPara2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem
            </p>
          </div>
          <div
            className={`project3 ${selectedProject === "project3" ? "selected" : ""}`}
            onClick={() => handleProjectClick("project3", projectImg3)}
          >
            <p className="projectHeading3">Build your Business</p>
            <p className="projectPara3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProject;
