import styled from "styled-components/macro"
import { size } from "../../../../utils/breakpoints"

export const NavbarCell = styled.div`
  /* border: 2px solid green; */

  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--hover-blue);
  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 1.5rem;

  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: var(--hover-blue);

    :hover {
      color: var(--yellowCategory);
    }
  }
  span {
    font-size: 1.1rem;
  }

  svg {
    /* {dropdownOpened} */

    transition: all 0.2s ease-in-out;

    padding-left: 0.5rem;
    width: 2rem;
    height: rem;
    fill: ${props => props.iconColor || "#fff"};
  }

  :hover {
    color: var(--yellowCategory);
    svg {
      /* fill: var(--yellowCategory); */
      fill: ${props => props.iconColor || "var(--yellowCategory)"};

      /* transform: rotate(180deg);
      padding-right: 0.5rem;
      padding-left: 0; */
    }
  }

  @media ${size.md} {
    display: ${({ onlyMobile }) => (onlyMobile ? "none" : "initial")};
  }
`
