import React from "react";
import styled from "styled-components";
import QualityCard from "../cards/QualityCard";
import { expertiseData } from "../../utils/data";

const QualitiesSectionContainer = styled.div`
  // height: 700px;
  width: 100%;
  background-color: white;
`;
const Qualities = styled.div`
  width: 94%;
  height: 90%;
  background-color: #eeeeee;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const QualitiesSection = () => {
  return (
    <QualitiesSectionContainer>
      <Qualities>
        {expertiseData.map((quality, index) => (
          <QualityCard quality={quality} key={index} />
        ))}
      </Qualities>
    </QualitiesSectionContainer>
  );
};

export default QualitiesSection;
