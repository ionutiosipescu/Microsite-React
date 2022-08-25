import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { useDispatch } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

const Dropdown = ({ text, filters, category }) => {
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
        {category === "created" ? (
          <TimeDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
          />
        ) : (
          <NormalDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
          />
        )}
      </S.DropdownContainer>
    </S.Container>
  )
}

const NormalDropdown = ({ filters, category, addFilterToRedux }) => {
  return filters.map((filter, index) => (
    <li
      onClick={() =>
        addFilterToRedux({
          id: filter.id,
          name: filter.name,
          category: category,
          uuid: filter.uuid,
        })
      }
      key={index}
    >
      {filter.name}
    </li>
  ))
}

const TimeDropdown = ({ filters, addFilterToRedux, category }) => {
  return (
    <>
      <div>
        <S.FlexContainer>
          {Object.entries(filters.period).map((filter, index) => (
            <li
              onClick={() =>
                addFilterToRedux({
                  name: filter[1],
                  value: filter[0],
                  category: category,
                })
              }
              key={index}
            >
              {filter[1]}
            </li>
          ))}
        </S.FlexContainer>
        <S.FlexContainer>
          {Object.entries(filters.years).map((filter, index) => (
            <li
              onClick={() =>
                addFilterToRedux({
                  name: filter[1],
                  value: filter[0],
                  category: category,
                })
              }
              key={index}
            >
              {filter[1]}
            </li>
          ))}
        </S.FlexContainer>
        <S.FlexContainer>
          {Object.entries(filters.months).map((filter, index) => (
            <li
              onClick={() =>
                addFilterToRedux({
                  name: filter[1],
                  value: filter[0],
                  category: category,
                })
              }
              key={index}
            >
              {filter[1]}
            </li>
          ))}
        </S.FlexContainer>
      </div>
    </>
  )
}

export default Dropdown
