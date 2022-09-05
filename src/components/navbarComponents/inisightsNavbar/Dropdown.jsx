import React, { useRef, useEffect, useContext, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"
import { useDispatch, useSelector } from "react-redux"
import { addFilter } from "../../../store/actions/filters"
import { ContentContext } from "../../../pages/insightsPage/Insights"

const Dropdown = ({ text, filters, category }) => {
  const dropdownRef = useRef()
  const dispatch = useDispatch()
  const dropdownHeightRef = useRef(null)
  const { filters: selectedFilters } = useSelector(state => state.filters)

  const { content, setContent, setNextPodcastPage, setNextPage } =
    useContext(ContentContext)

  // Determines the names of the filters that should be highlighted
  const highlightFilterNames = []
  selectedFilters.forEach(selectedFilter => {
    highlightFilterNames.push(selectedFilter.name)
    highlightFilterNames.push(selectedFilter.category)
  })

  const highlightCell = name => {
    return highlightFilterNames.includes(name)
  }

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
    setNextPage(0)
    setContent([])
    setNextPodcastPage(null)
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
        {category === "date" ? (
          <TimeDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
            highlightCell={highlightCell}
          />
        ) : (
          <NormalDropdown
            filters={filters}
            addFilterToRedux={addFilterToRedux}
            category={category}
            highlightCell={highlightCell}
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
}) => {
  const addToRedux = filter => {
    addFilterToRedux({
      ...filter,
      category: category,
    })
  }

  return (
    <>
      <S.FlexContainer>
        {filters.period.map((filter, index) => (
          <S.DropdownItem
            onClick={() => addToRedux(filter)}
            key={index}
            highlight={highlightCell(filter.name)}
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
          >
            {filter.name}
          </S.DropdownItem>
        ))}
      </S.FlexContainer>
      <S.FlexContainer>
        {filters.months.map((filter, index) => (
          <S.DropdownItem
            onClick={() => addToRedux(filter)}
            highlight={highlightCell(filter.name)}
            key={index}
          >
            {filter.name}
          </S.DropdownItem>
        ))}
      </S.FlexContainer>
    </>
  )
}

export default Dropdown
