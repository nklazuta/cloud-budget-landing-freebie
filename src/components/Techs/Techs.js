import React from "react";
import cloud from "../../images/cloud-icon.svg";
import secure from "../../images/security-icon.svg";
import pdf from "../../images/pdf-icon.svg";
import csv from "../../images/csv-icon.svg";
import "./Techs.scss";

function Techs() {
  return (
    <section className="techs" id="techs">
      <h3 className="techs__heading">Technology</h3>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__number">
            01
            <img className="techs__icon" src={cloud} alt="Cloud storage icon" />
          </p>
          <p className="techs__title">Cloud Storage</p>
          <p className="techs__text">
            Access your account from anywhere in the world on any device
          </p>
        </li>
        <li className="techs__item">
          <p className="techs__number">
            02
            <img
              className="techs__icon techs__icon_type_secure"
              src={secure}
              alt="Secure icon"
            />
          </p>
          <p className="techs__title">Secure</p>
          <p className="techs__text">
            All your information is stored on secure cloud servers
          </p>
        </li>
        <li className="techs__item">
          <p className="techs__number">
            03
            <img
              className="techs__icon techs__icon_type_download"
              src={pdf}
              alt="PDF icon"
            />
          </p>
          <p className="techs__title">PDF Download</p>
          <p className="techs__text">
            Download any of your reports in PDF format
          </p>
        </li>
        <li className="techs__item">
          <p className="techs__number">
            04
            <img
              className="techs__icon techs__icon_type_download"
              src={csv}
              alt="CSV icon"
            />
          </p>
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
