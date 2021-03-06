import React from "react";
import play from "../../images/play-button.svg";
import "./VideoSection.scss";

function VideoSection() {
  return (
    <section className="video">
      <div className="video__text-block">
        <h3 className="video__heading">
          Easy to Use Cloud Budget Management Software
        </h3>
        <p className="video__text">
          Our software is made so you can access and manage your budget and
          expenses online at any time from any device. It provides detailed
          income and expense reports with graphs so you can easilly see your
          spending patterns and budget at a glance. Read below to find out more.
        </p>
        <button className="video__link" type="button">
          Learn More
        </button>
      </div>
      <div className="video__video-block">
        <button className="video__play-button" type="button">
          <img
            className="video__play-icon"
            src={play}
            alt="Video playback button"
          />
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
