import React, { useState } from "react";
import {
  HeroSection,
  ProfessionalsCardSmall,
  CarouselSection,
  DetailedProfessionalsCard,
  CardProfessionals,
} from "../../components/cards";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { leadersList, arr } from "../../utils/data";

const LeaadersContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  position: relative;

  div {
    /* max-width: 600px; */
  }
`;

const Leadership = () => {
  const [openedState, setOpenedState] = useState(
    Array.from(leadersList, () => false)
  );

  const handleDisplay = (index) => {
    console.log("this is the index", index);
    if (!openedState[index]) {
      let arr = Array.from(leadersList, () => false);
      arr[index] = true;
      setOpenedState([...arr]);
    } else {
      setOpenedState(Array.from(leadersList, () => false));
    }
  };

  return (
    <>
      <HeroSection title={"helthcare & live sciences leaders"} />

      <h4 className="m-4 fw-bold">LEADERS</h4>
      {/* <div>Hello</div> */}
      <div
        className="m-4"
        style={{
          position: "relative",
        }}
      >
        <LeaadersContainer>
          {leadersList.map((cardInfo, index) => {
            return (
              <ProfessionalsCardSmall
                key={index}
                cardInfo={cardInfo}
                index={index}
                openedState={openedState}
                handleDisplay={handleDisplay}
                showDetails={openedState[index]}
              />
            );
          })}
        </LeaadersContainer>
      </div>

      <CarouselSection
        categoryCarousel={"Healthcare & Live Sciences News"}
        backgroundColor="#002B49"
        arr={arr}
        titleColor="#0085CA"
        textColor="#fff"
        textDate="#FFF"
        carouselDotBackground="#002b49"
      />
    </>
  );
};

export default Leadership;
