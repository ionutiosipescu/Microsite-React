import React from "react"
import FilterCell from "./FilterCell"
import * as S from "./styles/FiltersContainer.styles"
import { useSelector } from "react-redux"

const FiltersContainer = ({ colors }) => {
  const { filters } = useSelector(state => state.filters)

  return (
    <S.FiltersContainer>
      {filters.map((filter, index) => (
        <FilterCell key={index} filter={filter} colors={colors} />
      ))}
    </S.FiltersContainer>
  )
}

export default FiltersContainer
