import React from "react";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <button className="header-logo" type="button">
      <img
        className="header-logo__img"
        src={logo}
        alt="Logo for project CloudBudget"
      />
      <p className="header-logo__project">CloudBudget</p>
    </button>
  );
}

export default Logo;
