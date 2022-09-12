import React, {useState} from "react"
import styled from "styled-components/macro"
import Col from "react-bootstrap/esm/Col"
import { Form } from "react-bootstrap"
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
  background-color: var(--darkBlue2) !important;
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
  padding: 50px 10px;
  font-size: 0.875rem;
  @media ${size.md} {
    padding: 3.125rem 4.375rem;
  }
  /* change */
`
const SectionsContainer = styled.div`
.icons-mobile {
  margin-bottom: 30px;
  display: flex;
    img {
      height: 2.063rem;
      width: auto;
    }
    justify-content: end;
    gap: 1rem;
    align-items: center;
  }

  .contact-privacy-box{
    margin-bottom: 30px;
  }
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bulletin-container {
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
  }
  .global-careers-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  p {
    color: #fff;
  }
  .list-info-container {
    font-weight: 700;
    cursor: pointer;
    line-height: 1.6;
    p {
      margin: 0;
    }
    .global-careers-box,
    .contact-privacy-box {
      width: 100%;
    }
    .global,
    .contact {
      margin-bottom: 1.25rem;
    }
    .privacy {
      opacity: 0.8;
    }
  }
  .logo-container {
    width: 100%;
  }
  .logo-container,
  .list-info-container {
    margin-bottom: 1.875rem;
  }
  .list-info-container,
  .contact {
    /* font-weight: 500; */
  }
  .privacy {
    font-weight: 300;
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }
  .bulletin-signup {
    font-weight: 700;
  }
  /* MEDIA */
  @media ${size.md} {
    .icons-mobile {
      display: none;
      margin-bottom: unset;
    }
    .logo-container {
      width: unset !important;
    }
    /* margin-bottom: 0; */
    align-items: unset;
    flex-direction: row;
    justify-content: space-between;
    .logo-container,
    .list-info-container,
    .contact,
    .global,
    .contact-privacy-box {
      /* margin-bottom: 0 !important; */
      flex-grow: 1;
      margin: 0 30px 30px 0;
    }
    .bulletin-container{
      flex-grow: 1;
      width: unset;
    }

    .global-careers-box,
    .contact-privacy-box {
      display: flex;
    }
    .privacy {
      /* padding-left: 6.25rem; */
      grid-template-columns: unset !important;
    }
  }
`
const ColContainer = styled.div`
  display: flex;
  .logo {
    svg {
      height: 66.898px;
      width: 75.667px;
    }
  }
  .bulletin-box {
    width: 100%;
  }
  /* MEDIA */
  @media ${size.md} {
    .bulletin-box {
      display: flex;
      flex-direction: column;
      .form-col{
        display: flex;
        justify-content: end;
      }
    }
  }
`
const ColBox = styled.div`

.icons-container{
  visibility: hidden;
  height: 0;
  width: 0;
  margin-bottom: 0 !important;
}
/* 'initial', sometimes its the value 'auto' or 'none' */
  .form-control {
    display: auto;
    width: 100%;
    /* width: 100%; this was the solution to have a bigger email
     space but instead we will need to increase size of right container*/
    padding: inherit;
    font-size: auto;
    font-weight: auto;
    line-height: inherit;
    color: auto;
    background-color: inherit;
    background-clip: inherit;
    border: auto;
    appearance: inherit;
    border-radius: inherit;
     transition: border-color none; 
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  .form-control:focus {
    color: #fff;
    background-color: transparent;
    border-color: #fff !important;
    outline: inherit;
    box-shadow: none;
  }

  .bulletin-signup {
    display: flex;
    gap: 0.7rem;
    /* flex-direction: column; */
    align-items: end;
    .form-label {
      margin: 0;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      line-height: 1;
    }
    button {
      font-size: 16px;
      font-weight: 600;
      display: flex;
      margin-left: 0.188rem;
      border: 0;
      background-color: transparent;
      margin: 0;
      color: #fff;
      svg {
        height: 0.688rem;
        width: auto;
        margin-left: 5px;
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
      font-size: 13px;
    font-weight: 600;
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
    .form-control{
      width: auto;
    }
    .bulletin-signup {
      flex-direction: row;
      align-items: end;
    }
    .icons-container {
      visibility: visible !important;
      height: initial;
      width: initial;
      margin-bottom: initial;
    }
  }
`
const BottomContainer = styled.div`
  font-size: 9px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-top: 1px solid #fff;
  padding-top: 30px;
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
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    let link = `https://bulletins.alvarezandmarsal.com/?email=${encodeURIComponent(email)}`

    window.location.replace(link)
    console.log(link)
    
    console.log(email)
  };
    


  return (
    <FooterContainer className="bg-light fluid">
      <ScrollToTop />
      <ContentContainer>
        <SectionsContainer>
          <ColContainer className="logo-container">
            <Col className="logo">
              <LogoFooter />
            </Col>
            <Col className="icons-mobile">
                <div>
                  <a target="_blank" href="https://www.facebook.com/alvarezandmarsal"><FooterFacebookIcon /></a>
                </div>
                <div>
                  <a target="_blank" href="https://www.linkedin.com/company/alvarez-&-marsal/"><FooterLinkedinIcon /></a>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/alvarezmarsal"><FooterTwitterIcon /></a>
                </div>
                <div>
                  <a target="_blank" href="https://www.youtube.com/user/AlvarezMarsal"><FooterYoutTubeIcon /></a>
                </div>
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
              <Col className="contact">
                <p>Contact</p>
                <p>Alumni</p>
                <p>A&M Capital</p>
                <p>A&M Capital Real Estate</p>
                <p>Employee Portal</p>
              </Col>
            </ColBox>
          </ColContainer>
            <ColContainer className="contact-privacy-box">
              <Col className="privacy">
                <p>Privacy Policy</p>
                <p>Privacy Shield Notice</p>
                <p>California Privacy Notice</p>
                <p>Cookie Policy</p>
                <p>Terms of Use</p>
              </Col>
            </ColContainer>
          <ColContainer className="bulletin-container">
            <ColBox className="bulletin-box">
              <Col className="icons-container">
                <div>
                  <a target="_blank" href="https://www.facebook.com/alvarezandmarsal"><FooterFacebookIcon /></a>
                </div>
                <div>
                  <a target="_blank" href="https://www.linkedin.com/company/alvarez-&-marsal/"><FooterLinkedinIcon /></a>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/alvarezmarsal"><FooterTwitterIcon /></a>
                </div>
                <div>
                  <a target="_blank" href="https://www.youtube.com/user/AlvarezMarsal"><FooterYoutTubeIcon /></a>
                </div>
              </Col>


              <Form onSubmit={handleSubmit} className="form-col">
              <Form.Group controlId='email' className="bulletin-signup">
                <Form.Label>A&M BULLETIN SIGNUP</Form.Label>
                <Form.Control placeholder="EMAIL" type='email' value={email} onChange={ev => setEmail(ev.target.value)} required={true} />
                <button  type="submit" className="">Subscribe
                  <span>
                    <ArrowRight />
                  </span></button>

                
                  </Form.Group>
                </Form>

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
