import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import styled from "styled-components"
import { size } from "../../../utils/breakpoints"

export const InsightsContainer = styled.div`
  div {
    & > :last-child {
      border-bottom: none;
    }
  }

  @media ${size.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
    /* grid-template-columns: repeat(auto-fit, minmax(33%, 1fr)); */
    /* display: flex; */
  }
`
