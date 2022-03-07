import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link exact to="/" className="header-logo">
      <img
        className="header-logo__img"
        src={logo}
        alt="Логотип проекта CloudBudget"
      />
      <p className="header-logo__project">CloudBudget</p>
    </Link>
  );
}

export default Logo;
