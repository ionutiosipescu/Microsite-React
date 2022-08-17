import React from "react"
import * as S from "./styles/ArticlePreviewCard.styles.js"

const ArticlePreviewCard = ({ cardArticle, border, onClick }) => {
  return (
    <S.Card className="col-12 col-lg-4">
      <S.Category>{cardArticle?.category || "category"}</S.Category>
      <S.Title onClick={() => onClick()}>
        {cardArticle?.title.substr(0, 30) || "Title"}
      </S.Title>
      <S.Date>{cardArticle?.date || "Date"}</S.Date>
      <S.Content>{cardArticle?.content || "Content"}</S.Content>
      {border && <S.BorderBottom />}
    </S.Card>
  )
}

export default ArticlePreviewCard
