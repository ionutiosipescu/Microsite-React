import styled from "styled-components/macro"
import { sizem } from "../../../utils/breakpoints"

export const Hero = styled.div`
  position: relative;
  height: ${props => props.height + "px" || ""};
  width: 100%;
  background: url(${props => props.backgroundUrl || ""}), rgba(6, 25, 49, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;

  .contentContainer {
    height: inherit;
    padding-left: 6%;
    padding-right: 5%;

    .contentWithoutNavbar {
      height: inherit;
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
    }

    .buttonContainer {
      margin: auto 0px;
      @media ${sizem.smm} {
        margin: 0px 0px;
      }
    }

    h1 {
      color: #fff;
      text-shadow: 10px 10px 10px #00000029;
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-style: medium;
      margin: 0;
      letter-spacing: 0.5px;
      font-size: 3rem;
      line-height: 3rem;
      text-transform: uppercase;

      @media ${sizem.smm} {
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
    }

    p {
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-style: medium;
      width: 65%;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #fff;

      @media ${sizem.smm} {
        width: 90%;
        font-size: 0.9rem;
        line-height: 1rem;
      }
    }
  }
  .routeSpan {
  }
`

export const TitleRoute = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${props => props.color || "#fff"};
`
