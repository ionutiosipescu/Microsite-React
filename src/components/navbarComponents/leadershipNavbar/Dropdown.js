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
      console.log("doing")
      setIsOpen(false)
      setDropdownHeight(0)
    }
  }

  // Old method for listtening to clicks outside of the dropdown
  useEffect(() => {
    const closeDropdown = e => {
      if (!dropdownRef.current.contains(e.target) && isOpen) {
        console.log("doing")
        setIsOpen(false)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [isOpen])

  const addFilter = filts => {
    if (navbarFilters?.length > 0) {
      navbarFilters.forEach(filter => {
        if (filter?.type !== filts.type) {
          dispatch(addNavbarFilters(filts))
        }
      })
    } else {
      dispatch(addNavbarFilters(filts))
    }
  }

  return (
    <div ref={dropdownRef}>
      <CellWithChevron
        text={text?.name ?? text}
        handleClick={handleClick}
        dropdownOpened={isOpen}
        iconColor={iconColor}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        {text?.values?.map(filts => (
          <li onClick={() => addFilter(filts)}>{filts?.name}</li>
        ))}
      </S.DropdownContainer>
    </div>
  )
}

export default Dropdown
