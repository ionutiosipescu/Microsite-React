import React from "react"
import styled from "styled-components/macro"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import { sizem } from "../../utils/breakpoints"
import { useNavigate } from "react-router"

import { ExpertiseCard } from "../cards"
import UnalignedItemsContainer from "../layout/UnalignedItemsContainer"

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
    }
  }
  .infoContainer {
    display: flex;
    flex-wrap: wrap;
  }
`

const ExpertiseSection = ({ expertises }) => {
  const navigate = useNavigate()
  return (
    <ExpertiseSectionContainer className="">
      <div className="grayContainer">
        <h2 className="">Expertise: </h2>

        <UnalignedItemsContainer columnsNumber={3}>
          {expertises?.map((expertise, index) => {
            let lastRowElements = expertises.length % 3
            if (lastRowElements == 0) {
              lastRowElements = 3
            }

            return (
              <ExpertiseCard
                key={index}
                name={expertise?.name}
                content={expertise?.description}
                index={index}
                className="expertise"
                onClick={() =>
                  navigate(`/expertise/${expertise?.name.toLowerCase()}`, {
                    state: expertise.id,
                  })
                }
              />
            )
          })}
        </UnalignedItemsContainer>
      </div>
    </ExpertiseSectionContainer>
  )
}

export default ExpertiseSection
