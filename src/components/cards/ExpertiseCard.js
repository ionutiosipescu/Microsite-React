import React from "react";
import { ButtonWithAnimation } from "../buttons";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  margin: 1rem 0;
  border-bottom: 1px solid var(--hover-blue);
  color: var(--darkBlue2);
  padding-bottom: 1rem;

  h3 {
    font-weight: bold;
  }
`;

const ExpertiseCard = ({ title, content, buttonText }) => {
  return (
    <Container>
      <h3>{title || "Title"}</h3>
      <p>{content || "content"}</p>
      <ButtonWithAnimation text={buttonText || "Read more"} />
    </Container>
  );
};

export default ExpertiseCard;
