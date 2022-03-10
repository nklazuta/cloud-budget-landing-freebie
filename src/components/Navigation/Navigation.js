import React from "react";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__item">
          <a
            href="#overview"
            className="navigation__link navigation__link_active"
          >
            Overview
          </a>
        </li>
        <li className="navigation__item">
          <a href="#features" className="navigation__link">
            Features
          </a>
        </li>
        <li className="navigation__item">
          <a href="#techs" className="navigation__link">
            Technology
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contact" className="navigation__link">
            Contact
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
