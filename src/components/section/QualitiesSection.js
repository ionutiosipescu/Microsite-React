import React from "react";
import styled from "styled-components";
import QualityCard from "../cards/QualityCard";
import { arrQualities } from "../../data";

const QualitiesSectionContainer = styled.div`
  height: 700px;
  width: 100%;
  background-color: white;
`;
const Qualities = styled.div`
  width: 90%;
  height: 90%;
  background-color: #ebebeb;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const QualitiesSection = () => {
  return (
    <QualitiesSectionContainer>
      <Qualities>
        {arrQualities.map((quality) => (
          <QualityCard quality={quality} />
        ))}
      </Qualities>
    </QualitiesSectionContainer>
  );
};

export default QualitiesSection;
