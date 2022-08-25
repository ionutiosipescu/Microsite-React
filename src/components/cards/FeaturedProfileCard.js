import React from "react"
import Connor from "../../assets/images/ConnorWine"
import * as S from "./styles/FeaturedProfileCard.styles"

const FeaturedProfileCard = ({
  personName: name,
  professionalTitle: position,
  cityNames,
  personalPageLink,
  imageUrl,
}) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={imageUrl || Connor} alt="featured expert" />
      </S.ImageContainer>
      <S.Content>
        <a href={personalPageLink}>
          <h4>{name || "peter urbanowicz"}</h4>
        </a>
        <div>{position || "managing director"}</div>
        {cityNames.map((city, index) => (
          <div key={index}>{city}</div>
        ))}
      </S.Content>
    </S.Container>
  )
}

export default FeaturedProfileCard
