import React from "react"
import * as S from "./styles/ArticlePreviewCard.styles.js"
import { useNavigate } from "react-router"
import { routeNames } from "../../routes/routes"

const ArticlePreviewCard = ({ articleInfo }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`${routeNames.insights}/${articleInfo.alias}`, {
      state: articleInfo.uuid,
    })
  }

  return (
    <S.Card>
      <S.Category>{articleInfo.category || "category"}</S.Category>
      <S.Title onClick={handleClick}>
        {/* {articleInfo?.title.substr(0  , 30) || "Title"} */}
        {articleInfo.title || "Title"}
      </S.Title>
      <S.Date>{articleInfo.date || "Date"}</S.Date>
      <S.Content>
        {articleInfo.teaserText || articleInfo.text_teaser || "Content"}
        {/* {articleInfo?.teaserText.substr(0, 250) ||
          articleInfo?.text_teaser.substr(0, 250) ||
          "Content"}
        ... */}
      </S.Content>
    </S.Card>
  )
}

export default ArticlePreviewCard
