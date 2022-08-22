import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { XIcon } from "../../../assets/icons"
import * as S from "./styles/FilterCell.styles"

import { filterNavbar } from "../../../store/actions/leaders"

const FilterCell = ({ text, filtercolor }) => {
  const dispatch = useDispatch()

  return (
    <S.FilterCell
      filtercolor={filtercolor}
      onClick={() => {
        dispatch(filterNavbar(text))
      }}
    >
      <span>
        {text?.name} <XIcon />
      </span>
    </S.FilterCell>
  )
}

export default FilterCell
