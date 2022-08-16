import React from "react"
// import ChevronUpWhite from "../../../assets/icons/"
import { ChevronDownWhite, ChevronUpWhite } from "../../../assets/icons"
import * as S from "./styles/Cell.styles"

const CellWithChevron = ({ text, handleClick, onlyMobile, dropdownOpened }) => {
  return (
    <S.NavbarCell
      onClick={() => handleClick()}
      onlyMobile={onlyMobile}
      dropdownOpened={dropdownOpened}
    >
      {text || "No text"}
      {/* <ChevronDownWhite /> */}

      {dropdownOpened ? <ChevronUpWhite /> : <ChevronDownWhite />}
    </S.NavbarCell>
  )
}

export default CellWithChevron
