import React from "react"
import * as S from "./styles/BreadCrumb.styles"
import { ChevronRightWhite } from "../../assets/icons"
import { useLocation } from "react-router"

const BreadCrumb = () => {
  const location = useLocation()

  const text = location.pathname.split("/")[1] || "Home"

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
