import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  button {
    border-radius: 5px;
    border: none;
    width: auto;
    height: auto;
    padding: 0 1.875rem;
    line-height: 2.5rem;
    color: #000;
    background-color: #d9d9d9;
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    margin: 40px 0;
  }
  /* .firstlanguage:focus,
  .secondlanguage:focus {
    color: #fff;
    background-color: #0085ca !important;
    cursor: default;
  } */
  button:hover {
    color: #fff;
    background-color: #cf7f00;
  }
  .active {
    color: #fff;
    background-color: #0085ca;
  }
`;

const TranslateButton = ({ text1, text2 }) => {
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <ButtonContainer>
      <button
        autoFocus
        className={`firstlanguage ${!buttonActive ? "active" : ""}`}
        onClick={() => setButtonActive(!buttonActive)}
      >
        {text1}
      </button>
      <button
        className={`secondlanguage ${!buttonActive ? "" : "active"}`}
        onClick={() => setButtonActive(!buttonActive)}
      >
        {text2}
      </button>
    </ButtonContainer>
  );
};

export default TranslateButton;
