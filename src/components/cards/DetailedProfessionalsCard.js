import React, { useState, useRef, useEffect } from "react"
import { XIcon, IconTriangle } from "../../assets/icons"

import { ButtonWithAnimation } from "../buttons"
import Connor from "../../assets/images/ConnorWine"
import {
  Card,
  Header,
  Info,
  ContainerMobile,
  ContactInfo,
  Dropdown,
  PersonalInfo,
  XContainer,
  CardBody,
  ImageContainer,
  ImageTriangleContainer,
  Content,
  DescriptionDesktop,
} from "./styles/DetailedProfessionalsCard.styles"
import DOMPurify from "dompurify"
const DetailedProfessionalsCard = ({
  content,
  handleDisplay,
  index,
  setPadding,
  showDetails,
}) => {
  const [display, setDisplay] = useState("none")
  const [borderBottom, setBorderBottom] = useState(true)
  const [smallLeaderDescription, setSmallLeaderDescription] = useState(true)
  const detailedCard = useRef(null)

  useEffect(() => {
    if (showDetails) {
      setPadding(detailedCard.current.clientHeight)
    }
  })

  const handleClick = () => {
    if (display === "none") {
      setDisplay("initial")
    } else {
      setDisplay("none")
    }

    setBorderBottom(!borderBottom)

    console.log(content)
  }
  return (
    <>
      <Card ref={detailedCard}>
        <ImageTriangleContainer>
          {/* <IconTriangle className="imgTriangle" /> */}
        </ImageTriangleContainer>
        <div className="d-flex xicon">
          <XContainer onClick={() => handleDisplay(index)}>
            <XIcon className={"x-icon"} />
          </XContainer>
        </div>

        <CardBody>
          <Header>
            <ImageContainer>
              <img src={content?.image}></img>
              {/* <ButtonWithAnimation
                text="Connect"
                radius={"0"}
                onClick={() => {
                  window.open(content.linkOurPeople, "_blank")
                }}
              /> */}
            </ImageContainer>
          </Header>
          <Content>
            <div>
              <h4>{content?.name}</h4>
              <h6>Managing director</h6>
              <p className="text-muted">{content?.position}</p>

              <DescriptionDesktop>
                {smallLeaderDescription ? (
                  <p>{content?.smallDescription}</p>
                ) : (
                  <div
                    className="container pt-3 text-decoration-none"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(content?.allDescription),
                    }}
                  ></div>
                )}
              </DescriptionDesktop>
            </div>
            <div id="button-leaders">
              <ButtonWithAnimation
                text={"connect"}
                width={"100%"}
                onClick={() => {
                  window.location.replace(content.linkOurPeople)
                }}
              />
            </div>
            {/* <a
                className="fw-bold text-reset"
                // onClick={() =>
                //   setSmallLeaderDescription(!smallLeaderDescription)
                // }
                target="_blank"
                href={content?.linkOurPeople}
              >
                Read More
              </a> */}
          </Content>
          <Info>
            <ContainerMobile>
              <div>{content?.smallDescription}</div>
            </ContainerMobile>

            <ContactInfo onClick={handleClick} borderBottom={borderBottom}>
              {"contact info"}
            </ContactInfo>
            <Dropdown display={display}>
              <PersonalInfo
                content={content?.country?.name}
                onClick={() => {
                  window.open(content?.linkLocation, "_blank")
                }}
              />
              <PersonalInfo content={content?.email?.title} />
              <PersonalInfo content={content?.phone} />
              <PersonalInfo content={content?.twitter.title} />
              <PersonalInfo content={content?.email?.title} />
              {/* <PersonalInfo
                
                content={content?.linkedin?.title}
                onClick={() => {
                  window.open(content?.linkedin.uri, "_blank")
                }}
              /> */}
            </Dropdown>
          </Info>
        </CardBody>
      </Card>
    </>
  )
}

export default DetailedProfessionalsCard
