import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchHLSLeaders } from "../../API/leaders";
import {
  fetchHLSHeroSection,
  fetchHLSIndustries,
} from "../../store/actions/hls/hlsHome";
import IndustrySection from "../../components/section/IndustrySection";

const ECMEA_HEALTCARE_ID = "c11b8f8f-9d3a-433a-949e-5518b9b24c25";

const Home = () => {
  const dispatch = useDispatch();
  const heroData = useSelector((state) => state.hlsHero.heroSection);
  const industries = useSelector((state) => state.hlsHero.industries);
  console.log(industries);

  useEffect(() => {
    dispatch(fetchHLSHeroSection(ECMEA_HEALTCARE_ID));
    dispatch(fetchHLSIndustries(ECMEA_HEALTCARE_ID));
    // fetchHeroSectionDataHome(setHeroSectionData);
    // fetchRecentRecognition(setRecentRecognition);
    // fetchData(setCarouselData);
    // fetchHLSLeaders(setDataObj);
  }, []);

  const HomeContainer = styled.div`
    .heroContainer {
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <HomeContainer>
      {/* <div className="heroContainer"> */}
      <HeroSection
        title={heroData?.title}
        backgroundUrl={heroData?.backgroundUrl}
        description={heroData?.description}
        buttonText="CONTACT US"
        className=""
      />
      <IndustrySection industries={industries} />
    </HomeContainer>
  );
};

export default Home;
