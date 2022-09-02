import React from "react"
import * as S from "./styles/Cell.styles"
import { useSelector, useDispatch } from "react-redux"
import { changeInsightsType } from "../../../store/actions/filters"
import { useContext } from "react"
import { ContentContext } from "../../../pages/insightsPage/Insights"

const Cell = ({ name, identifier, id }) => {
  const dispatch = useDispatch()
  const { currentInsightType } = useSelector(state => state.filters)
  const { setNextPage, setContent } = useContext(ContentContext)

  const handleClick = () => {
    setNextPage(1)
    setContent([])
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
