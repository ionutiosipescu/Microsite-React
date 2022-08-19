import React, { useState } from "react"
import * as S from "./styles/InsightsNavbar.styles"
import Cell from "./Cell"
import Dropdown from "./Dropdown"
import FiltersContainer from "./FiltersContainer"
import { Search } from "../../../assets/icons"
import CellWithChevron from "./CellWithChevron"

const InsightsNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleClick = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <S.Container>
      <S.TitleSection>
        <h1>{"Helathcare & life Sciences Insights"}</h1>
        <S.InputContainer>
          <S.Input placeholder="SEARCH"></S.Input>
          <Search />
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
        <Dropdown text={"expertise"} />
        <Dropdown text={"industry"} />
        <Dropdown text={"location"} />
        <Dropdown text={"date"} />
      </S.Navbar>
      <FiltersContainer />
    </S.Container>
  )
}

export default InsightsNavbar
