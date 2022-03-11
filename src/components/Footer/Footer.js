import React from "react";
import facebook from "../../images/facebook-icon.svg";
import linkedin from "../../images/linkedin-icon.svg";
import twitter from "../../images/twitter-icon.svg";
import payments from "../../images/payments-icon.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text-block footer__text-block_type_address">
        <p className="footer__title">Address</p>
        <p className="footer__text">
          Pipang Ltd, Griva Digeni,
          <br />
          81-83 Jacovides Tower, 1st Floor 1090 Picosia USA
        </p>
      </div>

      <div className="footer__text-block footer__text-block_type_services">
        <p className="footer__title">Services</p>
        <ul className="footer__links">
          <li className="footer__item">
            <a className="footer__link" href="#overview">
              Overview
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#features">
              Features
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#techs">
              Technology
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#" target="_self">
              Terms & Conditions
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#" target="_self">
              Privecy
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__text-block footer__text-block_type_contacts">
        <p className="footer__title">Get in Touch</p>
        <p className="footer__text footer__text_type_mail">
          info@cloudbudget.com
        </p>
        <p className="footer__text footer__text_type_phone">+1 844-721-7120</p>
        <ul className="footer__social-media">
          <li className="footer__item">
            <a
              className="footer__media"
              href="https://facebook.com"
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
              href="https://linkedin.com"
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={twitter} alt="Twitter Icon" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__text-block footer__text-block_type_payments">
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
