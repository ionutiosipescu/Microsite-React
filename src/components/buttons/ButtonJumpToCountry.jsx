import React from "react"
// import * as S from "./styles/ButtonJumpToCountry.style"
import styled from "styled-components"
import { ChevronRight } from "../../assets/icons"

const Container = styled.a`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #0085CA;
    padding: 0 40px 0 10px;
    height: 40px;
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    max-width: 250px;
    position: relative;
    :hover{
        color: #fff;
    }
`
const TextContainer = styled.span`
        :after{
            position: absolute;
        content: "";
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        background: transparent url(ChevronRight) no-repeat center center;
        background-size: contain;
        transform: rotate(90deg);
        transition: all 0.5s;
        }

`

const ButtonJumpToCountry = () => {
  
    return (
      <Container>
        <TextContainer>
          <div className="here">{"Jump To Country"}</div>
        </TextContainer>
      </Container>
    )
  }
  
  export default ButtonJumpToCountry