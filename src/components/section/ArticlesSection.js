import React from "react"
import styled from "styled-components"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import { sizem } from "../../utils/breakpoints"

import { ArticlePreviewCard } from "../cards"
import UnalignedItemsConainer from "../layout/UnalignedItemsContainer"

const ArticlesSectionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  font-family: "Helvetica Neue LT Std", sans-serif;
  color: var(--darkBlueHome);
`
const arr = [1, 2, 3, 4, 5, 5, 5]
const ArticleSection = ({ articles }) => {
  articles ? (articles = articles) : (articles = arr)
  return (
    <UnalignedItemsConainer columnsNumber={3}>
      {articles.map((i, index) => {
        let cardInfo = {
          id: i,
          category: "HEALTHCARE & LIFE SCIENCES INSIGHTS",
          title:
            "Case Study – Landmark Synthetic Securitisation of Housing Community Loans",
          date: "June 23, 2022",
          content:
            "Alvarez & Marsal’s (A&M) Financial Services (FSI) experts worked with Getin Noble Bank’s (GNB) leadership as sole arranger to deliver its inaugural synthetic securitisation for risk transfer, referencing a portfolio of housing community loans. Each h...",
        }
        return (
          <ArticlePreviewCard
            cardArticle={cardInfo}
            onClick={() => alert("click")}
          />
        )
      })}
    </UnalignedItemsConainer>
  )
}

export default ArticleSection
