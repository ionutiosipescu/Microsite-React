import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { BreadCrumb, Spinner } from "../../components";
import {
  LinkedinStay,
  FacebookStay,
  TwitterStay,
  YoutubeStay,
  LetterStay,
} from "../../assets/icons";

import { HeroSection, CarouselSection } from "../../components/cards";
import {
  ChevronRight,
  ChevronRightBlue,
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
  DocumentIcon,
  PdfIcon,
  ShareIcon,
  LetterIcon,
  // Envelope,
} from "../../assets/icons";

import { dateToShortLocale } from "../../utils";
import { useEffect } from "react";
import { fetchData, getSingleArticle } from "../../API";
import LeftSection from "../../components/cards/LeftSection";
import { useDocumentTitle } from "../../hook";
import { PageContainer } from "./styles/InsightCaseArticlePage.style";

const InsightCaseArticlePage = ({}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const [carouselData, setCarouselData] = useState([]);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetchData(setCarouselData);
    // getSingleArticle(setArticleData, "3030696e-0490-483b-94f2-127d13fd3478");
    getSingleArticle(setArticleData, "7d93dd97-dc6a-4844-b06b-fdf0ead0ead7");
  }, []);

  console.log("this is single article", articleData);

  // useDocumentTitle(`${state?.title}`);
  return (
    <PageContainer>
      <HeroSection
        title={id.slice(0, 35)}
        pageTitle="Case Studies"
        backgroundUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="container-fluid  bg-white  d-flex flex-direction-column">
        <div className="row pt-5 ">
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 border-end border-2  py-5">
            <div className="p-2">
              <BreadCrumb route={"Insights"} subRoute={"Case Studies"} />
            </div>
            <div className="row">
              <LeftSection />
              {/*---------------------------------------------------- SectionDescription */}
              <div className=" col-9 col-sm-10 col-md-10 col-lg-11">
                <div>
                  <span className="text-muted text-italic">
                    {dateToShortLocale(articleData?.date)}
                  </span>
                </div>

                <h4 className="pt-5 fw-bold">{articleData.title} </h4>
                <div
                  className="pt-3 text-decoration-none"
                  dangerouslySetInnerHTML={{ __html: articleData.content }}
                ></div>

                <p className=""></p>

                {/*-------------------------------- imagesContainer */}
                <div className="d-flex pt-4 ">
                  {/* {arrImages?.map((image, index) => (
                    <div className="px-2" key={index}>
                      <img
                        src={image}
                        width="150px"
                        height="200px"
                        className="img-rounded"
                      />
                    </div>
                  ))} */}
                  <object
                    data="http://www.africau.edu/images/default/sample.pdf#zoom=FitH"
                    type="application/pdf"
                    width="20%"
                    height="10%"
                  >
                    <p>
                      It appears you don't have a PDF plugin for this browser.
                      No biggie... you can{" "}
                    </p>
                  </object>
                </div>
                <div className="pt-4 learnMore">
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
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 border-2 pt-5 secondSection ">
            {/* -------------------------------------------------------Stay connnected */}
            <ListManagers
              titleSection={"Featured Profiles"}
              managers={articleData.authorsData}
            />
            <LinksList
              titleSection={"Stay Connected"}
              linkIcons={iconsArr}
              className=""
            />
          </div>
        </div>
      </div>
      <div>
        {carouselData.length == 0 ? (
          <Spinner />
        ) : (
          <CarouselSection
            categoryCarousel={carouselData?.block_two?.title}
            backgroundColor="#002B49"
            arr={carouselData?.block_two?.data}
            titleColor="#0085CA"
            textColor="#fff"
            textDate="#FFFFFF"
            carouselDotBackground="#002b49"
          />
        )}
      </div>
    </PageContainer>
  );
};

export default InsightCaseArticlePage;

const leftSectionIcons = [
  {
    id: 0,
    icon: <ShareIcon />,
    children: [
      {
        color: "#0085CA",
        icon: <Facebook />,
      },
      {
        color: "#002B49",
        icon: <LinkedIn />,
      },
      {
        color: "#171717",
        icon: <Twitter />,
      },
    ],
  },
  {
    id: 1,
    icon: <DocumentIcon />,
    children: [{ text: "Printable Version", color: "#0085CA" }],
  },
  {
    id: 2,
    icon: <LetterIcon />,
    children: [{ text: "SEND BY EMAIL", color: "#0085CA" }],
  },
  {
    id: 3,
    icon: <PdfIcon />,
    children: [{ text: "PDF VERSION", color: "#0085CA" }],
  },
];

const arrImages = [
  "https://images.unsplash.com/photo-1657039875202-b7472f549b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //   "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //   "https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
];
const arr = [
  {
    id: 1,
    title: "lorem-ipsum.line1",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    category: "expertise",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 2,
    title: "lorem-ipsum.2",
    category: "expertise",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 3,
    title: "lorem-ipsum.3",
    category: "industry",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 4,
    title: "lorem-ipsum.4",
    category: "country",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },

  {
    id: 2,
    title: "lorem-ipsum.2",
    category: "country",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 1,
    title: "lorem-ipsum.line1",
    category: "country",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at illo ipsam, magni nostrum ad neque reprehenderit illum excepturi asperiores blanditiis dignissimos? Enim deserunt ea optio tempore. Est distinctio veritatis repellat! adipisicing elit. Praesentium at illo ipsam, magni nostrum ad neque reprehenderit illum excepturi asperiores blanditiis dignissimos? Enim deserunt ea optio tempore. Est distinctio veritatis repellat",
  },
  {
    id: 3,
    title: "lorem-ipsum.3",
    category: "buletin type",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 4,
    title: "lorem-ipsum.4",
    category: "country",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
];

const ListManagers = ({ titleSection, managers }) => {
  return (
    <>
      <div className="">
        <h3 className="text-align-center">{titleSection}</h3>{" "}
      </div>
      <div className="managers">
        {managers?.map((x, index) => (
          <div className="manager d-flex flex-column py-3" key={index}>
            <span className="nameAuthor">
              {x.firstName} {x.lastName}
            </span>
            {/* <span className="text-muted">{x.position}</span> */}
            <span className="text-muted positionAuthor">{x.profession}</span>
          </div>
        ))}
      </div>
    </>
  );
};

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
  );
};

const iconsArr = [
  {
    id: 2,
    icon: <LinkedinStay />,
    text: "Linkedin",
    link: "www.linkedin.com/company/162399",
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
];
