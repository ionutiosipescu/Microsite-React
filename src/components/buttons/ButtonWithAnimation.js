import React from "react"
import * as S from "./styles/ButtonWithAnimation.style"
import { ChevronRight } from "../../assets/icons"

const ButtonWithAnimation = ({ text, black, link }) => {
  return (
    <S.Container href={link || "#"}>
      <S.ChevronContainer black={black}>
        <ChevronRight />
      </S.ChevronContainer>
      <S.TextContainer black={black}>
        <div>{text || "Read More"}</div>
      </S.TextContainer>
    </S.Container>
  )
}

export default ButtonWithAnimation
