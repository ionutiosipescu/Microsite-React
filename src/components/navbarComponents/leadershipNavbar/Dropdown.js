import React, { useRef, useEffect, useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"
import {
  addNavbarFilters,
  filterHLSPersons,
} from "../../../store/actions/leaders"

const Dropdown = ({ text, iconColor }) => {
  const dispatch = useDispatch()
  const dropdownRef = useRef()
  const dropdownHeightRef = useRef(null)

  const navbarFilters = useSelector(state => state.leaders.navbarFilters)
  const filtersPersons = useSelector(state => state.leaders.filtersPersons)

  const {
    dropdownHeight,
    setDropdownHeight,
    setSelectedFilters,
    selectedFilters,
  } = useContext(InsightsNavbarContext)

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = e => {
    // setDropdownHeight(0)
    if (!dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
      setDropdownHeight(0)
    }
  }

  // Old method for listtening to clicks outside of the dropdown
  useEffect(() => {
    const closeDropdown = e => {
      if (!dropdownRef.current.contains(e.target) && isOpen) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [isOpen])

  const addFilter = filts => {
    filts.category = text.name
    if (navbarFilters?.length > 0) {
      const found = navbarFilters.find(filter => filter.type === filts.type)
      if (!found) {
        dispatch(addNavbarFilters(filts))
      }
    } else {
      dispatch(addNavbarFilters(filts))
    }
  }
  // console.log(filtersPersons)
  navbarFilters.forEach(el => {
    console.log(el)
  })
  const handleColor = () => {
    let color = ""
    navbarFilters?.forEach(el => {
      if (el?.category === text?.name) {
        color = "var(--yellowCategory)"
      }
    })
    return color
  }
  const colorDrop = handleColor()
  // console.log()
  return (
    <div ref={dropdownRef}>
      <CellWithChevron
        text={text?.name ?? text}
        handleClick={handleClick}
        dropdownOpened={isOpen}
        iconColor={iconColor}
        color={colorDrop}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        {text?.values?.map((filts, index) => (
          <li
            key={index}
            onClick={() => {
              addFilter(filts)
            }}
          >
            <span style={{ color: colorDrop }}>{filts?.name}</span>
          </li>
        ))}
      </S.DropdownContainer>
    </div>
  )
}

export default Dropdown
