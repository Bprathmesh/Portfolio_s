import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import projectData from "../assets/projectData";

function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="full-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className="project-container">
        {projectData.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <motion.a 
              href={project.link} 
              className="view-project-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Project
            </motion.a>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;