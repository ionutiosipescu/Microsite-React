import { size } from "../../../utils/breakpoints"
import styled from "styled-components"
import { CountryPage } from "../../../assets/icons"
import { ButtonWithAnimation } from "../../buttons"

export const Card = styled.div`
  background-image: url(https://akamai.alvarezandmarsal.com/sites/default/files/countrypage_us.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  right: 0;
  left: 0;
  height: -webkit-fill-available;
  min-height: 430px;
  /* padding: 4rem 2rem; */
  width: 1532px;
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 32px; */
  margin-top: 15px;
  :after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 36, 74, 0.9);
  }
  .xicon {
    position: absolute;
    right: 0;
    z-index: 3;
    top: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-size: 32px 32px;
    margin-right: 15px !important;
  }
`
export const XContainer = styled.a`
  display: inline-block;
  margin: 0 0 0 auto;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--hover-blue);
  }
  :hover {
    svg {
      fill: #fff;
    }
  }
  /* .x-icon {
    position: absolute;
    right: 0;
    z-index: 3;
    top: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-size: 32px 32px;
    margin-right: 15px !important;
  } */
`

export const CardBody = styled.div`
  gap: 2rem;

  position: relative;

  @media ${size.lg} {
    position: relative;
    display: flex;
    z-index: 2;
    padding: 20px;
    height: 100%;
  }
`

export const Header = styled.div`
  margin-right: 30px;
`

export const ImageContainer = styled.div`
  height: 100%;
  /* background: darkgray;

  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: relative;
    width: 80%;
    margin: 0 10%;
    bottom: 5rem;

    display: none;

    @media ${size.sm} {
      display: initial;
    }
  } */
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    width: 296px;
    aspect-ratio: auto 296 / 434;
  }
`
export const ImageTriangleContainer = styled.div`
  margin-left: 191px;
  position: absolute;
  content: "";
  left: 0;
  top: -14px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 14px solid #00244a;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  /* justify-content: space-between; */
  h4 {
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 1;
  }
  h6 {
    font-size: 18px;
    line-height: 1;
    color: var(--hover-blue);
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    color: #fff;
    margin: 20px 0;
  }
  #button-leaders {
    margin-top: auto;
    margin-bottom: 20px;
  }
  /* flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    font-weight: bold;
    color: #fff;
  }
  h6 {
    font-weight: bold;
    color: var(--hover-blue);
  }

  & :nth-child(2) {
    font-weight: bold;
    text-transform: uppercase;
  }

  a {
    font-weight: bold;
  }
  p {
    color: #fff;
  } */
`

export const Info = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  min-width: 300px;
`

export const InfoCard = styled.div`
  font-weight: bold;
  /* border-bottom: 1px solid black; */
  padding: 0.5rem 0;

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }
`

export const Dropdown = styled.div`
  font-size: 20px;
  color: #6bbeec;
  text-transform: uppercase;
  display: grid;
  gap: 20px;
  margin: auto 0;
  display: ${props => props.display};

  @media ${size.lg} {
    display: initial;
  }
`

export const ContactInfo = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;

  border-top: 1px solid black;
  border-bottom: ${props => (props.borderBottom ? "1px solid black" : "none")};

  text-align: center;

  @media ${size.lg} {
    display: none;
  }
`

export const PersonalInfo = ({ title, content }) => {
  return (
    <InfoCard>
      <p>{title}</p>
      <div>{content}</div>
    </InfoCard>
  )
}

export const DescriptionDesktop = styled.div`
  display: none;

  @media ${size.sm} {
    display: initial;
  }
`

export const ContainerMobile = styled.div`
  margin: 2rem 0;

  button {
    margin-bottom: 2rem;
  }

  @media ${size.sm} {
    display: none;
  }
`
