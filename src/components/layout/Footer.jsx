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
    cursor: pointer;
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
/* 'initial', sometimes its the value 'auto' or 'none' */
  .form-control {
    display: auto;
    width: auto;
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

  .form-control:focus {
    color: #fff;
    background-color: inherit;
    border-color: #fff !important;
    outline: inherit;
    box-shadow: none;
  }

  .bulletin-signup {
    display: flex;
    gap: 0.7rem;
    flex-direction: column;
    align-items: center;
    .form-label {
      margin: 0;
      color: #fff;

    }
    button {
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
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    let link = `https://bulletins.alvarezandmarsal.com/?email=${encodeURIComponent(email)}`

    window.location.replace(link)
    console.log(link)
    
    console.log(email)
  };
    // let link = `https://bulletins.alvarezandmarsal.com/?email=`;
    //   Axios.post(link, {
    //     email: email,
    //   })
    //   .then((response) => {
    //     console.log(response)
    //   }, (error) => {
    //     console.error(error)
    //   });

  
  // const handleClick = () => {
  //   // let link = `https://bulletins.alvarezandmarsal.com/?email=${encodeURIComponent(email)}`
  //   let link = `https://bulletins.alvarezandmarsal.com/?email`

  //   window.location.replace(link)
  //   console.log(link)
  // }
    


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


              <Form onSubmit={handleSubmit} >
              <Form.Group controlId='email' className="bulletin-signup">
                <Form.Label>AM Bulletin Signup</Form.Label>
                <Form.Control placeholder="E-MAIL" type='email' value={email} onChange={ev => setEmail(ev.target.value)} required={true} />
                <button  type="submit" className="">Subscribe
                  <span>
                    <ArrowRight />
                  </span></button>

                
                  </Form.Group>
                </Form>
                {/* <div onClick={handleClick}>HErro</div> */}


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
