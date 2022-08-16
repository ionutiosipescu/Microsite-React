import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { InsightsNavbarContext } from "./InsightsNavbar"

const Dropdown = ({ text }) => {
  const dropdownRef = useRef()
  const dropdownHeightRef = useRef(null)
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

        // setDropdownHeight(0)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [isOpen])

  const addFilter = e => {
    setSelectedFilters([...selectedFilters, e.target.innerText])
  }

  return (
    <div ref={dropdownRef}>
      <CellWithChevron
        text={text}
        handleClick={handleClick}
        dropdownOpened={isOpen}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        <li onClick={e => addFilter(e)}>sunshine</li>
        <li onClick={e => addFilter(e)}>sunshine</li>
        <li onClick={e => addFilter(e)}>sunshine</li>
        <li onClick={e => addFilter(e)}>sunshine</li>
        <li onClick={e => addFilter(e)}>sunshine</li>
        <li onClick={e => addFilter(e)}>sunshine</li>
        <li onClick={e => addFilter(e)}>sunshine</li>
      </S.DropdownContainer>
    </div>
  )
}

export default Dropdown
