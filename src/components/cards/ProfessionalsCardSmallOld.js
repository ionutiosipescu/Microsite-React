import React, { useEffect, useState } from "react"
import connor from "../../assets/images/ConnorWine"
import DetailedProfessionalsCard from "./DetailedProfessionalsCard"
// import DetailedProfessionalsCard from "./oldCarddetails"
import {
  Container,
  Card,
  ImageContainer,
  CardBody,
  Content,
} from "./styles/ProfessionalsCardSmall.styles"
import styled from "styled-components"
import { size } from "../../utils/breakpoints"
const ProfessionalsCardSmallOld = ({
  cardInfo,
  index,
  handleDisplay,
  showDetails,
}) => {
  const [padding, setPadding] = useState(0)

  useEffect(() => {
    if (!showDetails) {
      setPadding(0)
    }
  }, [showDetails])
  // console.log(cardInfo)
  return (
    <Container padding={padding} className="">
      <Card onClick={() => handleDisplay(index)}>
        <ImageContainer>
          <img src={cardInfo?.image} alt="portrait"></img>
        </ImageContainer>

        <CardBody>
          <Content>
            <Name>{cardInfo?.name}</Name>
            <Position>{cardInfo?.position}</Position>
            <Info>{cardInfo?.country.name}</Info>
          </Content>
        </CardBody>
      </Card>
      {showDetails && (
        <DetailedProfessionalsCard
          content={cardInfo}
          index={index}
          handleDisplay={handleDisplay}
          setPadding={setPadding}
          showDetails={showDetails}
        />
      )}
    </Container>
  )
}

export default ProfessionalsCardSmallOld

const Name = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4;

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
  line-height: 1.4;
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
  line-height: 1, 4;
  cursor: pointer;

  :hover {
    color: var(--hover-blue);
  }

  @media ${size.lg} {
    font-size: 0.813rem;
  }
`
