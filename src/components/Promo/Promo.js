import React from "react";
import "./Promo.scss";

function Promo() {
  return (
    <section className="promo" id="overview">
      <div className="promo__background">
        <h1 className="promo__heading">CloudBudget</h1>
        <h2 className="promo__subtitle">
          Cloud budget management for everyone. Only €69.95 a Month After a 7
          Day Trial of
          <br />
          Up to €4.99
        </h2>
        <button className="promo__sign-up-button" type="button">
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Promo;
