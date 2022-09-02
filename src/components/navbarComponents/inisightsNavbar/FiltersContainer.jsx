import React, { useContext } from "react"
import FilterCell from "./FilterCell"
import * as S from "./styles/FiltersContainer.styles"
import { useSelector } from "react-redux"

const FiltersContainer = () => {
  const { filters } = useSelector(state => state.filters)

  return (
    <S.FiltersContainer>
      {filters.map((filter, index) => (
        <FilterCell key={index} filter={filter} />
      ))}
    </S.FiltersContainer>
  )
}

export default FiltersContainer
