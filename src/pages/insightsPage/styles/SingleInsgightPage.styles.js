import styled from "styled-components/macro"
import { size } from "../../../utils/breakpoints"

export const Container = styled.div`
  @media ${size.lg} {
    display: flex;
    gap: 3rem;
  }
`

export const Article = styled.div`
  width: 75%;
`

export const RightSection = styled.div`
  h3 {
    font-size: 1.875rem;
    color: var(--darkBlueHome);
    letter-spacing: 0;
  }
  @media ${size.lg} {
    width: 25%;
  }
`
