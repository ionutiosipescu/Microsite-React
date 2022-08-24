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

import { SocialsCard, ContactSubscribeCard } from "../../components/cards"
const ExpertisePageContainer = styled.div`
  .leftSection {
    .industrySection {
      h3 {
        color: #00244a;
      }
    }
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
  console.log(state)
  console.log(expertise)
  return (
    <ExpertisePageContainer>
      <HeroSection
        height={360}
        pageCategory="Expertise"
        title={expertise?.name}
      />
      <StyledContainer>
        <StyledRow>
          <StyledCol1 className="leftSection">
            <div
              dangerouslySetInnerHTML={{
                __html: expertise?.description ?? expertise?.teaser_text,
              }}
              className="descriptionContainer"
            />

            <UnalignedItemsConainer columnsNumber={expertise?.articles?.legnth}>
              {expertise?.articles?.map(article => (
                <ServiceCard
                  title={article?.title}
                  conntent={article?.text_teaser}
                />
              ))}
            </UnalignedItemsConainer>
            <BorderBottom color={"var(--hover-blue)"} className="my-3" />
            <div className="industrySection mt-4">
              <h3 className=" fw-bold">Industries:</h3>
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
            <div className="w-100">
              <SocialsCard />
              <ContactSubscribeCard />
            </div>
          </StyledCol2>
        </StyledRow>
        <ArticlesContainer>
          <StyledContainer>
            <ArticlesSection articles={expertise?.articles} />
          </StyledContainer>
        </ArticlesContainer>
      </StyledContainer>
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
