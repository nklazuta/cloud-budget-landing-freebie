import React from "react";

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#overview" className="navigation__link navigation__link_active">
        Overview
      </a>
      <a href="#features" className="navigation__link">
        Features
      </a>
      <a href="#techs" className="navigation__link">
        Technology
      </a>
      <a href="#contact" className="navigation__link">
        Contact
      </a>
      <a href="#" className="navigation__link">
        Sign Up
      </a>
    </nav>
  );
}

export default Navigation;
