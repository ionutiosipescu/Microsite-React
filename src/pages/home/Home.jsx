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
  fetchHlsExpertises,
  fetchHLSHeroSection,
  fetchHLSIndustries,
  fetchInsightsArticles,
  fetchRecentRecognition,
} from "../../store/actions/hls/hlsHome"
import IndustrySection from "../../components/section/IndustrySection"

import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"

const ECMEA_HEALTCARE_ID = "c11b8f8f-9d3a-433a-949e-5518b9b24c25"

const Home = () => {
  const dispatch = useDispatch()
  const heroData = useSelector(state => state?.hlsHero?.heroSection)
  const industries = useSelector(state => state?.hlsHero?.industries)
  const expertises = useSelector(state => state?.hlsHero?.expertises)
  const insightsArticles = useSelector(
    state => state?.hlsHero?.insightsArticles
  )
  const recentRecognition = useSelector(
    state => state?.hlsHero?.recentRecognition
  )

  useEffect(() => {
    dispatch(fetchHLSHeroSection(ECMEA_HEALTCARE_ID))
    dispatch(fetchHLSIndustries(ECMEA_HEALTCARE_ID))
    dispatch(fetchInsightsArticles())
    dispatch(fetchRecentRecognition())
  }, [])

  const HomeContainer = styled.div`
    .heroContainer {
      margin: 0;
      padding: 0;
    }
  `

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
        <ExpertiseSection expertises={expertises} />
        <IndustrySection industries={industries} />
        <RecongnitionSection
          arr={recentRecognition}
          titleSection="Recent Recognition"
        />
      </StyledContainer>
      <ArticlesContainer>
        <StyledContainer>
          <ArticlesSection articles={insightsArticles.data} />
        </StyledContainer>
      </ArticlesContainer>{" "}
    </HomeContainer>
  )
}

export default Home

const ArticlesContainer = styled.div`
  width: 100%;
  background-color: var(--graySections);
  color: var(--darkBlueHome);
  /* background-color: #f2f2f2; */
`
