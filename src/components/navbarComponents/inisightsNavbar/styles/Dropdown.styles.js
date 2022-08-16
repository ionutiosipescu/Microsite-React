import styled from "styled-components"
import { size } from "../../../../utils/breakpoints"

export const DropdownContainer = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  /* display: flex; */
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  flex-direction: column;

  /* border: 1px solid white; */

  li {
    /* border-right: 1px solid var(--hover-blue); */

    padding-right: 1rem;
    color: var(--filtersBlue);
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    text-transform: initial;

    :hover {
      color: var(--selectedFilter);
    }

    /* border: 2px solid yellow; */
  }

  @media ${size.md} {
    position: absolute;
    flex-direction: row;
    max-width: 300px;
  }
  @media ${size.lg} {
    max-width: 700px;
  }
`
