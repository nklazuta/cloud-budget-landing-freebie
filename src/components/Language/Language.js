import React from "react";
import flag from "../../images/flag.svg";
import arrow from "../../images/arrow.svg";

function Language() {
  return (
    <button className="">
      <img className="header__flag" src={flag} alt="Иконка выбранного языка" />
      <p className="header__language">En</p>
      <img
        className="header__arrow"
        src={arrow}
        alt="Стрелка для выбора языка"
      />
    </button>
  );
}

export default Language;
