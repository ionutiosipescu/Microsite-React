import styled from "styled-components/macro"

export const Container = styled.div`
right: 0;
  position: fixed;
  background: var(--hover-blue);
  width: 45px;
  height: 45px;
  margin: 0 auto;
  /* position: relative; */
  float: right;
  bottom: 150px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`
