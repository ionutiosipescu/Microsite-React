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
}) => {
  console.log("This is highlight", highlight)
  return (
    <S.NavbarCell
      onClick={() => handleClick()}
      onlyMobile={onlyMobile}
      dropdownOpened={dropdownOpened}
      highlight={highlight}
    >
      {text || "No text"}
      {/* <ChevronDownWhite /> */}

      {dropdownOpened ? <ChevronUpWhite /> : <ChevronDownWhite />}
    </S.NavbarCell>
  )
}

export default CellWithChevron
