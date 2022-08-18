import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import {
  HeroSection,
  ServiceCard,
  ProfessionalCard,
} from "../../components/cards"
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"
import { useDocumentTitle } from "../../hook"
import styled from "styled-components"
import { fetchExpertise } from "../../store/actions/hls/hlsHome"
import { useDispatch, useSelector } from "react-redux"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"
import { BorderBottom } from "../../components/cards/styles/ArticlePreviewCard.styles"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"
import ArticlesSection from "../../components/section/ArticlesSection"
const ExpertisePageContainer = styled.div`
  .leftSection {
    .expertiseIndustry {
      color: var(--hover-blue);
      padding-right: 1rem;
    }
  }
  .heroContainer {
    h1 {
      font-size: 80px;
      line-height: 80px;
      letter-spacing: 1px;
    }
  }
`

const ExpertisePage = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()

  const expertise = useSelector(state => state?.hlsHero?.expertise)

  useEffect(() => {
    dispatch(fetchExpertise(state))
  }, [state])

  useDocumentTitle(
    "Expertise | Pharma & MedTech Portfolio Management | Alvarez & Marsal"
  )
  console.log(expertise)
  return (
    <ExpertisePageContainer>
      <HeroSection
        height={300}
        pageCategory="Expertise"
        title={expertise?.name}
      />
      <StyledRow>
        <StyledCol1 className="leftSection">
          <div
            dangerouslySetInnerHTML={{
              __html: expertise?.description ?? expertise?.teaser_text,
            }}
            className="descriptionContainer"
          />

          <UnalignedItemsConainer columnsNumber={3}>
            {[1, 2, 3].map(() => (
              <ServiceCard
                title="Strategic Transformation"
                conntent={
                  "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
                }
              />
            ))}
          </UnalignedItemsConainer>
          <BorderBottom color={"var(--hover-blue)"} />
          <div className="industrySection mt-4">
            <h3 className="text-primary fw-bold">Industry:</h3>
            {expertise?.industries?.map(expertiseIndustry => (
              <span key={expertiseIndustry?.id} className="expertiseIndustry">
                {expertiseIndustry?.name}
              </span>
            ))}
          </div>
        </StyledCol1>
        <StyledCol2>
          {expertise?.experts?.map(expert => {
            let cardContent = {
              imageSrc: expert?.image,
              name: expert?.name,
              position: expert?.profession_title,
              country: expert?.global_location,
            }
            return <ProfessionalCard {...cardContent} />
          })}
        </StyledCol2>
      </StyledRow>
      <ArticlesContainer>
        <StyledContainer>
          <ArticlesSection />
        </StyledContainer>
      </ArticlesContainer>
    </ExpertisePageContainer>
  )
}

export default ExpertisePage
const ArticlesContainer = styled.div`
  width: 100%;
  background-color: var(--graySections);
  color: var(--darkBlueHome);
  /* background-color: #f2f2f2; */
`
