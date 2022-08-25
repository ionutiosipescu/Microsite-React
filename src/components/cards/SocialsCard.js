import React from "react"
import styled from "styled-components"
import {
  FooterTwitterIcon,
  FooterFacebookIcon,
  Pdf,
  Mail,
  Share,
  FooterLinkedinIcon,
} from "../../assets/icons"

const Card = styled.div`
  background-color: var(--graySections);
  width: auto;
  height: auto;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .box {
    cursor: pointer;
  }

  img {
    height: 2.8rem;
    width: auto;
  }

  .icon {
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
      <Share className="box" />
      <div className="blue-box box">
        <FooterFacebookIcon className="icon" />
      </div>
      <div className="blue-box box">
        <FooterLinkedinIcon className="icon" />
      </div>
      <div className="blue-box box">
        <FooterTwitterIcon className="icon" />
      </div>
      <Mail className="box" />
      <Pdf className="box" />
    </Card>
  )
}

export default SocialsCard
