import React from "react"
import * as S from "./InsightsNavbar.styles"

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
        <span>
          <a href="#">All Insight</a>
        </span>
      </S.Navbar>
    </S.Container>
  )
}

export default InsightsNavbar
