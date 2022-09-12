import styled from "styled-components/macro"
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
  padding: 3rem 5rem;

  @media ${sizem.mdm} {
    padding: 2rem 2rem;
  }
`

export const ContainerContent = styled.div`
  padding: 0;

  @media ${sizem.md} {
    padding: 0;
  }
  @media ${sizem.smm} {
    padding: 0;
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
  @media ${sizem.smm} {
    padding: 0 10px;
  }
`
export const ContainerLocation = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1fr);
  justify-items: start;

  @media ${size.lg} {
    grid-template-columns: repeat(3, 1fr);
    /* justify-items: center; */
  }
`
export const IndustryContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px 0 0;
  @media ${size.lg} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${size.xl} {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media ${size.xxl} {
    padding-left: 120px;
    padding-right: 120px;
  }
  @media screen and (min-width: 1800px) {
    .container-left {
      width: 75%;
    }
    .container-right {
      width: 25%;
    }
  }
  @media screen and (min-width: 2350px) {
    .container-left {
      width: 83.33333333%;
    }
    .container-right {
      width: 16.66666667%;
    }
  }
  .expertsContainer {
    margin-left: 0;
    padding-right: 0;
    @media ${sizem.mdm} {
      padding: 0;
      margin: 0;
    }
  }

  .descriptionContainer {
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--hover-blue);
    ul {
      padding-left: 0;
    }
  }
`
