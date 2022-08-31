import React, { useState, useEffect } from "react"
import { HeroSection, ProfessionalsCardSmallOld } from "../../components/cards"
import styled from "styled-components/macro"
import { leadersList } from "../../utils/data"

import { useDocumentTitle } from "../../hook"
import { Spinner } from "../../components"

import { useDispatch, useSelector } from "react-redux"
import {
  fetchHLSLeaders,
  fetchHLSPersons,
  filterHLSPersons,
} from "../../store/actions/leaders"
import { InsightsNavbar } from "../../components/navbarComponents"
import * as S from "../../components/navbarComponents/leadershipNavbar/styles/InsightsNavbar.styles"

import Dropdown from "../../components/navbarComponents/leadershipNavbar/Dropdown"
import { InsightsNavbarContext } from "../../components/navbarComponents/leadershipNavbar/InsightsNavbar"
import CellWithChevron from "../../components/navbarComponents/leadershipNavbar/CellWithChevron"
import FiltersContainer from "../../components/navbarComponents/leadershipNavbar/FiltersContainer"
import {
  StyledContainer,
  FullWidthContainer,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style"

import { StyledContainerLocation } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { LeaadersContainer } from "./style/Leadership.style"

const Leadership = () => {
  const dispatch = useDispatch()

  const leaders = useSelector(state => state.leaders.filteredLeaders)
  const persons = useSelector(state => state.leaders?.industryPersons)
  const expertises = useSelector(state => state?.leaders?.expertises)
  const industries = useSelector(state => state?.leaders?.industries)
  const location = useSelector(state => state?.leaders?.location)
  const cities = useSelector(state => state?.leaders?.cities)
  const filtersPersons = useSelector(state => state?.leaders?.filtersPersons)

  const navbarFilters = useSelector(state => state.leaders.navbarFilters)

  const [openedState, setOpenedState] = useState(
    Array.from(leaders ?? [], () => false)
  )
  const [openedStatePersons, setOpenedStatePersons] = useState(
    Array.from(persons ?? [], () => false)
  )

  const [filterDropdownActive, setFiltersDropdownActive] = useState(
    Array.from(filtersPersons ?? [], () => false)
  )
  // console.log(persons)
  const handleDisplay2 = (index, array, state, setState) => {
    if (!state[index]) {
      let arr = Array.from(array, () => false)
      arr[index] = true
      setState([...arr])
    } else {
      setState(Array.from(array, () => false))
    }
  }

  useEffect(() => {
    dispatch(fetchHLSLeaders())
    dispatch(fetchHLSPersons())
  }, [])

  useEffect(() => {
    if (navbarFilters.length > 0) {
      dispatch(filterHLSPersons())
    }
  }, [navbarFilters.length])

  useDocumentTitle("Leadership | Alvarez & Marsal")

  const handleClick = () => {
    setShowNavbar(!showNavbar)
  }

  const [dropdownHeight, setDropdownHeight] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [showNavbar, setShowNavbar] = useState(false)

  const values = {
    dropdownHeight: dropdownHeight,
    setDropdownHeight: setDropdownHeight,
    setSelectedFilters: setSelectedFilters,
    selectedFilters: selectedFilters,
  }
  return (
    <FullWidthContainer bgColor="white">
      <HeroSection
        title={"HEALTH & LIFE PROFESSIONALS"}
        description={
          "Wherever you are, we have industry leaders to solve your problems."
        }
        className="heroContainer"
        backgroundUrl={
          "https://akamai.alvarezandmarsal.com/themes/custom/am/images/bg/our-people-heading-bg.jpg"
        }
        height={360}
      />
      <StyledContainerLocation className="my-2">
        <h1 className=""> Leaders</h1>
        {leaders?.length === 0 || persons.length === 0 ? (
          <Spinner />
        ) : (
          <div>
            <InsightsNavbarContext.Provider value={values}>
              <CellWithChevron
                text={"Filter by"}
                handleClick={handleClick}
                onlyMobile
              />
              <S.Navbar showNavbar={showNavbar}>
                {/* {filtersPersons?.map(term => {
                console.log(term)
              })} */}
                {filtersPersons?.map((term, index) => (
                  <Dropdown
                    text={term}
                    iconColor={"var(--hover-blue)"}
                    key={index}
                  />
                ))}
              </S.Navbar>
              <FiltersContainer
                filtercolor={"var(--hover-blue)"}
                marginTop="6rem"
              />
            </InsightsNavbarContext.Provider>

            <h1 className=""> Leaders</h1>

            <div className="">
              <LeaadersContainer>
                {leaders?.map((cardInfo, index) => {
                  return (
                    <ProfessionalsCardSmallOld
                      className="col-lg-4"
                      key={index}
                      cardInfo={cardInfo}
                      index={index}
                      openedState={openedState}
                      handleDisplay={() =>
                        handleDisplay2(
                          index,
                          leadersList,
                          openedState,
                          setOpenedState
                        )
                      }
                      showDetails={openedState[index]}
                    />
                  )
                })}
              </LeaadersContainer>
              <h1 className=" mt-4"> Leaders</h1>
              <LeaadersContainer>
                {persons?.map((cardInfo, index) => {
                  return (
                    <ProfessionalsCardSmallOld
                      key={index}
                      cardInfo={cardInfo}
                      index={index}
                      openedState={openedState}
                      handleDisplay={() =>
                        handleDisplay2(
                          index,
                          persons,
                          openedStatePersons,
                          setOpenedStatePersons
                        )
                      }
                      showDetails={openedStatePersons[index]}
                    />
                  )
                })}
              </LeaadersContainer>
            </div>
          </div>
        )}
      </StyledContainerLocation>
    </FullWidthContainer>
  )
}

export default Leadership
