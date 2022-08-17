import React, { useState } from "react"
import { Cell, MobileDropdown, Container } from "./Navigation.styles"

const NavigationNavbar = ({ children, spread, setClickedNavbarCell }) => {
  const [toggle, setToggle] = useState(false)
  const [highlightedCell, setHighlightedCell] = useState(0)

  const handleClick = index => {
    setHighlightedCell(index)
    setToggle(!toggle)
    setClickedNavbarCell(index)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Container spread={spread} toggle={toggle}>
        <MobileDropdown as={"div"} onClick={handleToggle}>
          {children[highlightedCell]} {"(Active cell)"}
        </MobileDropdown>
        <ul>
          {children?.map((child, index) => {
            return (
              <Cell
                key={index}
                onClick={() => handleClick(index)}
                highlight={highlightedCell === index}
              >
                {child}
              </Cell>
            )
          })}
        </ul>
      </Container>
    </>
  )
}

export default NavigationNavbar
