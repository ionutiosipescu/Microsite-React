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
import styled from "styled-components/macro"
import { fetchExpertise } from "../../store/actions/hls/hlsHome"
import { useDispatch, useSelector } from "react-redux"
import UnalignedItemsContainer from "../../components/layout/UnalignedItemsContainer"
import { BorderBottom } from "../../components/cards/styles/ArticlePreviewCard.styles"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"
import ArticlesSection from "../../components/section/ArticlesSection"
import { IndustryContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"
import { ContainerContent } from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"

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

  span {
    color: var(--hover-blue);
    padding-right: 1rem;
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

  console.log("This is expertise", expertise.industries)

  return (
    <ExpertisePageContainer>
      <HeroSection
        height={360}
        pageCategory="Expertise"
        title={expertise?.name}
      />
      <ContainerContent>
        <IndustryContainer>
          <div className="d-lg-flex">
            <div className="col-12 col-lg-8 px-4 px-lg-0 container-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: expertise?.description ?? expertise?.teaser_text,
                }}
                className="descriptionContainer"
              />
              <UnalignedItemsContainer
                columnsNumber={expertise?.articles?.legnth}
              >
                {expertise?.articles?.map(article => (
                  <ServiceCard
                    title={article?.title}
                    conntent={article?.text_teaser}
                  />
                ))}
              </UnalignedItemsContainer>
              <BorderBottom color={"var(--hover-blue)"} className="my-3" />
              <div className="industrySection mt-4">
                <h3 className="fw-bold">Industries:</h3>
                {expertise?.industries?.map(expertiseIndustry => (
                  <span
                    key={expertiseIndustry?.id}
                    className="expertiseIndustry"
                  >
                    {expertiseIndustry?.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="expertsContainer col-12 col-lg-4  ps-lg-3 ps-xxl-5 container-right">
              {expertise?.experts?.map(expert => {
                let cardContent = {
                  imageSrc: expert?.image,
                  name: expert?.title,
                  position: expert?.profession_title,
                  country: expert?.global_location,
                  buttonText: "connect",
                }
                return <ProfessionalCard {...cardContent} />
              })}
              <div className="w-100">
                <SocialsCard />
                <ContactSubscribeCard />
              </div>
            </div>
          </div>
        </IndustryContainer>
      </ContainerContent>
      <ArticlesContainer>
        <StyledContainer>
          <ArticlesSection articles={expertise?.articles} />
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
`
