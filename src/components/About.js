import React from "react";
import "./About.css";
import techStackLogos from "../assets/techStackLogos";

function About() {
  return (
    <section id="about" className="full-page">
      <h2>About Me</h2>
      <p>
        I am a passionate software developer based in Bangalore. I enjoy building
        creative solutions that solve real-world problems. I have experience in
        various technologies and always eager to learn and collaborate on exciting projects.
      </p>

      <h3>Tech Stacks</h3>
      <div className="tech-stack-box">
        <div className="tech-stack-grid">
          {techStackLogos.map((logo, index) => (
            <div key={index} className="tech-stack-item">
              <img src={logo.src} alt={logo.alt} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>

      <h3>Education</h3>
      <div className="education-section">
        <div className="education-item">
          <h4>St Lukes Senior Sec School</h4>
          <p>Completed 12th</p>
        </div>
        <div className="education-item">
          <h4>BITS Pilani</h4>
          <p>B.Sc Degree</p>
        </div>
        <div className="education-item">
          <h4>Scaler Academy</h4>
          <p>Associated for additional education</p>
        </div>
      </div>

      <div className="links">
        <a href="your_github_profile_url" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="your_leetcode_profile_url" target="_blank" rel="noopener noreferrer">LeetCode</a>
        <a href="your_resume_url" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </section>
  );
}

export default About;
