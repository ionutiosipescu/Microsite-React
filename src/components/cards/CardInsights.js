import React from "react";
import styled from "styled-components";
import { ChevronRight } from "../../assets/icons";

const Card = styled.div`
  display: flex;
  display: flex;
  padding: 20px 0px;
  margin: 10px 25px;
  border-bottom: 2px solid var(--gray5);

  gap: 20px;
`;
const ImageContainer = styled.div`
  background: gray;
  width: 150px;
  // height: 150px;
  // flex: 1;

  img {
    width: 100%;
    // height: 100%;
    // object-fit: fill;
  }
`;
const CardBody = styled.div`
  flex: 5;
  padding: 10px 0px;
  h6 {
    color: var(--hover-blue);
    font-weight: bold;
    text-transform: uppercase;
  }
  h4 {
  }
  p {
    font-size: 14px;
  }
`;
const CardArrow = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 20px;
    width: 20px;
  }
`;
const CardContainer = styled.div`
  .accordion-item {
    border: none;
  }
  cursor: pointer;
`;

const CardInsights = ({ image, type, title, content, onClick }) => {
  return (
    <CardContainer
      onClick={() => {
        onClick();
      }}
    >
      <Card>
        <ImageContainer>
          <img src={image} alt="Insight photo" />
        </ImageContainer>

        <CardBody>
          <h6>{type}</h6>
          <h4>{title}</h4>
          <p className="text-muted">{content}</p>
        </CardBody>
        <CardArrow>
          <ChevronRight />
        </CardArrow>
      </Card>
    </CardContainer>
  );
};

export default CardInsights;
