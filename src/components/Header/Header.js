import React from "react";
import flag from "../../images/flag.svg";
import arrow from "../../images/arrow-icon.svg";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <div className="header__box">
        <button className="header__language">
          <img
            className="header__flag"
            src={flag}
            alt="Flag for selected language"
          />
          <p className="header__name">En</p>
          <img
            className="header__arrow"
            src={arrow}
            alt="Arrow to select language"
          />
        </button>
        <button className="header__login" type="button">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
