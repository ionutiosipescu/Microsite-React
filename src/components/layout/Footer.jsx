import React from "react"
import styled from "styled-components/macro"
import Col from "react-bootstrap/esm/Col"
import {
  FooterFacebookIcon,
  FooterLinkedinIcon,
  FooterTwitterIcon,
  FooterYoutTubeIcon,
  LogoFooter,
  ArrowRight,
} from "../../assets/icons"
import { size } from "../../utils/breakpoints"
import ScrollToTop from "../buttons/ScrollToTop"

const FooterContainer = styled.div`
  background-color: var(--darkBlue) !important;
  /* max-width: 80rem; */
  height: auto;
  width: 100%;
  .logo {
    img {
      width: 2.813rem;
      height: 2.5rem;
    }
  }
`
const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 3.125rem 4.375rem;
  font-size: 0.875rem;
`
const SectionsContainer = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bulletin-container {
    justify-content: center;
  }

  p {
    color: #fff;
  }
  .list-info-container {
    line-height: 1.6;
    p {
      margin: 0;
    }
    .global-careers-box,
    .contact-privacy-box {
      width: 50%;
    }
    .global,
    .contact {
      margin-bottom: 1.25rem;
    }
    .privacy {
      opacity: 0.8;
    }
  }
  .logo-container,
  .list-info-container {
    margin-bottom: 1.875rem;
  }
  .list-info-container,
  .contact {
    font-weight: 500;
  }
  .privacy {
    font-weight: 300;
  }
  .bulletin-signup {
    font-weight: 700;
  }
  /* MEDIA */
  @media ${size.md} {
    margin-bottom: 0;
    align-items: unset;
    flex-direction: row;
    justify-content: space-between;
    .logo-container,
    .list-info-container,
    .bulletin-container,
    .contact,
    .global {
      margin-bottom: 0 !important;
    }

    .global-careers-box,
    .contact-privacy-box {
      display: flex;
    }
    .privacy {
      padding-left: 6.25rem;
    }
  }
`
const ColContainer = styled.div`
  display: flex;
  .logo {
    svg {
      height: 3.438rem;
      width: auto;
    }
  }
  /* MEDIA */
  @media ${size.md} {
    .bulletin-box {
      display: flex;
      flex-direction: column;
    }
  }
`
const ColBox = styled.div`
  .bulletin-signup {
    display: flex;
    gap: 0.7rem;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0;
    }
    span {
      margin-left: 0.188rem;
      svg {
        height: 0.688rem;
        width: auto;
      }
    }
  }
  input {
    color: #fff;
    background: transparent;
    border: 0;
    height: 1.25rem;
    border-bottom: 1px solid #fff;
    text-align: center;
    ::placeholder {
      color: #fff;
    }
  }
  .icons-container {
    img {
      height: 2.063rem;
      width: auto;
    }
    display: flex;
    justify-content: end;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  /* MEDIA */
  @media ${size.md} {
    .bulletin-signup {
      flex-direction: row;
      align-items: end;
    }
    .icons-container {
      margin-bottom: 0;
    }
  }
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #fff;
  padding-top: 1.25rem;
  flex-direction: column;
  /* MEDIA */
  @media ${size.md} {
    flex-direction: row;
  }
`
const CopyrightSection = styled.div`
  color: #fff;
`
const BrandSection = styled.div`
  color: #fff;
`

const Footer = () => {
  return (
    <FooterContainer className="bg-light fluid">
      <ScrollToTop />
      <ContentContainer>
        <SectionsContainer>
          <ColContainer className="logo-container">
            <Col className="logo">
              <LogoFooter />
            </Col>
          </ColContainer>
          <ColContainer className="list-info-container">
            <ColBox className="global-careers-box">
              <Col className="global">
                <p>Global Locations</p>
                <p>Expertise</p>
                <p>Industries</p>
                <p>Insights</p>
                <p>Our People</p>
              </Col>
              <Col className="careers">
                <p>#AMon Social</p>
                <p>Careers </p>
                <p>About A&M</p>
              </Col>
            </ColBox>
            <ColBox className="contact-privacy-box">
              <Col className="contact">
                <p>Contact</p>
                <p>Alumni</p>
                <p>A&M Capital</p>
                <p>A&M Capital Real Estate</p>
                <p>Employee Portal</p>
              </Col>
              <Col className="privacy">
                <p>Privacy Policy</p>
                <p>Privacy Shield Notice</p>
                <p>California Privacy Notice</p>
                <p>Cookie Policy</p>
                <p>Terms of Use</p>
              </Col>
            </ColBox>
          </ColContainer>
          <ColContainer className="bulletin-container">
            <ColBox className="bulletin-box">
              <Col className="icons-container">
                <div>
                  <FooterFacebookIcon />
                </div>
                <div>
                  <FooterLinkedinIcon />
                </div>
                <div>
                  <FooterTwitterIcon />
                </div>
                <div>
                  <FooterYoutTubeIcon />
                </div>
              </Col>
              <Col className="bulletin-signup">
                <p>AM Bulletin Signup</p>
                <input placeholder="E-MAIL"></input>
                <p>
                  Subscribe{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </p>
              </Col>
            </ColBox>
          </ColContainer>
        </SectionsContainer>
        <BottomContainer>
          <CopyrightSection>
            © Copyright 2022. Alvarez Marsal Holdings, LLC. All Rights Reserved.
          </CopyrightSection>
          <BrandSection>Alvarez Marsal</BrandSection>
        </BottomContainer>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer
