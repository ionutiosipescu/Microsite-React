import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { CardProfessionals, HeroSection } from "../../components/cards"
import { fetchIndustry } from "../../store/actions/hls/hlsHome"

import { ProfessionalsCardSmall } from "../../components/cards"

import styled from "styled-components"

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

      <IndustryContainer>
        <div className="row d-flex justify-content-between">
          <div className=" col-lg-9 border">
            <div
              dangerouslySetInnerHTML={{
                __html: industry?.description ?? industry?.teaser_text,
              }}
              className="descriptionContainer"
            />
            <ExpertiseContainer>
              <h2>Expertise</h2>
            </ExpertiseContainer>
          </div>

          <div className="expertsContainer col-lg-3 border">
            {industry?.experts?.map(
              (expert, index) => {
                let cardInfo = {
                  id: expert?.id,
                  image: expert?.image,
                  name: expert?.title,
                  position: expert?.profession_title,
                }
                return (
                  <ProfessionalsCardSmall cardInfo={cardInfo} key={index} />
                )
              }

              // <CardProfessionals />
            )}
          </div>
        </div>
      </IndustryContainer>
    </>
  )
}

export default IndustryPage

const IndustryContainer = styled.div`
  width: 90%;
  /* height: 200px; */
  border: 2px solid red;
  margin: auto;
  padding-top: 40px;
  .descriptionContainer {
    border-bottom: 3px solid var(--hover-blue);
  }
`
const ExpertiseContainer = styled.div`
  padding-top: 10px;
`
