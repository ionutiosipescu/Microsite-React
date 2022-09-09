import React, { useState } from "react"
import * as S from "./inisightsNavbarComponents/styles/InsightsNavbar.styles"
import Dropdown from "./inisightsNavbarComponents/Dropdown"
import FiltersContainer from "./inisightsNavbarComponents/FiltersContainer"
import CellWithChevron from "./inisightsNavbarComponents/CellWithChevron"
import { useSelector } from "react-redux"
import Spinner from "../Spinner"

const LeadershipNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const filters = useSelector(state => state?.leaders?.filtersPersons)

  const handleClick = () => {
    setShowNavbar(!showNavbar)
  }

  if (filters.lenght > 0) {
    return <Spinner />
  }

  // Those are the color scheme for the navbar
  const colors = {
    textColor: "var(--hover-blue)",
    chevronColor: "var(--hover-blue)",
    highlightColor: "var(--orange1)",
  }

  return (
    <S.Container>
      <CellWithChevron
        text={"Filter by"}
        handleClick={handleClick}
        onlyMobile
        colors={colors}
      />
      <S.Navbar showNavbar={showNavbar}>
        {filters.map(filter => {
          return (
            <Dropdown
              key={filter.name}
              text={filter.name}
              category={filter.name}
              filters={filter.values}
              colors={colors}
            />
          )
        })}
      </S.Navbar>
      <FiltersContainer colors={colors} />
    </S.Container>
  )
}

export default LeadershipNavbar
