import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__text-block">
        <h3 className="contact__heading">Contact</h3>
        <p className="contact__text">
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </p>
      </div>
      <form className="contact__form">
        <input
          className="contact__input contact__input_type_name"
          name="first-name"
          type="text"
          placeholder="First Name"
          autoComplete="first-name"
          required
        />
        <input
          className="contact__input contact__input_type_surname"
          name="last-name"
          type="text"
          placeholder="Last Name"
          autoComplete="last-name"
          required
        />
        <input
          className="contact__input contact__input_type_phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          autoComplete="phone"
          required
        />
        <select className="contact__select" name="service">
          <option className="contact__option">Select Service</option>
        </select>
        <button className="contact__submit-button" type="submit">
          Submit Now
        </button>
      </form>
    </section>
  );
}

export default Contact;
