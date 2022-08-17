import React from "react"
import styled from "styled-components"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import { sizem } from "../../utils/breakpoints"
import { useNavigate } from "react-router"
import QualityCard from "../cards/QualityCard"
import { ExpertiseCard } from "../cards"

const ExpertiseSectionContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  font-family: "Helvetica Neue LT Std", sans-serif;
  /* border: 2px solid red; */
  .grayContainer {
    h2 {
      font-size: 1.5rem;
      /* margin-left: 3.5rem; */
      padding-bottom: 1rem;
    }
  }
  @media ${sizem.smm} {
    width: 100%;
    h2 {
      padding-top: 20px;
      /* padding-left: 30px; */
    }
  }

  .infoContainer {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }
  /* .expertise {
    padding-top: 40px;
    h3 {
      color: var(--darkBlueHome);
      font-size: 1.3rem;
      font-weight: bold;
    }
    p {
      color: var(--darkBlueHome);
      font-size: 0.9rem;
    }
  } */
`

const ExpertiseSection = ({ expertises }) => {
  const navigate = useNavigate()
  console.log(expertises)
  return (
    <ExpertiseSectionContainer className="">
      <div className="grayContainer">
        <h2 className="">Expertise: </h2>
        <div className="infoContainer ">
          {expertises?.map((expertise, index) => {
            let lastRowElements = expertises.length % 3
            if (lastRowElements == 0) {
              lastRowElements = 3
            }
            let borderIndex = expertises.length - index > lastRowElements
            // console.log(borderIndex)
            return (
              <ExpertiseCard
                title={expertise.title}
                content={expertise.description}
                index={index}
                border={borderIndex}
                className="expertise"
              />
            )
          })}
        </div>
      </div>
    </ExpertiseSectionContainer>
  )
}

export default ExpertiseSection
