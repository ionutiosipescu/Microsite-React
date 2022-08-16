import React, { useContext } from "react"
import FilterCell from "./FilterCell"
import * as S from "./styles/FiltersContainer.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"

const FiltersContainer = () => {
  const { dropdownHeight, selectedFilters } = useContext(InsightsNavbarContext)
  console.log(selectedFilters)

  return (
    <S.FiltersContainer dropdownHeight={dropdownHeight}>
      {selectedFilters.map((filter, index) => (
        <FilterCell key={index} text={filter} />
      ))}
    </S.FiltersContainer>
  )
}

export default FiltersContainer
