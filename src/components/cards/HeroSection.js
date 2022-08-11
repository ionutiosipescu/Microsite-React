import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sizem } from "../../utils/breakpoints";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";
import NavBar from "../layout/NavBar";

const Hero = styled.div`
  position: relative;
  height: 450px;
  width: 100%;
  background: url(${(props) => props.backgroundUrl || ""}), rgba(6, 25, 49, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  text-transform: uppercase;

  .contentContainer {
    height: inherit;
    padding-left: 6%;
    padding-right: 5%;
    .contentWithoutNavbar {
      height: inherit;
      display: flex;
      flex-direction: column;
    }
    .buttonContainer {
      margin: auto 0px;
      @media ${sizem.smm} {
        margin: 0px 0px;
      }
    }
    h1 {
      padding-top: 2rem;
      color: #fff;
      text-shadow: 10px 10px 10px #00000029;
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-style: medium;
      margin: 0;
      letter-spacing: 0.5px;
      font-size: 3rem;
      line-height: 3rem;
    }
    p {
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-style: medium;
      width: 65%;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #fff;
      @media ${sizem.smm} {
        width: 90%;
      }
    }
  }
`;

const HeroSection = ({
  title,
  description,
  backgroundUrl,
  buttonText,
  pageTitle,
  pageTitleCenter,
  transparent,
  className,
  heroBrazilianText,
}) => {
  let navigate = useNavigate();
  return (
    <Hero backgroundUrl={backgroundUrl} className={className}>
      <div className="contentContainer">
        <NavBar />
        <div className="contentWithoutNavbar">
          {pageTitle && <h4>{pageTitle}</h4>}
          {pageTitleCenter && (
            <h4 className="text-center">{pageTitleCenter}</h4>
          )}

          <h1>{title}</h1>
          <div
            className=" pt-3 text-decoration-none"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></div>

          <div className="buttonContainer">
            <ButtonWithAnimation
              text={"talk to us to learn more".toUpperCase()}
            />
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;
/* @media ${sizem.xlm} {
      h1 {
        font-size: 40px;
        line-height: 50px;
      }
    }
    @media ${sizem.lgm} {
      h1 {
        font-size: 40px;
        line-height: 50px;
      }
    }
    @media ${sizem.mdm_m} {
      h1 {
        font-size: 48px;
        line-height: 50px;
      }
    }

    @media ${sizem.mdm} {
      h1 {
        font-size: 35px;
        line-height: 35px;
      }
    }
    @media ${sizem.smm} {
      h1 {
        font-size: 24px;
        line-height: 30px;
      }
      p {
        font-size: 14px;
        line-height: 15px;
      }
    } */
