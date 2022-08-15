import React from "react";
import Connor from "../../assets/images/ConnorWine";
import styled from "styled-components";
import YellowButton from "../buttons/YellowButton";
import { size } from "../../utils/breakpoints";
import { ChevronRightWhite } from "../../assets/icons";
import { Navigate } from "react-router";

const Card = styled.div`
  display: flex;
  background: var(--darkBlue);
  width: 100%;
  height: 250px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    transition: background-color 0.2s ease-out;
  }

  button:hover {
    background-color: var(--hover-blue);
    border-color: var(--hover-blue);
  }

  @media ${size.lg} {
    button {
      display: block;
    }
  }

  @media ${size.lg} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  background: gray;
  /* flex: 1; */

  img {
    width: 170px;
    height: 100%;
    object-fit: cover;
    object-position: right;
    @media ${size.sm} {
      img {
        width: 125px;
      }
    }

    @media ${size.md} {
      img {
        width: 170px;
      }
    }
  }
`;

const Content = styled.div`
  padding: 20px;
  text-transform: uppercase;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${size.lg} {
    padding: 0 20px;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  align-items: center;

  :hover {
    background: var(--hover-blue);
  }

  @media ${size.lg} {
    display: none;
  }
`;

const Name = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.575rem;
  font-weight: bold;
  line-height: 1.2;
  padding-bottom: 5px;
  cursor: pointer;

  padding-top: 20px;

  :hover {
    color: var(--hover-blue);
  }
`;
const Position = styled.p`
  color: var(--orange2);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  padding: 10px 0px;
`;

const Info = styled.a`
  color: var(--orange2);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.25;
  cursor: pointer;

  :hover {
    color: var(--hover-blue);
  }
`;

const CardProfessionals = ({
  name,
  imageSrc,
  position,
  country,
  country1,
  buttonText,
  link,
}) => {
  return (
    <Card style={{}}>
      <ImageContainer>
        <img
          src={imageSrc}
          alt="portrait"
          // style={{ width: "00px", height: "200px" }}
        ></img>
      </ImageContainer>

      <CardBody>
        <Content>
          <Name>{name || "Connor Colquhoun"}</Name>
          <Position>{position || "wine connoisseur"}</Position>
          <Info>{country} </Info>
          <Info>{country1} </Info>
        </Content>
        {buttonText && (
          <YellowButton
            text={buttonText}
            radius={"0"}
            height={"50px"}
            display={"none"}
            onClick={() => {
              window.open(link, "_blank");
            }}
          />
        )}
      </CardBody>
      <ArrowContainer>
        <ChevronRightWhite />
      </ArrowContainer>
    </Card>
  );
};

export default CardProfessionals;
