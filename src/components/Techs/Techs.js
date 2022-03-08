import React from "react";
import cloud from "../../images/cloud-icon.svg";
import secure from "../../images/security-icon.svg";
import pdf from "../../images/pdf-icon.svg";
import csv from "../../images/csv-icon.svg";

function Techs() {
  return (
    <section className="techs" id="techs">
      <h3 className="techs__heading">Technology</h3>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__number">01</p>
          <img className="techs__image" src={cloud} alt="Cloud storage icon" />
          <p className="techs__title">Cloud Storage</p>
          <p className="techs__text">
            Access your account from anywhere in the world on any device
          </p>
        </li>
        <li className="techs__item">
          <p className="techs__number">02</p>
          <img className="techs__image" src={secure} alt="Secure icon" />
          <p className="techs__title">Secure</p>
          <p className="techs__text">
            All your information is stored on secure cloud servers
          </p>
        </li>
        <li className="techs__item">
          <p className="techs__number">03</p>
          <img className="techs__image" src={pdf} alt="PDF icon" />
          <p className="techs__title">PDF Download</p>
          <p className="techs__text">
            Download any of your reports in PDF format
          </p>
        </li>
        <li className="techs__item">
          <p className="techs__number">04</p>
          <img className="techs__image" src={csv} alt="CSV icon" />
          <p className="techs__title">CSV Download</p>
          <p className="techs__text">
            All your information is stored on secure cloud servers
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
