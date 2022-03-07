import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="#"
        className="navigation__link"
        activeClassName="navigation__link_active"
      >
        Overview
      </NavLink>
      <NavLink
        to="#"
        className="navigation__link"
        activeClassName="navigation__link_active"
      >
        Features
      </NavLink>
      <NavLink
        to="#"
        className="navigation__link"
        activeClassName="navigation__link_active"
      >
        Technology
      </NavLink>
      <NavLink
        to="#"
        className="navigation__link"
        activeClassName="navigation__link_active"
      >
        Contact
      </NavLink>
      <NavLink
        to="#"
        className="navigation__link"
        activeClassName="navigation__link_active"
      >
        Sign Up
      </NavLink>
    </nav>
  );
}

export default Navigation;
