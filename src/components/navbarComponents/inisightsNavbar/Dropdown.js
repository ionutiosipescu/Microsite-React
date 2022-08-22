import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { useDispatch } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

const Dropdown = ({ text, filters }) => {
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
        setIsOpen(false)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [isOpen])

  const addFilterToRedux = filter => {
    dispatch(addFilter(filter))
  }

  return (
    <S.Container ref={dropdownRef} margin={margin}>
      <CellWithChevron
        text={text}
        handleClick={handleClick}
        dropdownOpened={isOpen}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        {filters.years ? (
          <TimeDropdown filters={filters} addFilterToRedux={addFilterToRedux} />
        ) : (
          <NormalDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
          />
        )}
      </S.DropdownContainer>
    </S.Container>
  )
}

const NormalDropdown = ({ filters, addFilterToRedux }) => {
  return filters.map((filter, index) => (
    <li onClick={() => addFilterToRedux(filter)} key={index}>
      {filter.name}
    </li>
  ))
}

const TimeDropdown = ({ filters, addFilterToRedux }) => {
  console.log("This is filters", filters)

  console.log(filters.keys)
  return (
    <>
      <div>
        {/* <div>{filters.period}</div> */}
        <div>fuck</div>
        <div>fuck</div>
      </div>
    </>
  )
}

export default Dropdown
