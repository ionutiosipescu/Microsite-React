import React, { useEffect, useState, createContext } from "react"
import * as S from "./inisightsNavbarComponents/styles/InsightsNavbar.styles"
import Cell from "./inisightsNavbarComponents/Cell"
import Dropdown from "./inisightsNavbarComponents/Dropdown"
import FiltersContainer from "./inisightsNavbarComponents/FiltersContainer"
import { Search } from "../../assets/icons"
import CellWithChevron from "./inisightsNavbarComponents/CellWithChevron"
import { getInsightFilters } from "../../API/getFilters"
import { useDispatch } from "react-redux"
import { addFilter } from "../../store/actions/filters"
import Spinner from "../Spinner"

// Those are are insight insight types/categories. The id for each type of insight can be found on
// https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/insights.  If you want to add/remove new ones, just grab the name
// of the insight type, grab it's drupal_internal__tid or id for short and give it a identifier for ease of use
// The order of the items in the array is important
export const insightTypes = [
  {
    name: "all insights",
    identifier: "all",
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
    const getData = async () => {
      const data = await getInsightFilters()
      setFilters(data)
    }
    getData()
  }, [])

  if (!filters) {
    return <Spinner />
  }

  // Those are the color scheme for the navbar
  const colors = {
    textColor: "var(--filtersBlue)",
    chevronColor: "var(--filtersBlue)",
    highlightColor: "var(--yellowCategory)",
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
        {insightTypes.map((insightType, index) => (
          <Cell {...insightType} key={index} colors={colors} />
        ))}
      </S.Navbar>
      <CellWithChevron
        text={"Filter by"}
        handleClick={handleClick}
        onlyMobile
        colors={colors}
      />
      <S.Navbar showNavbar={showNavbar}>
        <Dropdown
          text={"expertise"}
          category={"expertise"}
          filters={filters.expertise}
          colors={colors}
        />
        <Dropdown
          text={"industry"}
          category={"industries"}
          filters={filters.industries}
          colors={colors}
        />
        <Dropdown
          text={"location"}
          category={"region"}
          filters={filters.region}
          colors={colors}
        />
        <Dropdown
          text={"date"}
          filters={filters.date}
          category={"date"}
          colors={colors}
        />
      </S.Navbar>
      <FiltersContainer colors={colors} />
    </S.Container>
  )
}

export default InsightsNavbar
