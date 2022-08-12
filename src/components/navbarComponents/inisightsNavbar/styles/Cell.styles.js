import styled from "styled-components"

export const NavbarCell = styled.span`
  border: 2px solid green;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--filtersBlue);

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
`
