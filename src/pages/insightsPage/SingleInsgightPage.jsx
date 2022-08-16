import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { BreadCrumb, Spinner } from "../../components"
import {
  LinkedinStay,
  FacebookStay,
  TwitterStay,
  YoutubeStay,
  LetterStay,
} from "../../assets/icons"

import { HeroSection, CarouselSection } from "../../components/cards"

import { useEffect } from "react"
import { fetchData, getSingleArticle } from "../../API"
import LeftSection from "../../components/cards/LeftSection"
import { useDocumentTitle } from "../../hook"
import { PageContainer } from "./styles/SingleInsgightPage"
import DOMPurify from "dompurify"

const InsightCaseArticlePage = () => {
  const { state } = useLocation()
  const [carouselData, setCarouselData] = useState([])
  const [articleData, setArticleData] = useState(null)

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData(setCarouselData)
    getSingleArticle(setArticleData, state.uuid)
    // window.scrollTo(0, 0);
  }, [])

  useDocumentTitle(articleData?.title)

  // console.log("this is articleData", articleData);
  console.log("this is state", state)

  return articleData ? (
    <PageContainer>
      <HeroSection
        // title={articleData.title}
        title={"Need smaller title"}
        pageTitle="Case Studies"
        backgroundUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <div className="container  bg-white  d-flex flex-direction-column">
        <div className="row pt-5 ">
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 border-end border-2  py-5">
            <div className="p-3">
              <BreadCrumb route={"Insights"} subRoute={"Article"} />
            </div>
            <div className="row">
              <LeftSection nid={state.nid} />
              {/*---------------------------------------------------- SectionDescription */}
              <div className=" col-11 col-sm-10 col-md-10 col-lg-11">
                <div>
                  <span className="text-muted text-italic ps-3">
                    {articleData?.date}
                  </span>
                </div>

                <h4 className="pt-5 ps-3 fw-bold">{articleData?.title} </h4>
                <div
                  className="container pt-3 text-decoration-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(articleData?.content),
                  }}
                ></div>

                {/*-------------------------------- imagesContainer */}
                {articleData.pdf && (
                  <div className="d-flex pt-4 ">
                    <object
                      data="http://www.africau.edu/images/default/sample.pdf#zoom=FitH"
                      type="application/pdf"
                      width="20%"
                      height="10%"
                    >
                      <p>
                        It appears you don't have a PDF plugin for this browser.
                        No biggie... you can
                      </p>
                    </object>
                  </div>
                )}

                <div className="pt-4 px-4 learnMore">
                  <a
                    href={"http://www.africau.edu/images/default/sample.pdf"}
                    // without
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-info text-decoration-none"
                  >
                    Learn more now.
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------------------------------- FEATURED PROFILES  */}
          <div className="col-11 col-sm-12 col-md-3 col-lg-3 border-2 pt-5 secondSection ">
            {articleData.authors && (
              <FeaturedPeople
                titleSection={"Authors"}
                people={articleData.authors}
              />
            )}

            {articleData.experts && (
              <FeaturedPeople
                titleSection={"Featured Profiles"}
                people={articleData.experts}
              />
            )}

            {/* -------------------------------------------------------Stay connnected */}
            <LinksList titleSection={"Stay Connected"} linkIcons={iconsArr} />
          </div>
        </div>
      </div>

      <div>
        <CarouselSection
          categoryCarousel={carouselData?.block_two?.title}
          backgroundColor="#002B49"
          arr={carouselData?.block_two?.data}
          titleColor="#0085CA"
          textColor="#fff"
          textDate="#FFFFFF"
          carouselDotBackground="#002b49"
        />
      </div>
    </PageContainer>
  ) : (
    <Spinner />
  )
}

export default InsightCaseArticlePage

const FeaturedPeople = ({ titleSection, people }) => {
  return (
    <>
      <div>
        <h3 className="text-align-center">{titleSection}</h3>
      </div>
      <div>
        {people?.map((person, index) => (
          <div className="manager d-flex flex-column py-3" key={index}>
            <a
              className="nameAuthor text-decoration-none"
              href={person.personalPageLink}
              // if open new page
              target="_blank"
            >
              {person.personName}
            </a>
            {person.professionalTitle.map((title, index) => (
              <div key={index}>{title}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

const LinksList = ({ titleSection, linkIcons }) => {
  return (
    <div className="linksContainer pt-5">
      <h3> {titleSection} </h3>
      <div className="links container-fluid  ">
        {linkIcons.map((x, index) => (
          <a
            className="link  py-2 d-flex justify-content-between "
            key={index}
            href={x?.link}
            target="_blank"
          >
            <div className="image  col-md-2 col-lg-2 ">{x.icon}</div>
            <div className=" col-md-9 col-lg-9 align-items-center d-flex px-sm-2 ">
              <span className="textLinks">Join A&M on {x.text} </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

const iconsArr = [
  {
    id: 2,
    icon: <LinkedinStay />,
    text: "Linkedin",
    link: "https://www.linkedin.com/company/162399",
  },
  {
    id: 3,
    icon: <TwitterStay />,
    text: "Twitter",
    link: "https://twitter.com/alvarezmarsal",
  },
  {
    id: 1,
    icon: <FacebookStay />,
    text: "Facebook",
    link: "https://www.facebook.com/alvarezandmarsal",
  },

  {
    id: 3,
    icon: <YoutubeStay />,
    text: "YouTube",
    link: "https://www.youtube.com/user/AlvarezMarsal",
  },
  {
    id: 4,
    icon: <LetterStay />,
    text: "Sign Up for A&M Newsletters",
    link: "https://bulletins.alvarezandmarsal.com/",
  },
]
