import React from "react"
import Connor from "../../assets/images/ConnorWine"
import styled from "styled-components"
import { size } from "../../utils/breakpoints"
import { ChevronRightWhite } from "../../assets/icons"

const Card = styled.div`
  display: flex;
  background: var(--gray6);
  width: 100%;
  height: auto;
  margin: 20px 0;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    transition: background-color 0.2s ease-out;
  }
`

const ImageContainer = styled.div`
  background: gray;
  img {
    width: 64px;
    height: 130px;
    object-fit: cover;
  }
`

const Content = styled.div`
  padding: 20px;
  text-transform: uppercase;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${size.lg} {
    padding: 0 20px;
    justify-content: start;
  }
`

const ArrowContainer = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  align-items: center;
  background: var(--darkBlue2);

  :hover {
    background: var(--hover-blue);
  }

  @media ${size.lg} {
    display: none;
  }
`

const Name = styled.a`
  color: var(--darkBlue2);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;

  cursor: pointer;

  padding-top: 20px;

  :hover {
    color: var(--darkBlue2);
  }
  @media ${size.lg} {
    font-size: 20px;
  }
`
const Position = styled.p`
  color: var(--hover-blue);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  padding: 8px 0;

  @media ${size.lg} {
    font-size: 0.813rem;
    padding: 2px 0;
  }
`

const Info = styled.a`
  color: var(--hover-blue);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;

  :hover {
    color: var(--hover-blue);
  }

  @media ${size.lg} {
    font-size: 0.813rem;
  }
`
const ButtonAni = styled.div``

const ProfessionalCardSmall = ({ name, imageSrc, position, country }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={imageSrc || Connor} alt="portrait"></img>
      </ImageContainer>

      <CardBody>
        <Content>
          <Name>{name || "Connor Colquhoun"}</Name>
          <Position>{position || "wine connoisseur"}</Position>
          <Info>{country} </Info>
        </Content>
      </CardBody>
      <ArrowContainer>
        <ChevronRightWhite />
      </ArrowContainer>
    </Card>
  )
}

export default ProfessionalCardSmall
