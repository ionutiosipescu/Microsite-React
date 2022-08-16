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

    .contentWithoutNavbar {
      height: inherit;
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
    }
    .buttonContainer {
      margin: auto 0px;
      @media ${sizem.smm} {
        margin: 0px 0px;
      }
    }
    h1 {
      color: #fff;
      text-shadow: 10px 10px 10px #00000029;
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-style: medium;
      margin: 0;
      letter-spacing: 0.5px;
      font-size: 3rem;
      line-height: 3rem;
      text-transform: uppercase;
      @media ${sizem.smm} {
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
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
        font-size: 0.9rem;
        line-height: 1rem;
      }
    }
  }
  .routeSpan {
  }
`;

const TitleRoute = styled.span`
  font-size: 1.5rem;
  text-transform: "uppercase";
  color: ${(props) => props.color || "#fff"};
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
  console.log(backgroundUrl);
  const backgr =
    "https://www.alvarezandmarsal.com/sites/default/files/176916_hig_impact_of_new_admin_on_healthcare_webpage_r.jpg";
  return (
    <Hero
      backgroundUrl={backgroundUrl ?? backgr}
      className={className}
      height={height}
    >
      <div className="contentContainer">
        <NavBar />
        <div className="contentWithoutNavbar">
          {pageCategory && (
            <TitleRoute color={"var(--yellowCategory) "}>
              {pageCategory}
            </TitleRoute>
          )}
          {route && (
            <>
              <span>
                <TitleRoute color={"var(--hover-blue) "}>
                  {route.route}
                </TitleRoute>

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
