import React from "react";
import * as S from "./styles/ButtonWithAnimation.style";
import { ChevronRight } from "../../assets/icons";

const ButtonWithAnimation = ({ buttonText, black }) => {
  console.log(S);

  return (
    <S.Container>
      <S.ChevronContainer black={black}>
        <ChevronRight />
      </S.ChevronContainer>
      <S.TextContainer black={black}>
        <div>{buttonText || "Read More"}</div>
      </S.TextContainer>
    </S.Container>
  );
};

export default ButtonWithAnimation;
