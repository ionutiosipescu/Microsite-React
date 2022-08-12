import React from "react"
import * as S from "./styles/Cell.styles"

const Cell = ({ text, href }) => {
  return (
    <S.NavbarCell>
      <a href={href || "#"}>{text || "No text"}</a>
    </S.NavbarCell>
  )
}

export default Cell
