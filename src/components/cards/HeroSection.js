import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import NavBar from "../layout/NavBar"
import { InsightsNavbar } from "../navbarComponents"
import { Hero, TitleRoute } from "./styles/HeroSection.styles"

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
          <NavBar />
          {location.pathname === "/insights" ? (
            <InsightsNavbar />
          ) : (
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
                      {route.route + " / "}
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
                <p
                  className=" pt-3 text-decoration-none"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></p>
              )}

              {buttonText && (
                <div className="buttonContainer">
                  <ButtonWithAnimation text={buttonText.toUpperCase()} />
                </div>
              )}
            </div>
          )}
        </div>
      </Hero>
    </>
  )
}

export default HeroSection
