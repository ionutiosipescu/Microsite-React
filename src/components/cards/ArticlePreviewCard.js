import React from "react";
import * as S from "./styles/ArticlePreviewCard.styles.js";

const ArticlePreviewCard = ({ category, title, date, content }) => {
  return (
    <S.Card>
      <S.Category>{category || "category"}</S.Category>
      <S.Title>{title || "Title"}</S.Title>
      <S.Date>{date || "Date"}</S.Date>
      <S.Content>{content || "Content"}</S.Content>
    </S.Card>
  );
};

export default ArticlePreviewCard;
