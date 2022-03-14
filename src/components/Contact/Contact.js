import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [values, setValues] = useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    setValues({ ...values, [name]: value });
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(values);
    setValues({});
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__text-block">
        <h3 className="contact__heading">Contact</h3>
        <p className="contact__text">
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </p>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          className="contact__input contact__input_type_name"
          name="name"
          type="text"
          placeholder="First Name"
          autoComplete="first-name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <input
          className="contact__input contact__input_type_surname"
          name="surname"
          type="text"
          placeholder="Last Name"
          autoComplete="last-name"
          value={values.surname || ""}
          onChange={handleChange}
          required
        />
        <input
          className="contact__input contact__input_type_phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          autoComplete="phone"
          value={values.phone || ""}
          onChange={handleChange}
          required
        />
        <select className="contact__select" name="service">
          <option className="contact__option" value="value">
            Select Service
          </option>
        </select>
        <button className="contact__submit-button" type="submit">
          Submit Now
        </button>
      </form>
    </section>
  );
}

export default Contact;
