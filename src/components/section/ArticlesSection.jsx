import React from "react"
import { ArticlePreviewCard } from "../cards"
import UnalignedItemsConainer from "../layout/UnalignedItemsContainer"
import { dateFromSecondsToShortLocale } from "../../utils/dateFormat"

const ArticleSection = ({ articles }) => {
  return (
    <UnalignedItemsConainer columnsNumber={3}>
      {articles?.map((article, index) => {
        let cardInfo = {
          id: article?.uuid,
          category: article?.categoryName,
          title: article?.title,
          date: dateFromSecondsToShortLocale(article.updated),
          alias: article.alias,
          teaserText: article?.text_teaser,
          uuid: article?.uuid,
        }

        return (
          <ArticlePreviewCard
            key={index}
            {...cardInfo}
            onClick={() => alert("click")}
          />
        )
      })}
    </UnalignedItemsConainer>
  )
}

export default ArticleSection
