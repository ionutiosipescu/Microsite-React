import React from "react"
import styled from "styled-components"
import ButtonWithAnimation from "../buttons/ButtonWithAnimation"
import { sizem } from "../../utils/breakpoints"

import { ArticlePreviewCard } from "../cards"
import UnalignedItemsConainer from "../layout/UnalignedItemsContainer"
import { dateFromSecondsToShortLocale } from "../../utils/dateFormat"

const ArticleSection = ({ articles }) => {
  console.log(articles)
  return (
    <UnalignedItemsConainer columnsNumber={3}>
      {articles?.map((article, index) => {
        let cardInfo = {
          id: article?.uuid,
          category: article?.categoryName,
          title: article?.title,
          date: article.date,
          alias: article.alias,
          text_teaser: article?.text_teaser,
          uuid: article?.uuid,
        }
        return (
          <ArticlePreviewCard
            key={index}
            articleInfo={cardInfo}
            onClick={() => alert("click")}
          />
        )
      })}
    </UnalignedItemsConainer>
  )
}

export default ArticleSection
