import { size, sizem } from "../../../utils/breakpoints"
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
  /* height: 100%; */

  min-height: 430px;
  /* padding: 4rem 2rem; */
  width: 100%;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 32px; */
  margin-top: 15px;
  margin-bottom: 15px;

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
  @media ${sizem.mdm_m} {
    height: ${props => (props.display !== "none" ? "750px" : "550px")};
  }
  @media ${sizem.smm} {
    padding: 5px;
    height: ${props => (props.display !== "none" ? "750px" : "550px")};
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
  @media ${sizem.mdm_m} {
    /* border: 2px solid yellow; */
    position: relative;
    z-index: 100;
    float: left;

    margin: 2px;
    height: 200px;
    width: 150px;
  }
  @media ${sizem.smm} {
    margin: 20px 0px;
    padding: 20px 0px;
    height: 200px;
    width: 150px;
    /* border: 2px solid red; */
    z-index: 1000;
    position: absolute;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    width: 296px;
    aspect-ratio: auto 296 / 434;
    @media ${sizem.mdm_m} {
      margin-top: 10px;
    }
    @media ${sizem.smm} {
      /* padding: 20px; */
      /* margin-top: 100px; */
    }
  }
`
export const ImageTriangleContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  padding-left: 40%;
  padding-top: 15px;
  svg {
    fill: #00244a;
  }
  /* border-bottom: 14px solid #00244a; */
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media ${sizem.mdm_m} {
    /* border: 2px solid red; */
    position: relative;
    z-index: 100;
    margin: 5px 10px;
    padding: 5px 10px;

    /* margin: 2px; */
    /* height: 200px;
    width: 150px; */
  }

  @media ${sizem.smm} {
    /* margin-top: -100px; */
    /* border: 2px solid #fff; */
    position: relative;
    z-index: 1000;
    font-size: 18px;
    padding-top: 60px;
    margin-right: 20px;
  }
  /* justify-content: space-between; */
  h4 {
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 1;
    @media ${sizem.mdm_m} {
      text-align: center;
    }
    @media ${sizem.smm} {
      /* margin-top: -100px; */
      text-align: right;
      font-size: 16px;
    }
  }
  h6 {
    font-size: 18px;
    line-height: 1;
    color: var(--hover-blue);
    text-transform: uppercase;
    @media ${sizem.mdm_m} {
      text-align: center;
    }
    @media ${sizem.smm} {
      /* margin-top: -100px; */
      text-align: right;
      font-size: 16px;
    }
  }
  p {
    font-size: 18px;
    color: #fff;
    margin: 20px 0;
  }
  #button-leaders {
    margin-top: auto;
    margin-bottom: 20px;
    @media ${sizem.mdm_m} {
      display: none;
    }
    @media ${sizem.smm} {
      /* margin-top: -100px; */
      display: none;
      /* margin-bottom: 40px; */
    }
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
  @media ${sizem.mdm_m} {
    /* / text-align: center; */
    /* border: 2px solid green; */
    position: relative;
    z-index: 100;
    /* width: 50%; */
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
    /* margin: 0px 10px; */
    color: #fff;
    display: flex;
    justify-content: center;
  }
  @media ${sizem.smm} {
    margin-top: 20px;
    /* border: 2px solid yellow; */
    position: relative;
    z-index: 1000;
    color: #fff;
  }
`

export const InfoCard = styled.div`
  font-weight: bold;
  /* border-bottom: 1px solid black; */
  padding: 0.5rem 0;

  a {
    text-decoration: none;
    color: #6bbeec;
  }
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
  @media ${sizem.mdm_m} {
    text-align: center;
  }
  @media ${sizem.smm} {
    padding: 0px 10px;
    gap: 0px;
    text-align: center;
    margin-bottom: 20px;
  }
`

export const ContactInfo = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;

  border-top: 1px solid #fff;
  border-bottom: ${props => (props.borderBottom ? "1px solid #fff" : "none")};

  text-align: center;

  @media ${size.lg} {
    display: none;
  }
`

export const PersonalInfo = ({ title, content, onClick }) => {
  return (
    <InfoCard>
      {title === "email" ? (
        <a href={content?.uri}>
          <span>{content.title} </span>
        </a>
      ) : (
        <div onClick={() => onClick()}>
          <span>{content}</span>
        </div>
      )}
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
  @media ${sizem.smm} {
    /* margin-top: -100px; */
    padding-top: 50px;
    padding-left: 5px;
    padding-right: 5px;
    /* padding: 50px 10px; */
    /* height: 1; */
  }

  @media ${size.sm} {
    display: none;
  }
`
