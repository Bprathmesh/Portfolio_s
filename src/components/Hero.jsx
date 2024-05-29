import React from "react";
// import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import "./Hero.css";

function Hero() {
  // const particlesOptions = {
  
  // };

  return (
    <section id="hero">
      {/* <Particles options={particlesOptions} /> */}
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
        <img src="/profile.jpg" alt="Profile" className="circular-image" />
      </div>
    </section>
  );
}

export default Hero;
