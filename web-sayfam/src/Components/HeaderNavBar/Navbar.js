import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#skills" className="navbar-link">Skills</a>
        <a href="#profile" className="navbar-link">Profile</a>
        <a href="#projects" className="navbar-link">My Projects</a>
        <a href="mailto:onurerkdizdar@gmail.com" className="navbar-link">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
