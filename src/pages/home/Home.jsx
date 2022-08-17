import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import HeroSection from "../../components/cards/HeroSection"

import RecongnitionSection from "../../components/section/RecongnitionSection"
import ExpertiseSection from "../../components/section/ExpertiseSection"
import ArticlesSection from "../../components/section/ArticlesSection"
import { Spinner } from "../../components"
import { sizem } from "../../utils/breakpoints"

import styled from "styled-components"

import {
  fetchHLSHeroSection,
  fetchHLSIndustries,
} from "../../store/actions/hls/hlsHome"
import IndustrySection from "../../components/section/IndustrySection"

import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"

// import fake data
import { expertiseData } from "../../utils/data"

const ECMEA_HEALTCARE_ID = "c11b8f8f-9d3a-433a-949e-5518b9b24c25"

const Home = () => {
  const dispatch = useDispatch()
  const heroData = useSelector(state => state?.hlsHero?.heroSection)
  const industries = useSelector(state => state?.hlsHero?.industries)
  // console.log(industries);
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    dispatch(fetchHLSHeroSection(ECMEA_HEALTCARE_ID))
    dispatch(fetchHLSIndustries(ECMEA_HEALTCARE_ID))

    // dispatch(fetchHLSHeroSection(ECMEA_HEALTCARE_ID));
    // fetchHeroSectionDataHome(setHeroSectionData);
    // fetchRecentRecognition(setRecentRecognition);
    // fetchData(setCarouselData);
    // fetchHLSLeaders(setDataObj);
  }, [])

  const HomeContainer = styled.div`
    .heroContainer {
      margin: 0;
      padding: 0;
    }
  `
  console.log(industries)
  return (
    <HomeContainer>
      <HeroSection
        title={heroData?.title}
        backgroundUrl={heroData?.backgroundUrl}
        description={heroData?.description}
        buttonText="talk to us to learn more "
        height={450}
      />
      <StyledContainer>
        <ExpertiseSection expertises={expertiseData} />
        <IndustrySection industries={industries} />
        <RecongnitionSection arr={carouselData} />
      </StyledContainer>
      <ArticlesContainer>
        <StyledContainer>
          <ArticlesSection />
        </StyledContainer>
      </ArticlesContainer>
    </HomeContainer>
  )
}

export default Home
const route = {
  route: "HEALTH & LIFE INSIGHTS /",
  subRoute: " HEALTH & LIFE CASE STUDIES",
}
const ArticlesContainer = styled.div`
  width: 100%;
  background-color: var(--graySections);
  color: var(--darkBlueHome);
  /* background-color: #f2f2f2; */
`
