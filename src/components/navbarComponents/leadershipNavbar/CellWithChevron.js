import React from "react"
// import ChevronUpWhite from "../../../assets/icons/"
import { ChevronDownWhite, ChevronUpWhite } from "../../../assets/icons"
import * as S from "./styles/Cell.styles"

const CellWithChevron = ({
  text,
  handleClick,
  onlyMobile,
  dropdownOpened,
  iconColor,
  color,
}) => {
  return (
    <S.NavbarCell
      onClick={() => handleClick()}
      onlyMobile={onlyMobile}
      dropdownOpened={dropdownOpened}
      iconColor={color ? color : iconColor}
    >
      <span style={{ color: color }}>{text}</span>
      {/* <ChevronDownWhite /> */}

      {dropdownOpened ? <ChevronUpWhite /> : <ChevronDownWhite />}
    </S.NavbarCell>
  )
}

export default CellWithChevron
