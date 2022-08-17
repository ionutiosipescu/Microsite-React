import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import {
  ArticlePreviewCard,
  CardProfessionals,
  HeroSection,
  SocialsCard,
} from "../../components/cards"
import { fetchIndustry } from "../../store/actions/hls/hlsHome"

import { ProfessionalCard, ContactSubscribeCard } from "../../components/cards"

import styled from "styled-components"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import ExpertiseSection from "../../components/section/ExpertiseSection"
import { expertiseData } from "../../utils/data"
import ArticlesSection from "../../components/section/ArticlesSection"
// import CardProfessionalsNew from "../../components/cards/CardProfessionalsNew"

const IndustryPage = () => {
  const { state } = useLocation()
  const dispatch = useDispatch()

  const industry = useSelector(state => state.hlsHero.industry)

  console.log(industry)
  console.log(state)
  useEffect(() => {
    dispatch(fetchIndustry(state))
  }, [dispatch, state])

  return (
    <>
      <HeroSection
        height={250}
        pageCategory={"Industry"}
        title={industry?.name}
      />
      <StyledContainer>
        <IndustryContainer>
          <div className=" d-flex ">
            <div className=" col-lg-8 ">
              <div
                dangerouslySetInnerHTML={{
                  __html: industry?.description ?? industry?.teaser_text,
                }}
                className="descriptionContainer"
              />
              <ExpertiseContainer>
                <ExpertiseSection expertises={expertiseData} />
              </ExpertiseContainer>
            </div>

            <div className="expertsContainer col-lg-4 ">
              {industry?.experts?.map((expert, index) => {
                return (
                  <ProfessionalCard
                    name={expert.name}
                    imageSrc={expert?.image}
                    position={expert?.profession_title}
                    country={expert?.global_location}
                    buttonText={"connect".toUpperCase()}
                  />
                )
              })}
              <SocialsCard />
              <ContactSubscribeCard />
            </div>
          </div>
        </IndustryContainer>
      </StyledContainer>
      <ArticlesContainer>
        <StyledContainer>
          <ArticlesSection />
        </StyledContainer>
      </ArticlesContainer>
    </>
  )
}

export default IndustryPage

const IndustryContainer = styled.div`
  width: 100%;
  /* height: 200px; */
  /* border: 2px solid red; */
  margin: auto;
  padding-top: 40px;
  .expertsContainer {
    margin-left: 5rem;
    padding-right: 5rem;
  }

  .descriptionContainer {
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--hover-blue);
  }
`
const ExpertiseContainer = styled.div`
  padding-top: 2rem;
  /* padding:0 1rem; */
`
const ArticlesContainer = styled.div`
  width: 100%;
  background-color: var(--graySections);
  color: var(--darkBlueHome);
  /* background-color: #f2f2f2; */
`
