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

import { TriangleSVG } from "../../assets/icons"
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
      <ImageTriangleContainer>
        <TriangleSVG />
      </ImageTriangleContainer>
      <Card ref={detailedCard} display={display}>
        <div className="d-flex xicon">
          <XContainer onClick={() => handleDisplay(index)}>
            <XIcon className={"x-icon"} />
          </XContainer>
        </div>

        <CardBody>
          <Header>
            <ImageContainer>
              <img src={content?.image}></img>
            </ImageContainer>
            {console.log(content)}
          </Header>
          <Content>
            <div>
              <h4>{content?.name}</h4>
              <h6>{content?.position}</h6>
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
                link={content.linkOurPeople}
                onClick={() => {
                  window.location.replace(content.linkOurPeople)
                }}
              />
            </div>
          </Content>
          <Info>
            <ContainerMobile>
              <div>
                {window.innerWidth < "1000px"
                  ? content?.smallDescription
                  : content?.smallDescription.substr(0, 300)}
                {/* {content?.smallDescription} */}
              </div>
            </ContainerMobile>

            <ContactInfo onClick={handleClick} borderBottom={borderBottom}>
              {"contact info"}
            </ContactInfo>
            <Dropdown display={display}>
              <PersonalInfo
                title="location"
                content={content?.country.name}
                onClick={() => {
                  window.open(content?.linkLocation, "_blank")
                }}
              />

              <PersonalInfo title="email" content={content?.email} />
              <PersonalInfo title="telephone" content={content?.phone} />
              <PersonalInfo title="twitter" content={content?.twitter.title} />
              <PersonalInfo
                title="connect on"
                content={content?.linkedin.title}
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
