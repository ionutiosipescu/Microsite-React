import styled from "styled-components"
import { sizem } from "../../../../utils/breakpoints"
export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: ${props => props.marginTop || "9rem"};
  @media ${sizem.smm} {
    /* border: 2px solid red; */
    display: block;
  }
  /* margin-top: ${({ dropdownHeight }) =>
    dropdownHeight ? `${dropdownHeight}px` : "0px"}; */
  /* padding: 1rem; */
`
