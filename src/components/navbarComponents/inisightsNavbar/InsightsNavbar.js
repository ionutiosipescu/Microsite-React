import React from "react"
import * as S from "./styles/InsightsNavbar.styles"
import Cell from "./Cell"
import Dropdown from "./Dropdown"

const InsightsNavbar = ({ title }) => {
  return (
    <S.Container>
      <S.TitleSection>
        <h1>{title || "Helathcare & life Sciences Insights"}</h1>
        {/* <input placeholder="SEARCH"></input> */}
        <span>
          <S.Input placeholder="SEARCH"></S.Input>
        </span>
      </S.TitleSection>
      <S.Navbar>
        <Cell text="Home" href="#" />
        <Cell href="#" />
        <Cell text="Home" />
        <Cell text="Home" />
        <Cell text="Home" href="#" />
        <Cell href="#" />
        <Cell text="Home" />
        <Cell text="Home" />
        <Cell text="Home" href="#" />
        <Cell href="#" />
        <Cell text="Home" />
        <Cell text="Home" />
      </S.Navbar>
      <S.Navbar>
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </S.Navbar>
    </S.Container>
  )
}

export default InsightsNavbar

const handleClick = e => {
  //do something
}
