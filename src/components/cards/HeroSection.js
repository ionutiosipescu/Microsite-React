import digital from "../../assets/images/digital";
import React from "react";
import styled from "styled-components";
import image from "../../assets/images/ConnorWine";
import HeroCardBrazilTransparent from "./HeroCardBrazilTransparent";

const Hero = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  /* padding: 2rem; */
  /* margin: 2rem; */
  padding: 3rem;
  background-size: cover;
  background-image: url(${(props) => props.backgroundUrl || digital});

  text-transform: uppercase;

  /* align title to center  , but if title it's long looks bad ________________________________________ */
  /* display: flex;
  align-items: center; */

  h1 {
    color: white;
    font-size: 90px;
    font-family: "Arial, Narrow Bold", Arial, sans-serif;
    text-shadow: 10px 10px 10px #00000029;
    /* font-weight: bold; */
    margin: 0;
    padding-left: 40px;
    /* margin: 0 1rem; */
    /* line-height: 100%; */
    word-wrap: break-word;
  }
  h4 {
    padding-left: 40px;
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
}) => {
  return (
    <Hero backgroundUrl={backgroundUrl}>
      {pageTitle && <h4>{pageTitle}</h4>}
      {pageTitleCenter && <h4 className="text-center">{pageTitleCenter}</h4>}

      <h1>{title}</h1>

      {transparent && <HeroCardBrazilTransparent />}
    </Hero>
  );
};

export default HeroSection;
