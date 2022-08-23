import React from "react"
import * as S from "./styles/ArticlePreviewCard.styles.js"
import { useNavigate } from "react-router"
import { routeNames } from "../../routes/routes"

const ArticlePreviewCard = ({ cardArticle: articleInfo, category }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`${routeNames.insights}/${articleInfo.uuid}`, {
      state: articleInfo.uuid,
    })
  }

  return (
    <S.Card>
      <S.Category>{articleInfo?.category || category || "category"}</S.Category>
      <S.Title onClick={handleClick}>
        {/* {articleInfo?.title.substr(0  , 30) || "Title"} */}
        {articleInfo?.title || "Title"}
      </S.Title>
      <S.Date>{articleInfo?.updated || "Date"}</S.Date>
      <S.Content>{articleInfo?.text_teaser || "Content"}</S.Content>
    </S.Card>
  )
}

export default ArticlePreviewCard
