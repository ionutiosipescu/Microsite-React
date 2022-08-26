import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { useDispatch, useSelector } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

const Dropdown = ({ text, filters, category }) => {
  const dropdownRef = useRef()
  const dispatch = useDispatch()
  const dropdownHeightRef = useRef(null)
  const { filters: selectedFilters } = useSelector(state => state.filters)

  // Determines the names of the filters that should be highlighted
  const highlightFilterNames = []
  selectedFilters.forEach(selectedFilter => {
    highlightFilterNames.push(selectedFilter.name)
    highlightFilterNames.push(selectedFilter.category)
  })

  // console.log("This is selectedFilters", selectedFilters)
  // console.log("This is highlightFilterNames", highlightFilterNames)

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
        highlight={highlightFilterNames.includes(category)}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        {category === "created" ? (
          <TimeDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
            highlightFilterNames={highlightFilterNames}
          />
        ) : (
          <NormalDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
            highlightFilterNames={highlightFilterNames}
          />
        )}
      </S.DropdownContainer>
    </S.Container>
  )
}

const NormalDropdown = ({
  filters,
  category,
  addFilterToRedux,
  highlightFilterNames,
}) => {
  return filters.map((filter, index) => {
    return (
      <S.DropdownItem
        // highlight={}
        onClick={() =>
          addFilterToRedux({
            id: filter.id,
            name: filter.name,
            category: category,
            uuid: filter.uuid,
          })
        }
        highlight={highlightFilterNames.includes(filter.name)}
        key={index}
      >
        {filter.name}
      </S.DropdownItem>
    )
  })
}

const TimeDropdown = ({
  filters,
  addFilterToRedux,
  category,
  highlightFilterNames,
}) => {
  return (
    <>
      <div>
        <S.FlexContainer>
          {/* This shit is bad. Need to move it to the api folder and to data cleaning there */}
          {Object.entries(filters.period).map((filter, index) => (
            <S.DropdownItem
              onClick={() =>
                addFilterToRedux({
                  name: filter[1],
                  value: filter[0],
                  category: category,
                })
              }
              key={index}
              highlight={highlightFilterNames.includes(filter[1])}
            >
              {filter[1]}
            </S.DropdownItem>
          ))}
        </S.FlexContainer>
        <S.FlexContainer>
          {Object.entries(filters.years).map((filter, index) => (
            <S.DropdownItem
              onClick={() =>
                addFilterToRedux({
                  name: filter[1],
                  value: filter[0],
                  category: category,
                })
              }
              key={index}
              highlight={highlightFilterNames.includes(filter[1])}
            >
              {filter[1]}
            </S.DropdownItem>
          ))}
        </S.FlexContainer>
        <S.FlexContainer>
          {Object.entries(filters.months).map((filter, index) => (
            <S.DropdownItem
              onClick={() =>
                addFilterToRedux({
                  name: filter[1],
                  value: filter[0],
                  category: category,
                })
              }
              highlight={highlightFilterNames.includes(filter[1])}
              key={index}
            >
              {filter[1]}
            </S.DropdownItem>
          ))}
        </S.FlexContainer>
      </div>
    </>
  )
}

export default Dropdown
