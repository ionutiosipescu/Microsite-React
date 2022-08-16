import React from "react";
import * as S from "./CardPodcast.style"
import { AmazonMusic, Antena, Spotify, Slack, View } from "../../assets/icons";

const ArticlePreviewCard = ({ category, title, date, content }) => {
  return (
    <S.Card>
      <S.Category>{category || "HEALTH & LIFE PODCASTS"}</S.Category>
      <S.View><View/></S.View>
      <S.Title>{title || "Healthcare & Life Sciences Podcast Series | Dr. Sachin Jain is Conquering Three Moonshots to Solve for Homelessness, Disparities and Loneliness"}</S.Title>
      <S.Date>{date || "June 23, 2022"}</S.Date>
      <S.Content>{content || "Dr. Sachin Jain is Conquering Three Moonshots to Solve for Homelessness, Disparities and Loneliness, in the Senior Population The impact of the pandemic is still being felt by many, even as we move into a post-COVID world. SCAN Health Plan, one of…"}</S.Content>
        <S.Socials>
            <Spotify />
            <Antena/>
            <Slack />
            <AmazonMusic />
        </S.Socials>
    </S.Card>
  );
};

export default ArticlePreviewCard;
