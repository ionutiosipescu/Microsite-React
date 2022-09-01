import React from "react"
import * as S from "./styles/BreadCrumb.styles"
import { ChevronRightWhite } from "../../assets/icons"

const BreadCrumb = ({ text = "Read More" }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ChevronContainer>
          <ChevronRightWhite />
        </S.ChevronContainer>
        <S.TextContainer>
          <div>{text}</div>
        </S.TextContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default BreadCrumb
