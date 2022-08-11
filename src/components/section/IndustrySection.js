import React from "react";
import styled from "styled-components";

const IndustrySectionContainer = styled.div`
  h2 {
    color: var(--darkBlueHome);
    font-size: 24px;
    font-weight: bold;
  }
  p {
    color: var(--darkBlueHome);
    font-size: 13px;
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    color: #00244a;
    /* justify-content: center; */
  }
`;

const IndustrySection = ({ industries }) => {
  return (
    <IndustrySectionContainer className="fluid-container w-100 bg-white py-5">
      <div className="container d-flex justify-content-between">
        {industries.map((industry) => (
          <>
            <div className=" col-lg-3 px-3">
              <h2> {industry.name}</h2>
              <p>{industry.description}</p>
              <div className="buttonContainer">
                <button className="btn btn-primary "> READ MORE</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </IndustrySectionContainer>
  );
};

export default IndustrySection;
