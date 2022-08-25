import styled from "styled-components"
import { size } from "../../../utils/breakpoints"





export const LeaadersContainer = styled.div`
  padding-top: 30px;
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1,1fr);
  @media ${size.md} {
      grid-template-columns: repeat(2,1fr);
  }
  @media ${size.lg} {
      grid-template-columns: repeat(3,1fr);
  }
  @media ${size.xl} {
      grid-template-columns: repeat(4,1fr);
  }

`