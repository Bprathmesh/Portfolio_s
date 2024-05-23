import React from "react";
import "./Header.css"; // Create this file for navbar styles

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a> 
      </nav>
    </header>
  );
}

export default Header;
