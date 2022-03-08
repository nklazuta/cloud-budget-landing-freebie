import React from "react";
import facebook from "../../images/facebook-icon.svg";
import linkedin from "../../images/linkedin-icon.svg";
import twitter from "../../images/twitter-icon.svg";
import payments from "../../images/payments-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text-block">
        <p className="footer__title">Address</p>
        <p className="footer__text">
          Pipang Ltd, Griva Digeni, 81-83 Jacovides Tower, 1st Floor 1090
          Picosia USA
        </p>
      </div>

      <div className="footer__text-block">
        <p className="footer__title">Services</p>
        <ul className="footer__links">
          <li className="footer__item">
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Overview
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Features
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technology
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privecy
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__text-block">
        <p className="footer__title">Get in Touch</p>
        <p className="footer__text">info@cloudbudget.com</p>
        <p className="footer__text">+1 844-721-7120</p>
        <ul className="footer__social-media">
          <li className="footer__item">
            <a
              className="footer__media"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={facebook}
                alt="Facebook Icon"
              />
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__media"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={linkedin}
                alt="LinkedIn Icon"
              />
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__media"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={twitter} alt="Twitter Icon" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__text-block">
        <p className="footer__title">We Support</p>
        <img
          className="footer__payments"
          src={payments}
          alt="Payment Systems Icon"
        />
      </div>

      <p className="footer__copyright">Copyright 2018 CloudBudget</p>
    </footer>
  );
}

export default Footer;
