import React from "react"
// import ChevronUpWhite from "../../../assets/icons/"
import { ChevronDownWhite } from "../../../assets/icons"
import * as S from "./styles/Cell.styles"

const CellWithChevron = ({ text, handleClick, onlyMobile }) => {
  return (
    <S.NavbarCell onClick={() => handleClick()} onlyMobile={onlyMobile}>
      {text || "No text"}
      <ChevronDownWhite />
    </S.NavbarCell>
  )
}

export default CellWithChevron
