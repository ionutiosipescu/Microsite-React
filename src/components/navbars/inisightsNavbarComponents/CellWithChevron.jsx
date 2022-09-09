import React from "react"
// import ChevronUpWhite from "../../../assets/icons/"
import { ChevronDownWhite, ChevronUpWhite } from "../../../assets/icons"
import * as S from "./styles/Cell.styles"

const CellWithChevron = ({
  highlight,
  text,
  handleClick,
  onlyMobile,
  dropdownOpened,
  colors,
}) => {
  return (
    <S.NavbarCell
      onClick={() => handleClick()}
      onlyMobile={onlyMobile}
      dropdownOpened={dropdownOpened}
      highlight={highlight}
      style={{
        "--textColor": colors?.textColor,
        "--chevronColor": colors?.chevronColor,
        "--highlightColor": colors.highlightColor,
      }}
    >
      {text || "No text"}

      {dropdownOpened ? <ChevronUpWhite /> : <ChevronDownWhite />}
    </S.NavbarCell>
  )
}

export default CellWithChevron
