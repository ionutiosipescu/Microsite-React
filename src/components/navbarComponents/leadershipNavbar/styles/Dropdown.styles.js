import styled from "styled-components"
import { size } from "../../../../utils/breakpoints"

export const DropdownContainer = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  flex-direction: column;

  li {
    padding-right: 1rem;
    color: var(--hover-blue);
    transition: all 0.2s ease-in-out;
    font-size: 1.2rem;
    text-transform: initial;

    :hover {
      color: var(--yellowCategory);
    }
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
