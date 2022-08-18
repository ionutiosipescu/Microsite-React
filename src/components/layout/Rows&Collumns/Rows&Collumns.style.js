import styled from "styled-components"
import { size } from "../../../utils/breakpoints"

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;

  @media ${size.lg} {
    flex-direction: row;
  }
`

export const StyledCol1 = styled.div`
  flex: 1 0 68%;

  padding: 2rem;
`

export const StyledCol2 = styled.div`
  flex: 1 0 30%;
`

export const StyledContainer = styled.div`
  padding: 2rem;

  @media ${size.lg} {
    padding: 3rem 4rem;
  }
`
export const StyledContainerLocation = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 50px 10px;
`
export const ContainerLocation = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`
