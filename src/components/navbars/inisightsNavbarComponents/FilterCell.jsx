import React from "react"
import { XIcon } from "../../../assets/icons"
import * as S from "./styles/FilterCell.styles"
import { useDispatch } from "react-redux"
import { removeFilter } from "../../../store/actions/filters"

const FilterCell = ({ filter, colors }) => {
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(removeFilter(filter))
  }

  return (
    <S.FilterCell
      onClick={() => remove(filter)}
      style={{
        "--textColor": colors.textColor,
        "--highlightColor": colors.highlightColor,
      }}
    >
      {filter.name || "FilterCell"} <XIcon />
    </S.FilterCell>
  )
}

export default FilterCell
