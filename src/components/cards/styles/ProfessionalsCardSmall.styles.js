import styled from "styled-components"
import { size } from "../../../utils/breakpoints"
import { sizem } from "../../../utils/breakpoints"

export const Container = styled.div`
  padding-bottom: ${({ padding }) => padding +  "px" || 0};
  /* padding-bottom: 490px !important; */
  cursor: pointer;
  /* max-height: 300px; */
`

export const Card = styled.div`
  display: flex;
  background: #002b49;
  min-height: 180px;
  max-height: 180px;
  /* max-width: 300px; */
  /* margin-bottom: 2rem; */
`

export const ImageContainer = styled.div`
  background: gray;
  flex: 2;
  @media ${size.sm} {
      flex: 1;
    }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2.2;
`

export const Content = styled.div`
  padding: 20px 10px;
  text-transform: uppercase;
  color: var(--orange2);
  font-weight: bold;
  height: 100%;
  width: 180px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`
