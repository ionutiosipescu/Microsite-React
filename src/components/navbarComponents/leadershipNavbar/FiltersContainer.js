import React, { useContext } from "react"
import FilterCell from "./FilterCell"
import * as S from "./styles/FiltersContainer.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"
import { useSelector } from "react-redux/es/exports"

const FiltersContainer = ({ filtercolor, marginTop }) => {
  const { dropdownHeight, selectedFilters } = useContext(InsightsNavbarContext)
  // console.log(selectedFilters)
  const navbarFilters = useSelector(state => state.leaders.navbarFilters)
  return (
    <S.FiltersContainer dropdownHeight={dropdownHeight} marginTop={marginTop}>
      {navbarFilters?.map((filter, index) => (
        <FilterCell key={index} text={filter} filtercolor={filtercolor} />
      ))}
    </S.FiltersContainer>
  )
}

export default FiltersContainer
