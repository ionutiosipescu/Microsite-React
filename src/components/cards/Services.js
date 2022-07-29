import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-bottom: 1px solid gray;
  margin: 1.5rem 0;

  h4 {
    font-weight: bold;
  }
  p {
    margin: 1rem 0;
  }
`;

const Services = ({ title, conntent }) => {
  return (
    <Card>
      <h4>{title}</h4>
      <p>{conntent}</p>
    </Card>
  );
};

export default Services;
