import React, { useState, useRef, useEffect } from "react";
import {
  XIcon,
  Twitter,
  IconTriangle,
  ChevronRightBlue,
} from "../../assets/icons";
import YellowButton from "../buttons/YellowButton";
import Connor from "../../assets/images/ConnorWine";
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
} from "./styles/DetailedProfessionalsCard.styles";

const DetailedProfessionalsCard = ({
  content,
  handleDisplay,
  index,
  setMargin,
  showDetails,
}) => {
  const [display, setDisplay] = useState("none");
  const [borderBottom, setBorderBottom] = useState(true);
  const detailedCard = useRef(null);

  useEffect(() => {
    if (showDetails) {
      setMargin(detailedCard.current.clientHeight);
    }
  });

  const handleClick = () => {
    if (display === "none") {
      setDisplay("initial");
    } else {
      setDisplay("none");
    }

    setBorderBottom(!borderBottom);
  };

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
              <img src={Connor}></img>
              <YellowButton text="Connect" radius={"0"} />
            </ImageContainer>
            <Content>
              <h4>{content?.name}</h4>
              <p className="text-muted">{content?.position}</p>
              <DescriptionDesktop>
                <p>{content?.description}</p>
              </DescriptionDesktop>
              <a className="fw-bold text-reset">Read More</a>
            </Content>
          </Header>

          <Info>
            <ContainerMobile>
              <YellowButton text={"connect"} width={"100%"} />
              <div>{content?.description}</div>
            </ContainerMobile>

            <ContactInfo onClick={handleClick} borderBottom={borderBottom}>
              {"contact info"}
            </ContactInfo>
            <Dropdown display={display}>
              <PersonalInfo title="locaton" content={content?.country} />
              <PersonalInfo title="email" content={content?.mail} />
              <PersonalInfo title="telephone" content={content?.phone} />
              <PersonalInfo title="twitter" content={content?.twitter} />
              <PersonalInfo title="connect on" content={content?.LinkedIn} />
            </Dropdown>
          </Info>
        </CardBody>
      </Card>
    </>
  );
};

export default DetailedProfessionalsCard;
