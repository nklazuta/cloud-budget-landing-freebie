import React from "react";
import logo from "../../images/logo.svg";
import "./Logo.scss";

function Logo() {
  return (
    <button className="logo" type="button">
      <img
        className="logo__img"
        src={logo}
        alt="Logo for project CloudBudget"
      />
      <p className="logo__project">CloudBudget</p>
    </button>
  );
}

export default Logo;
