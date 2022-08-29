import React from "react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { sizem } from "../../utils/breakpoints"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import NavBar from "../layout/NavBar"
import { InsightsNavbar } from "../navbarComponents"

const Hero = styled.div`
  position: relative;
  height: ${props => props.height + "px" || ""};
  width: 100%;
  background: url(${props => props.backgroundUrl || ""}), rgba(6, 25, 49, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;

  .contentContainer {
    height: inherit;
    padding-left: 6%;
    padding-right: 5%;
    nav {
      /* border: 2px solid red; */
      z-index: 100;
      /* position: absolute; */
    }

    .contentWithoutNavbar {
      height: inherit;
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
    }
    .buttonContainer {
      margin: auto 0px;
      @media ${sizem.mdm} {
        margin: 0px 0px;
      }
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
`

const TitleRoute = styled.span`
  font-size: 1.5rem;
  text-transform: "uppercase";
  color: ${props => props.color || "#fff"};
`

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
  let navigate = useNavigate()
  const location = useLocation()
  const [navbarActive, setNavbarActive] = useState(true)

  const backgr =
    "https://www.alvarezandmarsal.com/sites/default/files/176916_hig_impact_of_new_admin_on_healthcare_webpage_r.jpg"

  return (
    <>
      <Hero
        backgroundUrl={backgroundUrl ?? backgr}
        className={className}
        height={height}
      >
        <div className="contentContainer">
          <NavBar
            setNavbarActive={setNavbarActive}
            navbarActive={navbarActive}
          />
          {location.pathname === "/insights" ? (
            <InsightsNavbar />
          ) : (
            <>
              {navbarActive && (
                <div className="contentWithoutNavbar">
                  {pageCategory && (
                    <TitleRoute color={"var(--yellowCategory) "}>
                      {pageCategory?.toUpperCase()}
                    </TitleRoute>
                  )}
                  {route && (
                    <>
                      <span>
                        <TitleRoute color={"var(--hover-blue) "}>
                          {route.route?.toUpperCase() + " / "}
                        </TitleRoute>
                        <TitleRoute color={"var(--yellowCategory) "}>
                          {route.subRoute?.toUpperCase()}
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
                    <p
                      className=" pt-3 text-decoration-none"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    ></p>
                  )}

                  {buttonText && (
                    <div className="buttonContainer">
                      <ButtonWithAnimation
                        text={buttonText.toUpperCase()}
                        href={"https://contact.alvarezandmarsal.com"}
                      />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </Hero>
    </>
  )
}

export default HeroSection
