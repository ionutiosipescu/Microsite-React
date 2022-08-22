import styled from "styled-components"

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: ${props => props.marginTop || "9rem"};
  /* margin-top: ${({ dropdownHeight }) =>
    dropdownHeight ? `${dropdownHeight}px` : "0px"}; */
  /* padding: 1rem; */
`
