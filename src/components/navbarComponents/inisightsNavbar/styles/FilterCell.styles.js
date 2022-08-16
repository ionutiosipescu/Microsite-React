import styled from "styled-components"

export const FilterCell = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 0.25rem;
  font-size: 20px;
  color: var(--white);
  transition: all 0.2s ease-in-out;

  border: 1px solid var(--hover-blue);

  svg {
    transition: all 0.2s ease-in-out;

    fill: var(--hover-blue);
    margin-left: 0.5rem;
  }

  :hover {
    color: var(--selectedFilter);
    border: 1px solid var(--selectedFilter);

    svg {
      fill: var(--selectedFilter);
    }
  }
`
