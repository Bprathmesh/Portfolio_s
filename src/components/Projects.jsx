import React from "react";
import "./Projects.css";
import projectData from "../assets/projectData";

function Projects() {
  return (
    <section id="projects" className="full-page">
      <h2>Projects</h2>
      <div className="project-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <a href={project.link} className="view-project-btn">View Project</a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
