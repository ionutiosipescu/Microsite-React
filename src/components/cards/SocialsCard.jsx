import React from "react"
import styled from "styled-components/macro"
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

const SocialsCard = ( internalId ) => {
  console.log("This is interanlId", internalId)

  let link = `https://www.alvarezandmarsal.com/printpdf/${internalId.internalId}`

  return (
    <Card>
      <Share className="box" />
      <div className="blue-box box">
        <a href="https://www.facebook.com/alvarezandmarsal">
          <FooterFacebookIcon className="icon" />
        </a>
      </div>
      <div className="blue-box box">
        <a href="https://www.linkedin.com/company/alvarez-&-marsal/">
          <FooterLinkedinIcon className="icon" />
        </a>
      </div>
      <div className="blue-box box">
        <a href="https://twitter.com/alvarezmarsal">
          <FooterTwitterIcon className="icon" />
        </a>
      </div>
      <a href="https://contact.alvarezandmarsal.com/">
        <Mail className="box" />
      </a>
      <a href={link}>
        <Pdf className="box" />
      </a>
    </Card>
  )
}

export default SocialsCard
