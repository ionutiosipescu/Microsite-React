import styled from "styled-components"
import { size, sizem } from "../../../utils/breakpoints"

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
  padding: 1rem;

  @media ${size.md} {
    padding: 3rem 4rem;
  }

  @media ${size.lg} {
    padding: 3rem 5rem;
  }
`
export const ContainerContent = styled.div`
  padding: 3rem 5rem;
  @media ${sizem.mdm} {
    padding: 2rem 4rem;
  }
`
export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor || "red"};
`

export const StyledContainerLocation = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 50px 10px;
`
export const ContainerLocation = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1fr);
  justify-items: center;
  @media ${size.lg} {
    grid-template-columns: repeat(3, 1fr);
    justify-items: unset;
  }
`
