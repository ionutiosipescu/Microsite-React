import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { useDispatch } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

const Dropdown = ({ text }) => {
  const dropdownRef = useRef()
  const dispatch = useDispatch()
  const dropdownHeightRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [margin, setMargin] = useState(0)

  useEffect(() => {
    if (isOpen && dropdownHeightRef.current.clientHeight > 80) {
      setMargin(dropdownHeightRef.current.clientHeight)
    } else {
      setMargin(0)
    }
  }, [isOpen])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  // Listtening to clicks outside of the dropdown
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

  const addFilterToRedux = e => {
    dispatch(addFilter(e.target.innerText))
  }

  return (
    <S.Container ref={dropdownRef} margin={margin}>
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
    </S.Container>
  )
}

export default Dropdown
