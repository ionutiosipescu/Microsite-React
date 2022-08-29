import React, { useEffect, useState } from "react"
import * as S from "./styles/InsightsNavbar.styles"
import Cell from "./Cell"
import Dropdown from "./Dropdown"
import FiltersContainer from "./FiltersContainer"
import { Search } from "../../../assets/icons"
import CellWithChevron from "./CellWithChevron"
import { getInsightFilters } from "../../../API/getFilters"
import { useDispatch } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

// Those are are insight insight types/categories. The id for each type of insight can be found on
// https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/insights.  If you want to add/remove new ones, just grab the name
// of the insight type, grab it's drupal_internal__tid or id for short, give it a identifier for ease of use and put its' id in the all type.
const InsighttTypes = [
  {
    name: "all insights",
    identifier: "all",
    id: [1776, 3976, 3971],
  },
  {
    name: "business & industry inisights",
    identifier: "industryInsights",
    id: 1776,
  },
  {
    name: "health & life case studies",
    identifier: "caseStudies",
    id: 3976,
  },
  {
    name: "Health & Life Podcast",
    identifier: "healthPodcasts",
    id: 3971,
  },
]

const InsightsNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [filters, setFilters] = useState(null)
  const dispatch = useDispatch()

  const handleClick = () => {
    setShowNavbar(!showNavbar)
  }

  const handleSubmit = e => {
    console.log(e.target[0].value)
    e.preventDefault()

    dispatch(
      addFilter({
        name: e.target[0].value,
        category: "userInput",
      })
    )

    e.target[0].value = ""
  }

  useEffect(() => {
    getInsightFilters(setFilters)
  }, [])

  if (!filters) {
    return null
  }

  return (
    <S.Container>
      <S.TitleSection>
        <h1>{"Helathcare & life Sciences Insights"}</h1>
        <S.InputContainer>
          <form onSubmit={e => handleSubmit(e)}>
            <S.Input placeholder="SEARCH"></S.Input>
            <Search />
          </form>
        </S.InputContainer>
      </S.TitleSection>
      <S.Navbar showNavbar={true}>
        {InsighttTypes.map((insightType, index) => (
          <Cell {...insightType} key={index} />
        ))}
      </S.Navbar>
      <CellWithChevron
        text={"Filter by"}
        handleClick={handleClick}
        onlyMobile
      />
      <S.Navbar showNavbar={showNavbar}>
        <Dropdown
          text={"expertise"}
          category={"expertise"}
          filters={filters.expertise}
        />
        <Dropdown
          text={"industry"}
          category={"industries"}
          filters={filters.industries}
        />

        <Dropdown
          text={"location"}
          category={"region"}
          filters={filters.region}
        />

        <Dropdown
          text={"date"}
          filters={filters.created}
          category={"created"}
        />
      </S.Navbar>
      <FiltersContainer />
    </S.Container>
  )
}

export default InsightsNavbar
