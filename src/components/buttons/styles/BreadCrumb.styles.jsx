import styled from "styled-components/macro"

export const Wrapper = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: flex-end;
`

export const Container = styled.a`
  display: inline-flex;
  cursor: pointer;
  text-decoration: none;

  transform-origin: 100% 0;
  transform: rotate(90deg);

  position: absolute;

  top: 35rem;

  div {
    transition: all 0.5s ease-out;
  }

  :hover {
    & :nth-child(2) {
      :after {
        width: 100%;
        opacity: 1;
        transition: 500ms;
        -webkit-transition: 500ms;
      }
    }

    div {
      background-color: var(--hover-blue);

      color: var(--white);
    }
  }
`

export const ChevronContainer = styled.div`
  background-color: var(--hover-blue);
  display: flex;
  align-items: center;
  padding: 0.75rem;

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`

export const TextContainer = styled.div`
  color: var(--hover-blue);
  transition: all 0.5s ease-out;
  font-size: 0.8rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  position: relative;
  text-transform: uppercase;

  /* transform: rotate(90deg); */

  div {
    z-index: 2;
  }

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: var(--hover-blue);
    opacity: 0;
  }
`
