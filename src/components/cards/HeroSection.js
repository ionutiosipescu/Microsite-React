import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../../assets/images/ConnorWine";
import digital from "../../assets/images/digital";
import HeroCardBrazilTransparent from "./HeroCardBrazilTransparent";
import YellowButton from "../buttons/YellowButton";

const Hero = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  /* padding: 2rem; */
  /* margin: 2rem; */
  padding: 3rem;
  background-size: cover;
  background-image: url(${(props) => props.backgroundUrl || ""});

  text-transform: uppercase;

  /* align title to center  , but if title it's long looks bad ________________________________________ */
  display: flex;
  align-items: center;
  padding-left: 40px;
  h1 {
    color: white;
    font-size: 80px;
    font-family: "Helvetica,Arial,sans-serif";
    font-weight: bold;
    text-shadow: 10px 10px 10px #00000029;
    /* font-weight: bold; */
    margin: 0;

    /* margin: 0 1rem; */
    /* line-height: 100%; */
    /* word-wrap: break-word; */
  }
  h4 {
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
    <Hero backgroundUrl={backgroundUrl} className={"something"}>
      <div>
        {pageTitle && <h4>{pageTitle}</h4>}
        {pageTitleCenter && <h4 className="text-center">{pageTitleCenter}</h4>}

        <h1>{title}</h1>
        {buttonText && (
          <YellowButton
            text={buttonText}
            onClick={() => {
              navigate("/contact");
            }}
          />
        )}
        {transparent && <HeroCardBrazilTransparent />}
      </div>
    </Hero>
  );
};

export default HeroSection;
