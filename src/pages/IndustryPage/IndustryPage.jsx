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
import {
  ContainerContent,
  FullWidthContainer,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import ExpertiseSection from "../../components/section/ExpertiseSection"
import { expertiseData } from "../../utils/data"
import ArticlesSection from "../../components/section/ArticlesSection"
// import CardProfessionalsNew from "../../components/cards/CardProfessionalsNew"
import { sizem } from "../../utils/breakpoints"

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
      <ContainerContent>
        <IndustryContainer>
          <div className=" d-lg-flex  ">
            <div className=" col-11 col-lg-8 ">
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

            <div className="expertsContainer col-11 col-lg-4 ">
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
              <div className="w-100">
                <SocialsCard />
                <ContactSubscribeCard />
              </div>
            </div>
          </div>
        </IndustryContainer>
      </ContainerContent>
      <FullWidthContainer bgColor={"var(--graySections)"}>
        <ContainerContent>
          <ArticlesSection />
        </ContainerContent>
      </FullWidthContainer>
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
    @media ${sizem.mdm} {
      padding: 0;
      margin: 0;
    }
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
