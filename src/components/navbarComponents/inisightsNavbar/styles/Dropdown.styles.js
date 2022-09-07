import styled from "styled-components/macro"
import { size } from "../../../../utils/breakpoints"

export const TimedropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const MonthsContainer = styled.div``

export const DropdownContainer = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  flex-wrap: wrap;

  @media ${size.md} {
    position: absolute;
    max-width: 500px;
  }

  @media ${size.lg} {
    max-width: 700px;
  }
`

export const Container = styled.div`
  @media ${size.md} {
    margin-bottom: ${({ margin }) => (margin ? `${margin}px` : "80px")};
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${size.md} {
  }
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
