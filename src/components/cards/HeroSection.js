import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../../assets/images/ConnorWine";
import digital from "../../assets/images/digital";
import HeroCardBrazilTransparent from "./HeroCardBrazilTransparent";
import YellowButton from "../buttons/YellowButton";
import { sizem } from "../../utils/breakpoints";

const Hero = styled.div`
  position: relative;
  height: 450px;
  width: 100%;
  /* padding: 2rem; */
  /* margin: 2rem; */
  /* padding: 3rem; */

  background: url(${(props) => props.backgroundUrl || ""}), rgba(6, 25, 49, 0.6);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  /* background-color: rgba(6, 25, 49, 0.6); */

  text-transform: uppercase;

  /* align title to center  , but if title it's long looks bad ________________________________________ */
  display: flex;
  align-items: center;
  /* padding: 0px 15%; */
  /* filter: blur(2px); */
  .layer {
    /* background-color: rgba(248, 247, 216, 0.7); */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content {
    /* padding: 0% 5%; */
    padding-left: 7%;
    padding-right: 5%;
    /* font-family: "Helvetica Neue LT Std";
    font-weight: normal;
    font-style: normal; */
    /* font-weight:100; */ /* font-family: "arial-narrow-8", sans-serif; */
    h1 {
      color: #fff;

      text-shadow: 10px 10px 10px #00000029;
      /* font-size: 100px; */

      margin: 0;

      letter-spacing: 0.5px;
      font-size: 50px;
      line-height: 60px;
      z-index: 100;
    }
    p {
      font-size: 20px;
      line-height: 24px;
      color: #fff;
    }

    @media ${sizem.xlm} {
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
    }
  }

  /*
  h4 {
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--orange2);
    margin: 0;
    font-size: 48px;
  } */
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
      <div className="content">
        {pageTitle && <h4>{pageTitle}</h4>}
        {pageTitleCenter && <h4 className="text-center">{pageTitleCenter}</h4>}

        <h1>{title}</h1>
        <div
          className=" pt-3 text-decoration-none"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>

        {/* <p>{description}</p> */}
        {/* {buttonText && (
          <div className="pt-2">
            <YellowButton
              text={buttonText}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        )} */}

        {/* <HeroCardBrazilTransparent /> */}
      </div>
    </Hero>
  );
};

export default HeroSection;
