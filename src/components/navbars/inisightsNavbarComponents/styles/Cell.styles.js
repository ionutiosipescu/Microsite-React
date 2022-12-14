import styled from "styled-components/macro"
import { size } from "../../../../utils/breakpoints"

export const NavbarCell = styled.div`
  /* border: 2px solid green; */
  display: flex;
  align-items: center;

  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 1.5rem;

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* If the the Filter is selected then hightligh otherwise have normal color */
  color: ${({ highlight }) =>
    highlight ? "var(--highlightColor)" : `var(--textColor)`};

  :hover {
    color: var(--highlightColor);
  }

  svg {
    transition: all 0.2s ease-in-out;
    fill: var(--textColor);
    padding-left: 0.5rem;
    width: 2rem;
    height: rem;
  }

  :hover {
    color: var(--highlightColor);
    svg {
      fill: var(--highlightColor);
      /* transform: rotate(180deg);
      padding-right: 0.5rem;
      padding-left: 0; */
    }
  }

  @media ${size.md} {
    display: ${({ onlyMobile }) => (onlyMobile ? "none" : "initial")};
  }
`
