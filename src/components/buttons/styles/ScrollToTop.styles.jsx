import styled from "styled-components/macro"

export const Container = styled.div`
  background: var(--darkBlue);
  width: 40px;
  height: 40px;
  margin: 0 auto;
  position: relative;
  float: right;
  bottom: 100px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
`
