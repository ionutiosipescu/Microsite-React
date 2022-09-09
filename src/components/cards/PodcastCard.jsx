import React from "react"
import * as S from "./styles/CardPodcast.style"
import { AmazonMusic, Antena, Spotify, Slack, View } from "../../assets/icons"

const PodcastCard = ({
  insightType,
  title,
  date,
  teaserText,
  teaserImageUrl,
  podcastLinks,
}) => {
  return (
    <S.Card>
      <S.Category>{insightType}</S.Category>
      <S.View>
        {teaserImageUrl ? <img src={teaserImageUrl} alt="podcast" /> : <View />}
      </S.View>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
      <S.Content>{teaserText}</S.Content>
      <S.Socials>

        {podcastLinks.spotify && (

        <a href={podcastLinks.spotify}>
          <Spotify />
          </a>
        )}

        {podcastLinks.apple && (

        <a href={podcastLinks.apple}>
          <Antena />
          </a>
        )}

        {podcastLinks.google && (

        <a href={podcastLinks.google}>
          <Slack />
          </a>
        )}

        {podcastLinks.amazon && (

        <a href={podcastLinks.amazon}>
          <AmazonMusic />
          </a>
        )}
        
      </S.Socials>
    </S.Card>
  )
}

export default PodcastCard
