import React from "react"
import Connor from "../../assets/images/ConnorWine"
import * as S from "./styles/FeaturedProfileCard.styles"

const FeaturedProfileCard = ({ name, position, city, imageUrl }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={imageUrl || Connor} alt="featured expert" />
      </S.ImageContainer>
      <S.Content>
        <h4>{name || "peter urbanowicz"}</h4>
        <div>{position || "managing director"}</div>
        <div>{city || "dalas"}</div>
      </S.Content>
    </S.Container>
  )
}

export default FeaturedProfileCard
