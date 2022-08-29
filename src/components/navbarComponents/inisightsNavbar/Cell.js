import React from "react"
import * as S from "./styles/Cell.styles"
import { useSelector, useDispatch } from "react-redux"
import { changeInsightsType } from "../../../store/actions/filters"

const Cell = ({ name, identifier, id }) => {
  const dispatch = useDispatch()
  const { currentInsightType } = useSelector(state => state.filters)

  const handleClick = () => {
    dispatch(
      changeInsightsType({
        name,
        identifier,
        id,
      })
    )
  }

  return (
    <S.NavbarCell
      highlight={currentInsightType.identifier === identifier}
      onClick={handleClick}
    >
      {name || "No text"}
    </S.NavbarCell>
  )
}

export default Cell
