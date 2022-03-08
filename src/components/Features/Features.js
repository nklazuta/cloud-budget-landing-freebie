import React from "react";
import Card from "../Card/Card";
import photo1 from "../../images/card-photo1.svg";
import photo2 from "../../images/card-photo2.svg";
import photo3 from "../../images/card-photo3.svg";

function Features() {
  return (
    <section className="features">
      <h3 className="features__heading">Features</h3>
      <ul className="features__cards">
        <Card
          image={photo1}
          title="Supports All Currencies and Cards"
          text="We support all popular currencies and is fully customizable to add"
        />
        <Card
          image={photo2}
          title="Manage your expenses on the go"
          text="You can access your account from anywhere in the world on any device"
        />
        <Card
          image={photo3}
          title="Cloud Budget Management Software"
          text="Our software is made so you can access and manage your budget"
        />
      </ul>
    </section>
  );
}

export default Features;
