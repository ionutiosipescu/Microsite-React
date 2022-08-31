import React from "react"
import styled from "styled-components/macro"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import { sizem } from "../../utils/breakpoints"
import { useNavigate } from "react-router"
import UnalignedItemsConainer from "../layout/UnalignedItemsContainer"

const IndustrySectionContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  font-family: "Helvetica Neue LT Std", sans-serif;

  .grayContainer {
    width: 100%;
    height: 90%;
    background-color: #f2f2f2;
    padding-bottom: 20px;

    h2 {
      /* padding-top: 20px; */
      padding: 20px 40px;
    }
    @media ${sizem.smm} {
      width: 100%;
      h2 {
        padding-top: 20px;
        padding-left: 30px;
      }
    }
  }

  .industry {
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    h2 {
      color: var(--darkBlueHome);
      font-size: 1.5em;
      font-weight: bold;
      padding: 0;
      :hover {
        cursor: pointer;
      }
    }
    p {
      color: var(--darkBlueHome);
      font-size: 0.9rem;
    }
  }
`

const IndustrySection = ({ industries }) => {
  const navigate = useNavigate()
  return (
    <IndustrySectionContainer className="">
      <div className="grayContainer">
        <h2 className="">Industries: </h2>
        <UnalignedItemsConainer columnsNumber={2}>
          {industries?.map((industry, index) => (
            <div className="industry " key={index}>
              <div className="body">
                <h2
                  onClick={() => {
                    navigate(`/industry/${industry?.name?.toLowerCase()}`, {
                      state: {
                        inustryId: industry.id,
                        industryUUID: industry.uuid,
                      },
                    })
                  }}
                >
                  {industry?.name}
                </h2>
                <p>{industry?.description}</p>
              </div>

              <div className="buttonContainer">
                <ButtonWithAnimation />
              </div>
            </div>
          ))}
        </UnalignedItemsConainer>
      </div>
    </IndustrySectionContainer>
  )
}

export default IndustrySection
