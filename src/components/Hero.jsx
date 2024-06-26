import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1>Prathmesh Bhardwaj</h1>
          <Typewriter
            options={{
              strings: ["Programmer", "Problem Solver"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <img src={`${process.env.PUBLIC_URL}/Profile.jpg`} alt="Profile" className="circular-image" />
      </div>
    </section>
  );
}

export default Hero;
