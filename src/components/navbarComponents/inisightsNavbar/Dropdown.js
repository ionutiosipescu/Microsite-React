import React, { useRef, useEffect, useState } from "react"
import CellWithChevron from "./CellWithChevron"
import * as S from "./styles/Dropdown.styles"

const Dropdown = ({ text }) => {
  const dropdownRef = useRef()

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = (isOpen, setIsOpen) => {
    console.log("click")
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [])

  return (
    <div ref={dropdownRef}>
      <CellWithChevron
        text={text}
        handleClick={() => handleClick(isOpen, setIsOpen)}
      />
      <S.DropdownContainer isOpen={isOpen}>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>

        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
        <li>sunshine</li>
      </S.DropdownContainer>
    </div>
  )
}

export default Dropdown
