import styled from "styled-components"
import { size } from "../../../utils/breakpoints"

export const InsightsContainer = styled.div`
  & > :first-child {
    /* border: 1px solid black; */
    width: 33%;
  }

  & > :nth-child(2) {
    width: 33%;

    /* border: 1px solid green; */
  }

  & > :last-child {
    /* border: 1px solid red; */
    width: 33%;
  }

  @media ${size.md} {
    display: flex;
  }
`
