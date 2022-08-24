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
import { size } from "../../utils/breakpoints"

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
        height={360}
        pageCategory={"Industry"}
        title={industry?.name}
      />
      <ContainerContent>
        <IndustryContainer>
          <div className=" d-lg-flex  ">
            <div className=" col-12 col-lg-8 px-4 px-lg-0 container-left">
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

            <div className="expertsContainer col-12 col-lg-4  ps-lg-3 ps-xxl-5 container-right">
              {industry?.experts?.map((expert, index) => {
                return (
                  <ProfessionalCard
                    id="professional-card-industries"
                    name={expert.name}
                    imageSrc={expert?.image}
                    position={expert?.profession_title}
                    country={expert?.global_location}
                    buttonText={"connect".toUpperCase()}
                  />
                )
              })}
              <div className="w-100">
                <SocialsCard className="socials-card-industries" />
                <ContactSubscribeCard />
              </div>
            </div>
          </div>
        </IndustryContainer>
      </ContainerContent>
      <FullWidthContainer
        bgColor={"var(--graySections)"}
        className="px-4 py-3 px-md-4"
      >
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
  padding: 40px 0 0;
  @media ${size.lg} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${size.xl} {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media ${size.xxl} {
    padding-left: 120px;
    padding-right: 120px;
  }
  @media screen and (min-width: 1800px) {
    .container-left {
      width: 75%;
    }
    .container-right {
      width: 25%;
    }
  }
  @media screen and (min-width: 2350px) {
    .container-left {
      width: 83.33333333%;
    }
    .container-right {
      width: 16.66666667%;
    }
  }
  .expertsContainer {
    margin-left: 0;
    padding-right: 0;
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
