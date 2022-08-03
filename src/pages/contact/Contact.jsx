import React, { useState } from "react";
import styled from "styled-components";
import { HeroSection } from "../../components/cards";
import YellowButton from "../../components/buttons/YellowButton";
import { useDocumentTitle } from "../../hook";

const heroSection = {
  title: " Contact Alvarez & Marsal",
  backgroundUrl:
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryOfResidency: "",
    companyName: "",
    phone: "",
    title: "",
    industry: "",
    help: "",
    howYouHeard: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.match(/^[a-zA-Z0-9@.?!]*$/)) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };
  useDocumentTitle("Contact | Alvarez & Marsal");
  return (
    <ContactSection>
      <HeroSection
        backgroundUrl={heroSection.backgroundUrl}
        title={heroSection.title}
      />

      <div className="content  bg-white py-5 ">
        <div className=" content w-75 m-auto pt-2">
          <h1 className="contact-am-heading">Contact A&amp;M</h1>
        </div>
        <div className="containerForm w-75 m-auto ">
          <div className="form form--contact  py-5">
            <div className="form__item">
              <label htmlFor="first-name" className="form__label">
                First Name
              </label>
              <input
                className="form__input form__input--required"
                id="first-name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form__item">
              <label htmlFor="last-name" className="form__label">
                Last Name
              </label>
              <input
                className="form__input form__input--required"
                id="last-name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form__item">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                className="form__input form__input--required"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__item">
              <label htmlFor="country" className="form__label">
                Country of Residency
              </label>
              <select
                type="select"
                className="form__input form__input--required"
                id="country"
                name="countryOfResidency"
                value={values.countryOfResidency}
                onChange={handleChange}
              >
                <option value="volvo">Albania</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="company-name" className="form__label">
                Company Name
              </label>
              <input
                className="form__input form__input--required"
                id="company-name"
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="form__item">
              <label htmlFor="phone" className="form__label">
                Phone
              </label>
              <input
                className="form__input form__input--required"
                type="number"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form__item">
              <label htmlFor="occupation" className="form__label">
                Title / Occupation{" "}
                <span className="form__optional">Optional</span>
              </label>
              <input
                className="form__input form__input--required"
                id="occupation"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div className="form__item">
              <label htmlFor="service" className="form__label">
                What Service / Industry?
              </label>
              <select
                className="form__input form__input--required"
                id="service"
                name="industry"
                value={values.industry}
                onChange={handleChange}
              >
                <option value="volvo">Technology</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="how-can-help" className="form__label">
                How can we help you today?
              </label>
              <select
                className="form__input form__input--required"
                id="how-can-help"
                name="help"
                value={values.help}
                onChange={handleChange}
              >
                <option value="volvo">Technology</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="how-you-hear" className="form__label">
                How did you hear about us?{" "}
                <span className="form__optional">Optional</span>
              </label>
              <select
                className="form__input form__input--required"
                id="how-you-hear"
                name="howYouHeard"
                value={values.howYouHeard}
                onChange={handleChange}
              >
                <option value="volvo">Technology</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="form__textareadiv">
              <label htmlFor="Message" className="form__label">
                Message
              </label>
              <textarea
                className="form__textarea form__input--required w-100"
                id="Message"
                type="text"
                cols="40"
                rows="5"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>

            <div className="form__item checker">
              <input
                class="form__input--required "
                id="privacy"
                type="checkbox"
              />
              <label
                htmlFor="privacy"
                className="form__label--accept d-inline px-2 "
              >
                I acknowledge that A&M will process my personal information in
                accordance with its{" "}
                <a href="https://www.alvarezandmarsal.com/terms-use">
                  Privacy Policy
                </a>
              </label>
            </div>
            <p className="form__label form__label--compact form__label--accept form__item  m-auto pt-2">
              This form is for business-related inquires only. If you are
              seeking to exercise rights related to your personal data (e.g.,
              access, deletion), please submit your request to our Privacy
              Office either by using our{" "}
              <a
                href="https://privacyportal-de.onetrust.com/webform/a985a78b-db11-492f-ab2d-203a4030c9ad/f44bd36c-e38d-4516-8038-78fbe24294cb"
                className=""
              >
                DSAR Submission Form
              </a>{" "}
              or sending an email to{" "}
              <a
                href="mailto:data.protection.office@alvarezandmarsal.com"
                className=""
              >
                data.protection.office@alvarezandmarsal.com
              </a>
              .
            </p>
            <div className=" buttonContainer   m-auto ">
              <YellowButton
                text="Submit"
                onClick={() => console.log(values)}
                radius="0"
              />
            </div>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
const ContactSection = styled.div`
  width: 100%;
  background-color: white;

  .contact-am-heading {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    /* font-weight: bold; */
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  .formContainer {
    margin: auto;
    background-color: #eee;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    // margin: 50px 0px;
  }
  .form--contact {
    // margin: 20px auto;
    width: 100%;
    margin-bottom: 50px;
    background-color: #eee;
  }
  .form__item {
    // margin: 1rem 0;
    font-family: "Roboto", sans-serif;
    /* font-weight: 700; */
    font-size: 18px;
    width: 80%;
    margin: auto;
    justify-content: center;
    height: 70px;
  }
  .form__label {
    display: block;
    font-size: 19px;
    font-weight: normal;
    // padding-bottom: 0.5rem;
    color: #002b49;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
  .form__input {
    width: 100%;

    line-height: 2;
    padding: 0px 10px;
    height: 2em;
    border: none;
    outline: none;
    transition: box-shadow 0.2s ease-out;
  }
  .form__textareadiv {
    // margin: 1rem 0;
    font-family: "Roboto", sans-serif;
    width: 80%;
    margin: auto;
    justify-content: center;
    height: 150px;
  }
  .form__optional {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 300;
    font-style: italic;
    display: inline-block;
    margin-left: 0.2rem;
  }
  .buttonContainer {
    width: 80%;
    margin: auto;
    padding-top: 50px;
  }
  @media only screen and (max-width: 900px) {
    .form__item {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 630px) {
    .form__item {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 460px) {
    .buttonContainer {
      padding-top: 85px;
    }
  }
  @media only screen and (max-width: 360px) {
    .form__textareadiv {
      padding: 10px 0px;
    }
    .checker {
      padding-top: 10px;
    }
    .buttonContainer {
      padding-top: 110px;
    }
  }
`;
