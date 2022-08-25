import styled from "styled-components"
import { size } from "../../../utils/breakpoints"

export const Container = styled.div`
  /* border: 1px solid red; */

  display: grid;
  grid-template-columns: 80px auto;
  margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
  /* border: 1px solid black; */

  flex: 0 0 20%;
  background-color: gray;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const Content = styled.div`
  /* border: 1px solid green; */

  flex: 0 0 80%;

  text-transform: uppercase;
  line-height: 1;

  min-height: 100px;
  padding: 0.5rem;

  a {
    text-decoration: none;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0;
    color: var(--darkBlueHome);
    font-weight: bold;
  }

  div {
    font-size: 1.25rem;
    color: var(--light-blue);
  }
`
