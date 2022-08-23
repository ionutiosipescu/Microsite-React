import styled from "styled-components"
import { size } from "../../../utils/breakpoints"

export const Container = styled.div`
  @media ${size.lg} {
    display: flex;
    gap: 3rem;
  }
`

export const Article = styled.div`
  /* flex: 0 0 50%; */
`

export const RightSection = styled.div`
  h3 {
    font-size: 1.875rem;
    color: var(--darkBlueHome);
    letter-spacing: 0;
  }
  @media ${size.lg} {
    width: 80%;
  }
`
