import styled from "styled-components"
import { size } from "../../../utils/breakpoints"

export const Container = styled.div`
  @media ${size.lg} {
    display: flex;
    gap: 3rem;
  }
`

export const Article = styled.div``

export const RightSection = styled.div`
  @media ${size.lg} {
    width: 40%;
  }
`
