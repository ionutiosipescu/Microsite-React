import React, { useState } from "react";
import image from "../../assets/images/ConnorWine";
import styled from "styled-components";
import YellowButton from "../buttons/YellowButton";
import DetailedProfessionalsCard from "./DetailedProfessionalsCard";

const Container = styled.div`
  margin-bottom: ${(props) => (props.marginBottom ? "420px" : "0")};
`;

const Card = styled.div`
  display: flex;
  background: var(--darkBlue);
  max-width: 300px;

  /* margin-bottom: 4rem; */
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  background: gray;
  min-width: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 20px;
  text-transform: uppercase;
  color: var(--orange2);
  font-weight: bold;
  height: 100%;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h5 {
    padding: 0;
    margin: 0;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }

  div {
    font-size: 1rem;
  }
`;

const ProfessionalsCardSmall = ({
  card,
  buttonText,
  handleSelectedPerson,
  content,
  open,
  toggle,
  index,
}) => {
  const [hideDetailedCard, setHideDetailedCard] = useState(false);

  const handleClick = () => {
    setHideDetailedCard(!hideDetailedCard);
  };

  return (
    <Container marginBottom={open[index]}>
      <Card
        onClick={() => {
          toggle(index);
        }}
      >
        <ImageContainer>
          <img src={card?.imageSrc || image} alt="portrait"></img>
        </ImageContainer>

        <CardBody>
          <Content>
            <h5>{card?.name || "Connor Colquhoun"}</h5>
            <div>
              <div>{card?.position || "wine connoisseur"}</div>
              <div>{card?.country} </div>
            </div>
          </Content>
          {buttonText ? <YellowButton text={buttonText} radius={"0"} /> : ""}
        </CardBody>
      </Card>
      {open[index] ? (
        <DetailedProfessionalsCard content={card} className="" />
      ) : (
        ""
      )}
    </Container>
  );
};

export default ProfessionalsCardSmall;
