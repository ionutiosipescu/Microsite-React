import React, { useContext } from "react"
import { XIcon } from "../../../assets/icons"
import * as S from "./styles/FilterCell.styles"
import { useDispatch } from "react-redux"
import { removeFilter } from "../../../store/actions/filters"

const FilterCell = ({ text }) => {
  const dispatch = useDispatch()

  const remove = e => {
    dispatch(removeFilter(text))
  }

  return (
    <S.FilterCell onClick={e => remove(e)}>
      {text || "FilterCell"} <XIcon />
    </S.FilterCell>
  )
}

export default FilterCell
