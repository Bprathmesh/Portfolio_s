import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Hero.css";

function Hero() {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <motion.div 
          className="text-container"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Prathmesh Bhardwaj
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Programmer", "Problem Solver"],
              autoStart: true,
              loop: true
            }}
          />
        </motion.div>
        <motion.img 
          src={`${process.env.PUBLIC_URL}/Profile.jpg`} 
          alt="Profile" 
          className="circular-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        />
      </div>
    </motion.section>
  );
}

export default Hero;
