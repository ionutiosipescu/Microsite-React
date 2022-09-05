import React from "react"
import * as S from "./styles/CardPodcast.style"
import { AmazonMusic, Antena, Spotify, Slack, View } from "../../assets/icons"

const PodcastCard = ({
  isnightType,
  title,
  date,
  teaserText,
  teaserImageUrl,
}) => {
  return (
    <S.Card>
      <S.Category>{isnightType}</S.Category>
      <S.View>
        {teaserImageUrl ? <img src={teaserImageUrl} alt="podcast" /> : <View />}
      </S.View>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.Content>{teaserText}</S.Content>
      <S.Socials>
        <Spotify />
        <Antena />
        <Slack />
        <AmazonMusic />
      </S.Socials>
    </S.Card>
  )
}

export default PodcastCard
