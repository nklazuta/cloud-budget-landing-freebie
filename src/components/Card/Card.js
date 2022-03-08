import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, text }) {
  return (
    <li className="card">
      <img className="card__photo" src={image} alt="Изображение" />
      <div className="card__text-block">
        <p className="card__title">{title}</p>
        <p className="card__text">{text}</p>
        <Link to="#" className="card__link">
          Read More
        </Link>
      </div>
    </li>
  );
}

export default Card;
