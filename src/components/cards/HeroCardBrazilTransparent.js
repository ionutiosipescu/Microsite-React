import React from "react";
import styled from "styled-components";
import YellowButton from "../buttons/YellowButton";
import { size } from "../../utils/breakpoints";

const Card = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 420px;
  @media ${size.lg} {
    display: block;
  }
`;
const CardBody = styled.div`
  height: 100%;
  .card-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 42px;
    background-color: rgba(6, 25, 49, 0.6);
  }
  /* .card-container::before {
    content: "";
    background-color: #061931;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  } */
  p,
  button {
    color: #fff;
    position: relative;
    text-transform: none;
  }
  button {
    transition: background-color 0.2s ease-out;
    border: 0;
  }
  button:hover {
    background-color: var(--hover-blue);
  }
`;

const HeroCardBrazilTransparent = ({ display }) => {
  return (
    <Card display={display}>
      <CardBody>
        <div className="card-container">
          <p>
            Serving our Brazil Customers solve their operational, financial and
            regulatory challenges and provide turnaround management
          </p>
          <YellowButton
            text="CONTACT US"
            width={"auto"}
            height={"50px"}
            radius={"3px"}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default HeroCardBrazilTransparent;
