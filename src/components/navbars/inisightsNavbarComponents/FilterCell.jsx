import React, { useContext } from "react"
import { XIcon } from "../../../assets/icons"
import * as S from "./styles/FilterCell.styles"
import { useDispatch } from "react-redux"
import { removeFilter } from "../../../store/actions/filters"
import { ContentContext } from "../../../pages/insightsPage/Insights"

const FilterCell = ({ filter, colors }) => {
  // const { setContent, setNextPodcastPage, setNextPage } =
  //   useContext(ContentContext)
  const dispatch = useDispatch()

  const remove = () => {
    // setNextPage(0)
    // setContent([])
    // setNextPodcastPage(null)

    dispatch(removeFilter(filter))
  }

  return (
    <S.FilterCell
      onClick={() => remove(filter)}
      style={{
        "--textColor": colors.textColor,
        "--highlightColor": colors.highlightColor,
      }}
    >
      {filter.name || "FilterCell"} <XIcon />
    </S.FilterCell>
  )
}

export default FilterCell
