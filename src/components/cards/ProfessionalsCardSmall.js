import React, { useEffect, useState } from "react";
import connor from "../../assets/images/ConnorWine";
import DetailedProfessionalsCard from "./DetailedProfessionalsCard";
import {
  Container,
  Card,
  ImageContainer,
  CardBody,
  Content,
} from "./styles/ProfessionalsCardSmall.styles";

const ProfessionalsCardSmall = ({
  cardInfo,
  index,
  handleDisplay,
  showDetails,
  className,
}) => {
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    if (!showDetails) {
      setMargin(0);
    }
  }, [showDetails]);

  return (
    <Container margin={margin} className="">
      <Card onClick={() => handleDisplay(index)}>
        <ImageContainer>
          <img src={cardInfo?.image} alt="portrait"></img>
        </ImageContainer>

        <CardBody>
          <Content>
            <h5>{cardInfo?.name}</h5>
            {/* <h5>{cardInfo?.firstName}</h5>
            <h5>{cardInfo?.lastName}</h5> */}
            <div className="pt-2">
              <div>{cardInfo?.position}</div>
              {/* <div>{cardInfo?.country} </div> */}
            </div>
          </Content>
        </CardBody>
      </Card>
      {showDetails && (
        <DetailedProfessionalsCard
          content={cardInfo}
          index={index}
          handleDisplay={handleDisplay}
          setMargin={setMargin}
          showDetails={showDetails}
        />
      )}
    </Container>
  );
};

export default ProfessionalsCardSmall;
