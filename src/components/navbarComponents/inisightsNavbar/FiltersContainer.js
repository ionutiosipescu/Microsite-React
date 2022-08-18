import React, { useContext } from "react"
import FilterCell from "./FilterCell"
import * as S from "./styles/FiltersContainer.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"
import { useSelector } from "react-redux"

const FiltersContainer = () => {
  const { dropdownHeight, selectedFilters } = useContext(InsightsNavbarContext)
  const { filters } = useSelector(state => state.filters)

  return (
    <S.FiltersContainer dropdownHeight={dropdownHeight}>
      {filters.map((filter, index) => (
        <FilterCell key={index} text={filter} />
      ))}
    </S.FiltersContainer>
  )
}

export default FiltersContainer
