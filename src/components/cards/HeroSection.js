import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sizem } from "../../utils/breakpoints";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";
import NavBar from "../layout/NavBar";

const Hero = styled.div`
  position: relative;
  height: ${(props) => props.height + "px" || ""};
  width: 100%;
  background: url(${(props) => props.backgroundUrl || ""}), rgba(6, 25, 49, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;

  .contentContainer {
    height: inherit;
    padding-left: 6%;
    padding-right: 5%;

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
  description,
  backgroundUrl,
  buttonText,
  pageCategory,
  pageCategoryCenter,
  className,
  route,
  date,
  height,
  heroBrazilianText,
  transparent,
}) => {
  let navigate = useNavigate();
  return (
    <Hero backgroundUrl={backgroundUrl} className={className} height={height}>
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

                <TitleRoute color={"var(--yellowCategory) "}>
                  {route.subRoute}
                </TitleRoute>
              </span>
            </>
          )}
          {pageCategoryCenter && (
            <h4 className="text-center">{pageCategoryCenter}</h4>
          )}
          {date && <h4 className="text-white">{date}</h4>}
          <h1>{title}</h1>
          {description && (
            <div
              className=" pt-3 text-decoration-none"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></div>
          )}

          {buttonText && (
            <div className="buttonContainer">
              <ButtonWithAnimation text={buttonText.toUpperCase()} />
            </div>
          )}
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
