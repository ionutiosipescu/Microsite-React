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
        <Cell text={"all insights"} href="#" type={"all"} />
        <Cell
          text={"business & industry inisights"}
          type={"industryInsights"}
        />
        <Cell text={"health & life case studies"} type={"caseStudies"} />
        <Cell text={"health & life podcasts"} href="#" type={"podcasts"} />
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
