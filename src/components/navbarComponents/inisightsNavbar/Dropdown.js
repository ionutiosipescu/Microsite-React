import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"
import { useSelector, useDispatch } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

const Dropdown = ({ text }) => {
  const dropdownRef = useRef()
  const dropdownHeightRef = useRef(null)
  const {
    dropdownHeight,
    setDropdownHeight,
    setSelectedFilters,
    selectedFilters,
  } = useContext(InsightsNavbarContext)

  const dispatch = useDispatch()

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

        // setDropdownHeight(0)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [isOpen])

  const addFilterToRedux = e => {
    dispatch(addFilter(e.target.innerText))
  }

  return (
    <div ref={dropdownRef}>
      <CellWithChevron
        text={text}
        handleClick={handleClick}
        dropdownOpened={isOpen}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        <li onClick={e => addFilterToRedux(e)}>sunshine1</li>
        <li onClick={e => addFilterToRedux(e)}>sunshine2</li>
        <li onClick={e => addFilterToRedux(e)}>sunshine3</li>
        <li onClick={e => addFilterToRedux(e)}>sunshine4</li>
        <li onClick={e => addFilterToRedux(e)}>sunshine5</li>
        <li onClick={e => addFilterToRedux(e)}>sunshine6</li>
        <li onClick={e => addFilterToRedux(e)}>sunshine7</li>
      </S.DropdownContainer>
    </div>
  )
}

export default Dropdown
