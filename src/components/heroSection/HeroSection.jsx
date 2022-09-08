import React from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import BreadCrumb from "../buttons/BreadCrumb"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import NavBar from "../layout/NavBar"
import { InsightsNavbar } from "../navbarComponents"
import * as S from "./HeroSection.styles"

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
  Custom,
  locationButton,
}) => {
  // console.log(locationButton)
  const location = useLocation()
  const [navbarActive, setNavbarActive] = useState(true)


  const backgr =
    "https://www.alvarezandmarsal.com/sites/default/files/176916_hig_impact_of_new_admin_on_healthcare_webpage_r.jpg"

  return (
    <>
      <S.Hero
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
                    <S.TitleRoute color={"var(--yellowCategory) "}>
                      {pageCategory?.toUpperCase()}
                    </S.TitleRoute>
                  )}
                  {route && (
                    <span>
                      <S.TitleRoute color={"var(--hover-blue) "}>
                        {route.route?.toUpperCase() + " / "}
                      </S.TitleRoute>
                      <S.TitleRoute color={"var(--yellowCategory) "}>
                        {route.subRoute?.toUpperCase()}
                      </S.TitleRoute>
                    </span>
                  )}
                  {pageCategoryCenter && (
                    <h4 className="text-center">{pageCategoryCenter}</h4>
                  )}
                  {date && <h4 className="text-white">{date}</h4>}
                  <h1>{title}</h1>
                  {description && (
                    <p
                      className="pt-3 text-decoration-none"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    ></p>
                  )}

                  {buttonText ? (
                    <div className="buttonContainer">
                      <ButtonWithAnimation
                        text={buttonText}
                        href={"https://contact.alvarezandmarsal.com"}
                      />
                    </div>
                  ) : <Custom location={locationButton}/>}
                </div>
              )}
            </>
          )}
        </div>
        <BreadCrumb text={"fudge"} />
      </S.Hero>
    </>
  )
}

export default HeroSection
