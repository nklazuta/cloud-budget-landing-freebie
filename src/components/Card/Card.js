import React from "react";

function Card({ image, title, text }) {
  return (
    <li className="card">
      <img className="card__photo" src={image} alt="Background" />
      <div className="card__text-block">
        <p className="card__title">{title}</p>
        <p className="card__text">{text}</p>
        <button className="card__link" type="button">
          Read More
        </button>
      </div>
    </li>
  );
}

export default Card;
