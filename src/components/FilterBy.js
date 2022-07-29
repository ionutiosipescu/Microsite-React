import React, { useState } from "react";
import styled from "styled-components";
import { XIcon, LetterIcon } from "../assets/icons";

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

  padding: 1rem;
  height: 100%;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  color: var(--gray4);

  :hover {
    cursor: pointer;
    background: var(--hover-blue);
    color: white;
  }
`;

const Tag = ({ tag, setFilterByTags, filterByTags }) => {
  const handleClick = () => {
    setFilterByTags(filterByTags.filter((item) => item !== tag));
  };

  return (
    <TagContainer onClick={handleClick}>
      <span>{tag}</span>
      <XIcon width={"20px"} />
    </TagContainer>
  );
};

const FilterBy = ({ filterByTags, setFilterByTags }) => {
  return (
    <Container arrLength={filterByTags.length !== 0}>
      {filterByTags.map((tag, index) => (
        <Tag
          key={index}
          tag={tag}
          setFilterByTags={setFilterByTags}
          filterByTags={filterByTags}
        />
      ))}
    </Container>
  );
};

export default FilterBy;
