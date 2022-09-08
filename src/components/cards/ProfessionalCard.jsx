import React from "react"
import Connor from "../../assets/images/ConnorWine"
import styled from "styled-components/macro"
import { size } from "../../utils/breakpoints"
import { ChevronRightWhite } from "../../assets/icons"
import { ButtonWithAnimation } from "../buttons"

const Card = styled.div`
  display: flex;
  background: var(--darkBlue);
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .button-animation {
    display: none;
  }

  button {
    transition: background-color 0.2s ease-out;
    font-size: 0.5rem;
  }

  @media ${size.lg} {
    button {
      display: block;
    }
  }

  @media ${size.lg} {
    flex-direction: column;
    .button-animation {
      padding: 0 0 20px 20px;
      display: block;
    }
  }
`

const ImageContainer = styled.div`
  background: gray;
  img {
    width: 120px;
    height: 100%;
    object-fit: cover;
  }

  @media ${size.sm} {
    img {
      width: 125px;
    }
  }

  @media ${size.md} {
    img {
      width: 9.313rem;
    }
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
  :hover {
    background: var(--hover-blue);
  }

  @media ${size.lg} {
    display: none;
  }
`

const Name = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;
  cursor: pointer;
  padding-top: 20px;
  :hover {
    color: #ffffff;
  }

  @media ${size.lg} {
    font-size: 0.875rem;
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

const Info = styled.div`
  color: var(--hover-blue);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1;
  :hover {
    color: var(--hover-blue);
  }

  @media ${size.lg} {
    font-size: 0.813rem;
  }
`

const ProfessionalCard = ({
  name = "Connor Colquhoun",
  imageSrc = "wine connoisseur",
  position,
  country,
  buttonText,
  expertPageLink = null,
}) => {
  // const expertPageLink = `${process.env.REACT_APP_BASE_API_URL}/our-people/${expertPageLink}`

  return (
    <Card>
      <ImageContainer>
        <img src={imageSrc || Connor} alt="portrait"></img>
      </ImageContainer>

      <CardBody>
        <Content>
          <Name href={expertPageLink}>{name}</Name>
          <Position>{position}</Position>
          <Info>{country} </Info>
        </Content>
        <div className="button-animation">
          <ButtonWithAnimation text={buttonText} href={expertPageLink} />
        </div>
      </CardBody>
      <ArrowContainer>
        <ChevronRightWhite />
      </ArrowContainer>
    </Card>
  )
}

export default ProfessionalCard
