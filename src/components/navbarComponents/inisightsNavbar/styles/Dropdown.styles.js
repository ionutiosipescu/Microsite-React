import styled from "styled-components"

export const DropdownContainer = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  /* display: flex; */
  flex-wrap: wrap;
  max-width: 400px;
  padding: 1rem 0;
  position: absolute;
  cursor: pointer;

  /* row-gap: 1rem;
  column-gap: 0; */

  border: 1px solid white;

  li {
    border-right: 1px solid var(--hover-blue);
    /* padding-right: 1rem; */
    padding: 0 1rem;
    margin: 0.25rem 0;
    color: var(--filtersBlue);
    transition: all 0.2s ease-in-out;

    :hover {
      color: var(--selectedFilter);
    }

    /* border: 2px solid yellow; */
  }
`
