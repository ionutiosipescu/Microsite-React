import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  height: 200px;
`;

const Spinner = () => {
  return (
    <SpinnerContainer className=" d-flex justify-content-center align-items-center ">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;
