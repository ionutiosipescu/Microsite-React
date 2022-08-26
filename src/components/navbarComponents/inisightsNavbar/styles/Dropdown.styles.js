import styled from "styled-components"
import { size } from "../../../../utils/breakpoints"

export const DropdownContainer = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  flex-direction: column;

  @media ${size.md} {
    position: absolute;
    flex-direction: row;
    max-width: 300px;
  }
  @media ${size.lg} {
    max-width: 700px;
  }
`

export const Container = styled.div`
  @media ${size.lg} {
    margin-bottom: ${({ margin }) => (margin ? `${margin}px` : "80px")};
  }
`

export const FlexContainer = styled.div`
  display: flex;
`

export const DropdownItem = styled.li`
  padding-right: 1rem;
  color: ${({ highlight }) =>
    highlight ? "var(--yellowCategory)" : "var(--filtersBlue)"};

  transition: all 0.2s ease-in-out;
  font-size: 20px;
  text-transform: initial;

  :hover {
    color: var(--yellowCategory);
  }
`
