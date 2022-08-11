import React from "react";
import styled from "styled-components";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";

const IndustrySectionContainer = styled.div`
  padding: 20px;
  /* height: 650px; */
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  font-family: "Helvetica Neue LT Std", sans-serif;
  /* font-weight: 300; */
  .contentContainer {
    width: 90%;
    height: 90%;
    background-color: #f2f2f2;
    /* margin-bottom: 20px; */
    padding-bottom: 20px;
    /* padding: 20px; */
    h2 {
      padding-top: 20px;
      padding-left: 55px;

      /* padding: 20px 55px; */
    }
  }

  .infoContainer {
    display: flex;
    flex-wrap: wrap;
    /* border: 2px solid red; */

    justify-content: space-around;
  }
  .industry {
    padding-top: 40px;

    /* border: 2px solid red; */

    h2 {
      color: var(--darkBlueHome);
      font-size: 1.5em;
      font-weight: bold;
      padding: 0;
    }
    p {
      color: var(--darkBlueHome);
      font-size: 1rem;
    }
    /* width: 46%; */

    /* .body {
      min-height: 100px;
    } */
  }

  .buttonContainer {
    /* justify-content: center; */
  }
`;

const IndustrySection = ({ industries }) => {
  return (
    <IndustrySectionContainer className="">
      <div className="contentContainer">
        <h2 className="">Industries: </h2>
        <div className="infoContainer ">
          {industries.map((industry) => (
            <div className="industry col-lg-5 col-md-10 col-sm-10 col-10">
              <div className="body">
                <h2> {industry.name}</h2>
                <p>{industry.description}</p>
              </div>

              <div className="buttonContainer">
                <ButtonWithAnimation />
              </div>
            </div>
          ))}
        </div>
      </div>
    </IndustrySectionContainer>
  );
};

export default IndustrySection;
