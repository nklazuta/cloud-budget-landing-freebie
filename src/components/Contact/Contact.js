import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h3 className="contact__heading">Contact</h3>
      <p className="contact__text">
        Questions or concerns? Just fill out the form below and our support team
        will get back to you within 24 hours
      </p>
      <form className="contact__form">
        <input
          className="contact__input"
          name="first-name"
          type="text"
          placeholder="First Name"
          autoComplete="first-name"
          required
        />
        <input
          className="contact__input"
          name="last-name"
          type="text"
          placeholder="Last Name"
          autoComplete="last-name"
          required
        />
        <input
          className="contact__input"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          autoComplete="phone"
          required
        />
        <select
          className="contact__input"
          name="service"
          placeholder="Select Service"
        />
        <button className="contact__submit-button" type="submit">
          Submit Now
        </button>
      </form>
    </section>
  );
}

export default Contact;
