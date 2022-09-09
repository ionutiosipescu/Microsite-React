import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { HeroSection, SocialsCard } from "../../components/cards"
import {
  fetchIndustry,
  fetchIndustryArticles,
} from "../../store/actions/hls/hlsHome"
import { ProfessionalCard, ContactSubscribeCard } from "../../components/cards"
import styled from "styled-components/macro"
import {
  ContainerContent,
  FullWidthContainer,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import ExpertiseSection from "../../components/section/ExpertiseSection"
import ArticlesSection from "../../components/section/ArticlesSection"
import { IndustryContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { Spinner } from "../../components"

const IndustryPage = () => {
  const { state } = useLocation()
  const dispatch = useDispatch()

  const industry = useSelector(state => state.hlsHero.industry)
  const industryArticles = useSelector(state => state.hlsHero.industryArticles)

  useEffect(() => {
    dispatch(fetchIndustry(state?.industryId))
    dispatch(fetchIndustryArticles(state?.industryUUID))
  }, [dispatch, state])

  // console.log("This is industryArticles", industryArticles)
  // console.log("This is industry", industry)
  // console.log("This is state", state)
  // console.log(state[0])

  if (!industry && industryArticles.length > 0) {
    return <Spinner />
  }

  return (
    <>
      <HeroSection
        height={360}
        pageCategory={"Industry"}
        title={industry?.name}
      />
      <ContainerContent>
        <IndustryContainer>
          <div className="d-lg-flex  ">
            <div className="col-12 col-lg-8 px-4 px-lg-0 container-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: industry?.description ?? industry?.teaser_text,
                }}
                className="descriptionContainer"
              />
              <ExpertiseContainer>
                <ExpertiseSection expertises={industry?.expertises} />
              </ExpertiseContainer>
            </div>
            <div className="expertsContainer col-12 col-lg-4  ps-lg-3 ps-xxl-5 container-right">
              {industry?.experts?.map((expert, index) => {
                return (
                  <ProfessionalCard
                    key={index}
                    id="professional-card-industries"
                    name={expert.title}
                    imageSrc={expert?.image}
                    position={expert?.profession_title}
                    country={expert?.global_location}
                    buttonText={"connect"}
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
          <ArticlesSection articles={industryArticles} />
        </ContainerContent>
      </FullWidthContainer>
    </>
  )
}

export default IndustryPage

const ExpertiseContainer = styled.div`
  padding-top: 2rem;
  /* padding:0 1rem; */
`
