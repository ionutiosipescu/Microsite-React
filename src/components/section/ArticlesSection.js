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
        console.log("This is article", article)
        let cardInfo = {
          id: article?.id,
          category: articles?.title ?? "HEALTHCARE & LIFE SCIENCES INSIGHTS",
          title: article?.title,
          updated: dateFromSecondsToShortLocale(article?.updated),
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
