import React from "react"
import { ChevronUpWhite } from "../../assets/icons"
import * as S from "./styles/ScrollToTop.styles"

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <S.Container onClick={scrollToTop}>
      <div>
        <ChevronUpWhite />
      </div>
    </S.Container>
  )
}

export default ScrollToTop
