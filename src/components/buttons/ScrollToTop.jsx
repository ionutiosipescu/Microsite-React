import React from "react"
import { ChevronUpWhite } from "../../assets/icons"
import styled from "styled-components/macro"

const Container = styled.div`
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

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Container onClick={scrollToTop}>
      <div>
        <ChevronUpWhite />
      </div>
    </Container>
  )
}

export default ScrollToTop
