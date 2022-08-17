import React from "react"
import styled from "styled-components"
import {
  TwitterIcon,
  FacebookIcon,
  Pdf,
  Mail,
  Share,
  BlueRectangle,
  FooterLinkedinIcon,
  LinkedIn,
} from "../../assets/icons"

const Card = styled.div`
  background-color: var(--gray6);
  width: auto;
  height: auto;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 2.8rem;
    width: auto;
  }
  .linkedin {
    height: 32px;
    width: auto;
  }
  .blue-box {
    height: 2.8rem;
    width: 2.8rem;
    background-color: var(--hover-blue);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SocialsCard = () => {
  return (
    <Card>
      <Share />
      <FacebookIcon />
      <div className="blue-box">
        <FooterLinkedinIcon className="linkedin" />
      </div>
      <TwitterIcon />
      <Mail />
      <Pdf />
    </Card>
  )
}

export default SocialsCard
