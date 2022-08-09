import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeroCardBrazilTransparent from "./HeroCardBrazilTransparent";
import YellowButton from "../buttons/YellowButton";
import { sizem } from "../../utils/breakpoints";

const Hero = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  /* padding: 2rem; */
  /* margin: 2rem; */
  /* padding: 3rem; */
  background-size: cover;
  background-image: url(${(props) => props.backgroundUrl || ""});

  text-transform: uppercase;

  /* align title to center  , but if title it's long looks bad ________________________________________ */
  display: flex;
  align-items: center;
  /* padding: 0px 15%; */
  padding-left: 10%;
  padding-right: 10%;
  h1 {
    color: white;

    text-shadow: 10px 10px 10px #00000029;
    /* font-size: 100px; */

    margin: 0;
    font-family: "arial-narrow-8", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 100px;
    line-height: 100px;
    @media ${sizem.xlm} {
      font-size: 85px;
      line-height: 85px;
    }
    @media ${sizem.lgm} {
      font-size: 85px;
      line-height: 85px;
    }
    @media ${sizem.mdm_m} {
      font-size: 70px;
      line-height: 75px;
    }

    @media ${sizem.mdm} {
      font-size: 70px;
      line-height: 70px;
    }
    @media ${sizem.smm} {
      font-size: 50px;
      line-height: 50px;
    }
  }
  h4 {
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--orange2);
    margin: 0;
  }
`;

const HeroSection = ({
  title,
  backgroundUrl,
  buttonText,
  pageTitle,
  pageTitleCenter,
  transparent,
  className,
}) => {
  let navigate = useNavigate();
  return (
    <Hero backgroundUrl={backgroundUrl} className={className}>
      <div>
        {pageTitle && <h4>{pageTitle}</h4>}
        {pageTitleCenter && <h4 className="text-center">{pageTitleCenter}</h4>}

        <h1>{title}</h1>
        {buttonText && (
          <div className="pt-2">
            <YellowButton
              text={buttonText}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        )}
        {transparent && <HeroCardBrazilTransparent />}
      </div>
    </Hero>
  );
};

export default HeroSection;
