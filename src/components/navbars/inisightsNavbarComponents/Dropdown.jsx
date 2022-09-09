import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { useDispatch, useSelector } from "react-redux"
import { addFilter } from "../../../store/actions/filters"

const Dropdown = ({ text, filters, category, colors }) => {
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

  const [isOpen, setIsOpen] = useState(false)
  const [margin, setMargin] = useState(0)

  useEffect(() => {
    if (isOpen && dropdownHeightRef.current.clientHeight > 80) {
      setMargin(dropdownHeightRef.current.clientHeight)
    } else {
      setMargin(0)
    }
  }, [isOpen])

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

  const highlightCell = name => {
    return highlightFilterNames.includes(name)
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Container ref={dropdownRef} margin={margin}>
      <CellWithChevron
        text={text}
        handleClick={handleClick}
        dropdownOpened={isOpen}
        highlight={highlightFilterNames.includes(category)}
        colors={colors}
      />
      <S.DropdownContainer isOpen={isOpen} ref={dropdownHeightRef}>
        {category === "date" ? (
          <TimeDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
            highlightCell={highlightCell}
            colors={colors}
          />
        ) : (
          <NormalDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
            highlightCell={highlightCell}
            colors={colors}
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
  highlightCell,
  colors,
}) => {
  return filters.map((filter, index) => {
    const addToRedux = () => {
      addFilterToRedux({
        id: filter.id,
        name: filter.name,
        category: category,
        uuid: filter.uuid,
      })
    }

    return (
      <S.DropdownItem
        onClick={addToRedux}
        highlight={highlightCell(filter.name)}
        key={index}
        style={{
          "--textColor": colors.textColor,
          "--highlightColor": colors.highlightColor,
        }}
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
  highlightCell,
  colors,
}) => {
  const addToRedux = filter => {
    addFilterToRedux({
      ...filter,
      category: category,
    })
  }

  return (
    <S.TimedropdownWrapper>
      <S.FlexContainer>
        {filters.period.map((filter, index) => (
          <S.DropdownItem
            onClick={() => addToRedux(filter)}
            key={index}
            highlight={highlightCell(filter.name)}
            style={{
              "--textColor": colors.textColor,
              "--highlightColor": colors.highlightColor,
            }}
          >
            {filter.name}
          </S.DropdownItem>
        ))}
      </S.FlexContainer>
      <S.FlexContainer>
        {filters.years.map((filter, index) => (
          <S.DropdownItem
            onClick={() => addToRedux(filter)}
            key={index}
            highlight={highlightCell(filter.name)}
            style={{
              "--textColor": colors?.textColor,
              "--highlightColor": colors.highlightColor,
            }}
          >
            {filter.name}
          </S.DropdownItem>
        ))}
      </S.FlexContainer>
      <S.MonthsContainer>
        <S.FlexContainer>
          {filters.months.slice(0, 6).map((filter, index) => (
            <S.DropdownItem
              onClick={() => addToRedux(filter)}
              highlight={highlightCell(filter.name)}
              key={index}
              style={{
                "--textColor": colors?.textColor,
                "--highlightColor": colors.highlightColor,
              }}
            >
              {filter.name}
            </S.DropdownItem>
          ))}
        </S.FlexContainer>
        <S.FlexContainer>
          {filters.months.slice(6, 11).map((filter, index) => (
            <S.DropdownItem
              onClick={() => addToRedux(filter)}
              highlight={highlightCell(filter.name)}
              key={index}
              style={{
                "--textColor": colors?.textColor,
                "--highlightColor": colors.highlightColor,
              }}
            >
              {filter.name}
            </S.DropdownItem>
          ))}
        </S.FlexContainer>
      </S.MonthsContainer>
    </S.TimedropdownWrapper>
  )
}

export default Dropdown
