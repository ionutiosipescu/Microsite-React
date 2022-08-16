import React, { useContext } from "react"
import { XIcon } from "../../../assets/icons"
import * as S from "./styles/FilterCell.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"

const FilterCell = ({ text }) => {
  const { setSelectedFilters, selectedFilters } = useContext(
    InsightsNavbarContext
  )

  const removeFilter = e => {
    const newSelectedFilters = selectedFilters.filter(filter => filter !== text)
    setSelectedFilters(newSelectedFilters)
  }

  return (
    <S.FilterCell onClick={e => removeFilter(e)}>
      {text || "FilterCell"} <XIcon />
    </S.FilterCell>
  )
}

export default FilterCell
