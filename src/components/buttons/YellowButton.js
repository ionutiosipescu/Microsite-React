import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: var(--orange1);
  color: white;

  border: none;
  transition: all 0.2s ease-in-out;

  text-transform: uppercase;
  padding: 15px 20px;

  border-radius: ${(props) => props.radius || "0px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "block"};

  :hover {
    background: var(--hover-blue);
  }
`;

const YellowButton = ({
  text,
  radius,
  width,
  height,
  display,

  onClick,
}) => {
  return (
    <Button
      radius={radius}
      width={width}
      height={height}
      display={display}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </Button>
  );
};

export default YellowButton;
