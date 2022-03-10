import React from "react";
import playstore from "../../images/google-playstore-icon.svg";
import appstore from "../../images/apple-appstore-icon.svg";
import windows from "../../images/windows-icon.svg";
import photo1 from "../../images/download-photo1.jpg";
import photo2 from "../../images/download-photo2.jpg";
import photo3 from "../../images/download-photo3.jpg";
import "./AppDownload.scss";

function AppDownload() {
  return (
    <section className="download">
      <div className="download__text-block">
        <h3 className="download__heading">Stay focused on saving money</h3>
        <p className="download__text">
          It is important to stay focused on saving money in any way you can. We
          help you monitor your spending habits so you can easily spot and cut
          any unnecessary expenses. Simply join today to get started!
        </p>
        <ul className="download__links">
          <li className="download__item">
            <button className="download__link" type="button">
              <img
                className="download__icon"
                src={playstore}
                alt="Google Play Icon"
              />
            </button>
          </li>
          <li className="download__item">
            <button className="download__link" type="button">
              <img
                className="download__icon"
                src={appstore}
                alt="App Store Icon"
              />
            </button>
          </li>
          <li className="download__item">
            <button className="download__link" type="button">
              <img
                className="download__icon"
                src={windows}
                alt="Windows Store Icon"
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="download__photo-block">
        <img
          className="download__image"
          src={photo1}
          alt="Decorative picture"
        />
        <img
          className="download__image"
          src={photo2}
          alt="Decorative picture"
        />
        <img
          className="download__image"
          src={photo3}
          alt="Decorative picture"
        />
      </div>
    </section>
  );
}

export default AppDownload;
