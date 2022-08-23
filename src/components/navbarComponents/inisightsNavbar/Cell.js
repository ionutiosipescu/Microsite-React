import React, { useEffect, useState, useRef } from "react"
import * as S from "./styles/Cell.styles"
import { useSelector, useDispatch } from "react-redux"
import { changeInsightsType } from "../../../store/actions/filters"

const Cell = ({ text, type }) => {
  const dispatch = useDispatch()
  const { currentInsightType } = useSelector(state => state.filters)

  const handleClick = () => {
    dispatch(changeInsightsType(type))
  }

  return (
    <S.NavbarCell selected={currentInsightType === type} onClick={handleClick}>
      {text || "No text"}
    </S.NavbarCell>
  )
}

export default Cell
