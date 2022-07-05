import React from "react";
import styled from "styled-components";
import { HeroSection } from "../../components/cards";

const heroSection = {
  title: " Contact Alvarez & Marsal",
  backgroundUrl:
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
const ContactSection = styled.div`
  h1 {
    font-family: "DINNextW01-CondensedMed", "Arial Narrow", Tahoma, sans-serif;
    font-weight: normal;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .form--contact {
    margin: 0 auto;
    background-color: #eee;
    padding: 2rem 5rem;
  }
  .form__item {
    margin: 1rem 0;
    font-family: "DINNextW01-CondensedMed", "Arial Narrow", Tahoma, sans-serif;
  }
  .form__label {
    display: block;
    font-size: 16px;
    font-weight: normal;
    padding-bottom: 0.5rem;
    color: #002b49;
  }
  .form__input {
    width: 100%;
    line-height: 2;
    height: 2em;
    border: none;
    outline: none;
    transition: box-shadow 0.2s ease-out;
  }
  .form__textarea {
    width: 100%;
    line-height: 2;

    border: none;
    outline: none;
    transition: box-shadow 0.2s ease-out;
    height: 100px;
  }
  .form__optional {
    font-family: "HelveticaNeueW01-55Roma", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-style: italic;
    display: inline-block;
    margin-left: 0.2rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <HeroSection
        backgroundUrl={heroSection.backgroundUrl}
        title={heroSection.title}
      />
      <div className="container-fluid bg-white">
        <div className="container w-75 py-4">
          <h1> Contact A&M</h1>
          <div className="container form form--contact">
            <div className="form__item">
              <label htmlFor="first-name" className="form__label">
                First Name
              </label>
              <input
                className="form__input form__input--required"
                id="first-name"
              />
            </div>
            <div className="form__item">
              <label htmlFor="last-name" className="form__label">
                Last Name
              </label>
              <input
                className="form__input form__input--required"
                id="last-name"
              />
            </div>
            <div className="form__item">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input className="form__input form__input--required" id="email" />
            </div>
            <div className="form__item">
              <label htmlFor="country" className="form__label">
                Country of Residency
              </label>
              <input
                className="form__input form__input--required"
                id="country"
              />
            </div>
            <div className="form__item">
              <label htmlFor="company-name" className="form__label">
                Company Name
              </label>
              <input
                className="form__input form__input--required"
                id="company-name"
              />
            </div>
            <div className="form__item">
              <label htmlFor="phone" className="form__label">
                Phone
              </label>
              <input className="form__input form__input--required" id="phone" />
            </div>
            <div className="form__item">
              <label htmlFor="occupation" className="form__label">
                Title / Occupation{" "}
                <span className="form__optional">Optional</span>
              </label>
              <input
                className="form__input form__input--required"
                id="occupation"
              />
            </div>
            <div className="form__item">
              <label htmlFor="service" className="form__label">
                What Service / Industry?
              </label>
              <input
                className="form__input form__input--required"
                id="service"
              />
            </div>
            <div className="form__item">
              <label htmlFor="how-can-help" className="form__label">
                How can we help you today?
              </label>
              <input
                className="form__input form__input--required"
                id="how-can-help"
              />
            </div>
            <div className="form__item">
              <label htmlFor="how-you-hear" className="form__label">
                How did you hear about us?{" "}
                <span className="form__optional">Optional</span>
              </label>
              <input
                className="form__input form__input--required"
                id="how-you-hear"
              />
            </div>
            <div className="form__item">
              <label htmlFor="Message" className="form__label">
                Message
              </label>
              <textarea
                className="form__textarea form__input--required"
                id="Message"
                type="text"
                cols="40"
                rows="5"
              />
            </div>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
