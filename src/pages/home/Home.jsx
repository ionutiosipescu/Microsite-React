import React, { useState, useEffect } from "react";
import HeroSection from "../../components/cards/HeroSection";
import CarouselSection from "../../components/cards/CarouselSection";
import QualitiesSection from "../../components/section/QualitiesSection";
import RecongnitionSection from "../../components/section/RecongnitionSection";
import { Spinner } from "../../components";
import { sizem } from "../../utils/breakpoints";

import {
  fetchHeroSectionDataHome,
  fetchData,
  fetchRecentRecognition,
} from "../../API";
import styled from "styled-components";

const Home = () => {
  const [heroSectionData, setHeroSectionData] = useState();
  const [carouselData, setCarouselData] = useState([]);
  const [recentRecognition, setRecentRecognition] = useState([]);
  //   const [carouselData2, setCarouselData2] = useState([]);

  useEffect(() => {
    fetchHeroSectionDataHome(setHeroSectionData);
    fetchRecentRecognition(setRecentRecognition);
    fetchData(setCarouselData);
  }, []);

  const HomeContainer = styled.div`
    .heroContainer {
      button {
        border-radius: 3px;
      }
    }
  `;

  return (
    <HomeContainer>
      {/* <div className="heroContainer"> */}
      <HeroSection
        title={heroSectionData?.title}
        backgroundUrl={heroSectionData?.backgroundUrl}
        buttonText="CONTACT US"
        className="heroContainer"
      />
      {/* </div> */}

      {carouselData.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <CarouselSection
            categoryCarousel={carouselData?.block_one?.title}
            backgroundColor="white"
            arr={carouselData?.block_one?.data}
            titleColor="#0085CA"
            textColor="#000"
            textDate="#949494"
            carouselDotBackground="white"
          />
          <QualitiesSection />
          <RecongnitionSection
            arr={carouselData?.quotes}
            titleSection="Recent Recongnition"
          />
          <CarouselSection
            categoryCarousel={carouselData?.block_two?.title}
            backgroundColor="#002B49"
            arr={carouselData?.block_two?.data}
            titleColor="#0085CA"
            textColor="#fff"
            textDate="#FFF"
            carouselDotBackground="#002b49"
          />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
