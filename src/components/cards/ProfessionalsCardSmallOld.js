import React, { useEffect, useState } from "react"
import connor from "../../assets/images/ConnorWine"
import DetailedProfessionalsCard from "./DetailedProfessionalsCard"
import {
  Container,
  Card,
  ImageContainer,
  CardBody,
  Content,
} from "./styles/ProfessionalsCardSmall.styles"

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
  console.log(cardInfo)
  return (
    <Container padding={padding} className="">
      <Card onClick={() => handleDisplay(index)}>
        <ImageContainer>
          <img src={cardInfo?.image} alt="portrait"></img>
        </ImageContainer>

        <CardBody>
          <Content>
            <h5>{cardInfo?.name}</h5>
            <div className="pt-2">
              <div>{cardInfo?.position}</div>
            </div>
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
