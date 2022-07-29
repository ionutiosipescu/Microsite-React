import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

//costum
import { HeroSection } from "../../components/cards";

//icons
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
} from "../../assets/icons";
import {
  LinkedinStay,
  FacebookStay,
  TwitterStay,
  YoutubeStay,
  LetterStay,
} from "../../assets/icons";

//utils
import { sizem } from "../../utils/breakpoints";
import YellowButton from "../../components/buttons/YellowButton";
import { useDocumentTitle } from "../../hook";

const DigitalInsighthPodcast = () => {
  const { state } = useLocation();

  const PageContainer = styled.div`
    .textCategory {
      color: #0085ca;
    }

    h6 img {
      width: 13px;
      color: #0085ca;
      margin: 0px 10px;
    }
    .link {
      font-size: 14px;
      :hover {
        color: #0085ca;
        /* background-color: #0085ca; */
      }
    }
    .link img {
      font-size: 12px;
      border-radius: 50%;
    }
    .leftSection {
      img {
        width: 32px;
      }
    }
    @media ${sizem.mdm} {
      .secondSection {
        text-align: center;
      }
      .link {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center !important;
      }
    }
    .podcastVideoContainer {
      width: 100%;
      height: 350px;
      display: flex;
      align-items: flex-end;
      justify-content: end;
      flex-direction: column;

      .button1 {
        width: 70px;
        height: 70px;
        background-color: var(--orange2);
      }
      .button2 {
        width: 50%;
        height: 50px;
        background-color: #d9d9d9;
        color: #000;
      }
      .button2:hover {
        background-color: var(--hover-blue);
        color: #fff;
      }
    }
    .button3 {
      width: 30%;
      height: 50px;
      background-color: var(--orange2);
      border: 0;
      color: #fff;
      border-radius: 5px;
      :hover {
        background-color: var(--hover-blue);
      }
    }
    .card {
      border: 1px solid #000;
      border-radius: 10px;
      padding: 5px 10px;
    }
    .link {
      text-decoration: none;
      color: #000;
      :hover {
        cursor: pointer;
        .image {
          cursor: pointer;
          background-color: var(--hover-blue);
          img {
            filter: grayscale(1) invert(1);
          }
          /* background-color: red; */
          /* background-color: var(--hover-blue); */
        }
        .textLinks {
          cursor: pointer;
          color: var(--hover-blue);
        }
      }
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: var(--gray3);

      /* border: 2px solid red; */
      img {
        width: 20px;
      }
    }

    .textLinks {
      :hover {
        cursor: pointer;
        color: var(--hover-blue);
      }
    }

    .leftSection {
      .iconContainer {
        height: 4.375rem;
        width: 4.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      img {
        width: 32px;
      }
    }
    .containerIcons {
      display: flex;
      position: absolute;
      /* flex-direction: column; */
      /* top: -1rem; */
      margin: 0px 0px 0px 330px;
      width: 16.375rem;
      .iconDiv {
        height: 4.375rem;
        width: 100%;

        background-color: #0085ca;
        justify-content: center;
        align-items: center;
        display: flex;
        font-size: 1.125rem;
        text-transform: uppercase;
        line-height: 4.375rem;
        color: #fff;
        /* margin-left: -20px; */
        /* border: 2px solid red; */
        cursor: pointer;
        :hover {
          cursor: pointer;
          background-color: yellow;
        }
      }
    }
    .menuIconActive {
      background-color: #0085ca;
      /* margin-right: 0px; */
    }
  `;
  const [toggle, setToggle] = useState(false);
  const [openedState, setOpenedState] = useState(
    Array.from(leftSectionIcons, () => false)
  );

  const handleDisplay = (index) => {
    setToggle(!toggle);

    if (!openedState[index]) {
      let arr = Array.from(leftSectionIcons, () => false);
      arr[index] = true;
      setOpenedState([...arr]);
    } else {
      setOpenedState(Array.from(leftSectionIcons, () => false));
    }
  };

  useDocumentTitle(`${state?.title}`);
  return (
    <PageContainer>
      <HeroSection
        backgroundUrl={state?.image}
        title={state?.title}
        pageTitleCenter={"PODCAST"}
      />
      <div className="container-fluid  bg-white  d-flex flex-direction-column">
        <div className="row pt-5 ">
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 border-end border-2  py-5">
            <div className="p-2"></div>
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 col-lg-1  d-flex pt-5 justify-content-center  ">
                {/*------------------------------------------------------------- LeftSectionIcons */}
                <div className="leftSection pt-3">
                  {leftSectionIcons.map((x, index) => (
                    <div
                      // className=""
                      key={index}
                      className={` iconContainer ${
                        openedState[index] && "menuIconActive"
                      }`}
                      onClick={() => {
                        handleDisplay(index);
                      }}
                    >
                      <div>{x.icon}</div>
                      {openedState[index] && (
                        <span className="containerIcons">
                          {x?.children.map((icon, index) => (
                            <div
                              className="iconDiv"
                              style={{ backgroundColor: `${icon.color}` }}
                            >
                              {icon.icon || icon.text}
                            </div>
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className=" col-9 col-sm-10 col-md-10 col-lg-11">
                {/*---------------------------------------------------- SectionDescription */}
                <div>
                  <span className="text-muted text-italic">
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className=" podcastVideoContainer">
                  {/* <div className="btnContainer border w-50  d-block"></div> */}
                  <buton className="btn  button1" />
                  <button className="btn button2">View More Video</button>
                </div>
                {/*-------------------------------- TextContainer */}
                {[1, 2].map((x) => (
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore itaque perferendis provident ipsa et temporibus
                    aspernatur architecto quaerat. Recusandae saepe perferendis
                    quae temporibus iste excepturi eveniet debitis quidem
                    placeat eos.
                  </p>
                ))}

                <div>
                  <button className="button3">DOWNLOAD THE SCRIPT</button>
                </div>

                <div className="py-3">
                  <SubscribeSection
                    titleSection={"Subscribe"}
                    iconsArr={iconsArr}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*--------------------------------------------- FEATURED PROFILES  */}
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 border-2 pt-5 secondSection ">
            {/* -------------------------------------------------------Stay connnected */}
            <ListManagers
              titleSection={"Featured Profiles"}
              managers={managers}
            />
            <LinksList titleSection={"Stay Connected"} linkIcons={iconsArr1} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DigitalInsighthPodcast;

const managers = [
  {
    id: 1,
    name: "Name1",
    position: "position1",
  },
  {
    id: 2,
    name: "Name2",
    position: "position2",
  },
  {
    id: 3,
    name: "Name3",
    position: "position3",
  },
];

const iconsArr = [
  { id: 1, icon: <Facebook />, text: "Facebook" },
  {
    id: 2,
    icon: <LinkedIn />,
    text: "Linkedin",
  },
  {
    id: 3,
    icon: <Twitter />,
    text: "Twitter",
  },
  {
    id: 3,
    icon: <YouTube />,
    text: "YouTube",
  },
];
const iconsArr1 = [
  {
    id: 1,
    icon: <FacebookStay />,
    text: "Facebook",
    link: "https://www.facebook.com/alvarezandmarsal",
  },
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

const SubscribeSection = ({ titleSection, iconsArr }) => {
  return (
    <>
      <h4 className="fw-bold">{titleSection || ""} :</h4>
      <div className="d-flex w-100 pt-2 row ">
        {iconsArr.map((x) => (
          <div className="card col-lg-3 col-md-6">
            <div className="d-flex align-items-center  ">
              {/* <LinkedIn width="32px" height="32px" /> */}
              {x.icon}
              <div className="px-3">
                <span className="text-muted fs-6">Listen on</span>
                <br />
                <span className="  fs-4 lh-1">{x?.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const ListManagers = ({ titleSection, managers }) => {
  return (
    <>
      <div className="">
        <h3 className="text-align-center">{titleSection || ""}</h3>{" "}
      </div>
      <div className="managers">
        {managers.map((x) => (
          <div className="manager d-flex flex-column py-3">
            <span>{x.name}</span>
            <span className="text-muted">{x?.position}</span>
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
        {linkIcons?.map((x, index) => (
          <a
            className="link  py-2 d-flex justify-content-between "
            key={index}
            href={x?.link}
            target="_blank"
          >
            {console.log(x)}
            <div className="image  col-md-2 col-lg-2 ">{x?.icon}</div>
            <div className=" col-md-9 col-lg-9 align-items-center d-flex px-sm-2 ">
              <span className="textLinks">Join A&M on {x?.text} </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

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
