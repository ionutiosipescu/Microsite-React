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
  setMargin,
  showDetails,
}) => {
  const [display, setDisplay] = useState("none")
  const [borderBottom, setBorderBottom] = useState(true)
  const [smallLeaderDescription, setSmallLeaderDescription] = useState(true)
  const detailedCard = useRef(null)

  useEffect(() => {
    if (showDetails) {
      setMargin(detailedCard.current.clientHeight)
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
      <ImageTriangleContainer>
        <IconTriangle className="imgTriangle" />
      </ImageTriangleContainer>
      <Card ref={detailedCard}>
        <div className="d-flex">
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
              <ButtonWithAnimation
                text={"connect"}
                width={"100%"}
                onClick={() => {
                  window.location.replace(content.linkOurPeople)
                }}
              />
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
          </Header>

          <Info>
            <ContainerMobile>
              <div>{content?.smallDescription}</div>
            </ContainerMobile>

            <ContactInfo onClick={handleClick} borderBottom={borderBottom}>
              {"contact info"}
            </ContactInfo>
            <Dropdown display={display}>
              <PersonalInfo
                title="location"
                content={content?.country?.name}
                onClick={() => {
                  window.open(content?.linkLocation, "_blank")
                }}
              />
              <PersonalInfo title="email" content={content?.email?.title} />
              <PersonalInfo title="telephone" content={content?.phone} />
              <PersonalInfo title="twitter" content={content?.twitter.title} />
              <PersonalInfo
                title="connect on"
                content={content?.linkedin?.title}
                onClick={() => {
                  window.open(content?.linkedin.uri, "_blank")
                }}
              />
            </Dropdown>
          </Info>
        </CardBody>
      </Card>
    </>
  )
}

export default DetailedProfessionalsCard
