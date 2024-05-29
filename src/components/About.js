import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate software developer based in Bangalore. I enjoy building
        creative solutions that solve real-world problems. I have experience in
        . I'm always eager to learn and
        collaborate on exciting projects.
      </p>

      <div className="links">
        <a href="your_github_profile_url" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="your_leetcode_profile_url" target="_blank" rel="noopener noreferrer">
          LeetCode
        </a>
        <a href="your_resume_url" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </section>
  );
}

export default About;
