import styled from "styled-components"
import { size } from "../../../../utils/breakpoints"

export const NavbarCell = styled.div`
  /* border: 2px solid green; */

  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--filtersBlue);
  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 1.5rem;

  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: var(--filtersBlue);
    :hover {
      color: var(--selectedFilter);
    }
  }

  svg {
    transition: all 0.2s ease-in-out;

    padding-left: 0.5rem;
    width: 2rem;
    height: rem;
  }

  :hover {
    color: var(--selectedFilter);
    svg {
      transform: rotate(180deg);
      padding-right: 0.5rem;
      padding-left: 0;
    }
  }

  @media ${size.md} {
    display: ${({ onlyMobile }) => (onlyMobile ? "none" : "initial")};
  }
`
