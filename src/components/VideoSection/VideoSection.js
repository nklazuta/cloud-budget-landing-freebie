import React from "react";
import play from "../../images/play-button.svg";
import video from "../../images/video.svg";

function VideoSection() {
  return (
    <section className="video">
      <div className="video__text-block">
        <h3 className="video__title">
          Easy to Use Cloud Budget Management Software
        </h3>
        <p className="video__text">
          Our software is made so you can access and manage your budget and
          expenses online at any time from any device. It provides detailed
          income and expense reports with graphs so you can easilly see your
          spending patterns and budget at a glance. Read below to find out more.
        </p>
        <a
          className="video__link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
      <div className="video__video-block">
        <button className="video__play-button" type="button">
          <img
            className="video__play-icon"
            src={play}
            alt="Кнопка проигрывания видео"
          />
        </button>
        <img
          className="video__video-image"
          src={video}
          alt="Здесь должно быть видео"
        />
      </div>
    </section>
  );
}

export default VideoSection;
