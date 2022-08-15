import React from "react";
import styled from "styled-components";
import YellowButton from "../buttons/YellowButton";

const Card = styled.div`
  background: var(--gray3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: flex-start;
  height: 400px;
  padding: 30px;

  span {
    display: block;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    font-size: 32px;
    font-weight: bold;
    line-height: 2.5rem;
    color: #000;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #666;
  }
  button {
    background-color: var(--orange3);
    padding: 0 1.5625rem;
    transition: background-color 0.2s ease-out;
    line-height: 2rem;
    font-size: 1rem;
  }
  button:hover {
    background-color: var(--hover-blue);
    border-color: var(--hover-blue);
  }
`;

const CareersInDigital = ({ textCareers }) => {
  return (
    <Card>
      <span>CAREERS IN BRAZIL</span>
      <p>{textCareers}</p>
      <YellowButton
        text="SEARCH AND APPLY"
        width={"auto"}
        height={"50px"}
        radius={"3px"}
      />
    </Card>
  );
};

export default CareersInDigital;
