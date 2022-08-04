import React, { useEffect } from "react";
import styled from "styled-components";
import { getInsights } from "../API/articles";
import { XIcon } from "../assets/icons";

const Container = styled.div`
  display: ${(props) => (props.arrLength ? "flex" : "none")};

  gap: 1rem;
  flex-wrap: wrap;
  min-height: 70px;
  background: var(--gray2);
  padding: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background: white;

  align-items: center;

  padding: 1rem;
  height: 100%;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  color: var(--gray4);

  svg {
    fill: var(--gray4);
    transition: all 0.2s ease-in-out;
  }

  :hover {
    cursor: pointer;
    background: var(--hover-blue);
    color: white;

    svg {
      fill: white;
    }
  }
`;

const Tag = ({ tag, setSelectedFilters, selectedFilters }) => {
  const handleClick = () => {
    setSelectedFilters(selectedFilters.filter((item) => item !== tag));
  };

  return (
    <TagContainer onClick={handleClick}>
      <span>{tag.name}</span>
      <XIcon />
    </TagContainer>
  );
};

const FilterBy = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <Container arrLength={selectedFilters.length !== 0}>
      {selectedFilters.map((tag, index) => (
        <Tag
          key={index}
          tag={tag}
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
        />
      ))}
    </Container>
  );
};

export default FilterBy;
