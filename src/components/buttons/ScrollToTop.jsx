import React from "react"
import { ChevronUpWhite } from "../../assets/icons"
import styled from "styled-components/macro"

const Container = styled.div`
  background: var(--darkBlue);
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
      <ChevronUpWhite />
    </Container>
  )
}

export default ScrollToTop
