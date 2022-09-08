import React from "react"
import * as S from "./styles/ArticlePreviewCard.styles.js"
import { useNavigate } from "react-router"
import { routeNames } from "../../routes/routes"
import DOMPurify from "dompurify"

const ArticlePreviewCard = ({
  alias,
  uuid,
  title,
  teaserText,
  date,
  insightType,
}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`${routeNames.insights}/${alias}`, {
      state: uuid,
    })
  }

  return (
    <S.Card>
      <S.Category>{insightType}</S.Category>
      <S.Title
        onClick={handleClick}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(title),
        }}
      ></S.Title>
      <S.Date>{date}</S.Date>
      <S.Content
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(teaserText),
        }}
      ></S.Content>
    </S.Card>
  )
}

export default ArticlePreviewCard
