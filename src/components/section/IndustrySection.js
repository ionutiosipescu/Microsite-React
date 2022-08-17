import React from "react"
import styled from "styled-components"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import { sizem } from "../../utils/breakpoints"
import { useNavigate } from "react-router"

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

  .infoContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* margin: auto; */
    /* padding: 0px 40px; */
  }
  .industry {
    padding-top: 30px;
    h2 {
      color: var(--darkBlueHome);
      font-size: 1.5em;
      font-weight: bold;
      padding: 0;
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
        <div className="infoContainer ">
          {industries?.map((industry, index) => (
            <div
              className="industry col-lg-5 col-md-10 col-sm-10 col-10"
              key={index}
            >
              <div className="body">
                <h2
                  onClick={() =>
                    navigate(`/industry/${industry.name.toLowerCase()}`, {
                      state: industry.id,
                    })
                  }
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
        </div>
      </div>
    </IndustrySectionContainer>
  )
}

export default IndustrySection
