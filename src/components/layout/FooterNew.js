import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/esm/Col";
import { FooterFacebookIcon, FooterLinkedinIcon, FooterTwitterIcon, FooterYoutTubeIcon, LogoFooter, ArrowRight } from "../../assets/icons";
import { size } from "../../utils/breakpoints";


const FooterContainer = styled.div`
background-color: var(--darkBlue) !important;
 max-width: 1280px;
 height: auto;
    width: 100%;
  .logo {
    img {
      width: 45px;
      height: 40px;
    }
  }

`;

const ContentContainer = styled.div`
height: 100%;
width: 100%;
padding: 50px 70px 50px;
font-size: 12px;
`
const SectionsContainer = styled.div`
position: relative;
height: 100%;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* align-items: center; */
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
    .global-careers-box, .contact-privacy-box {
        width: 50%;
    }
    .global, .contact {
        margin-bottom: 20px;
    }
    .privacy {
        opacity: 0.8;
    }
}
.logo-container, .list-info-container {
    margin-bottom: 30px;
}

@media ${size.md} {
    margin-bottom: 0;
    align-items: unset;
    flex-direction: row;
  justify-content: space-between;
/* aici */
  .logo-container, .list-info-container, .bulletin-container, .contact, .global {
    margin-bottom: 0 !important;

  }

  .global-careers-box, .contact-privacy-box {
    display: flex;
  }
  .privacy {
        padding-left: 100px;
    }
}
`
const ColContainer = styled.div`
/* height: 100%; */

display: flex;
.logo {
    svg {
        height: 55px;
        width: auto;
    }
}
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
        margin-left: 3px;
        svg {
            height: 11px;
            width: auto;
        }
    }
}
input {
    color: #fff;
    background: transparent;
    border: 0;
    height: 20px;
    border-bottom: 1px solid #fff;
    text-align: center;
    ::placeholder {
        color: #fff;
    }
    }
    .icons-container {
        img {
            height: 25px;
            width: auto;
        }
        display: flex;
        justify-content: end;
        gap: 1rem;
        margin-bottom: 48px;
    }
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
padding-top: 20px;
flex-direction: column;

`
const CopyrightSection = styled.div`

color: #fff;
`
const BrandSection = styled.div`

color: #fff;

`

const FooterNew = () => {
  return (
    <>
    <FooterContainer className="bg-light fluid">
        <ContentContainer>
            <SectionsContainer >
               <ColContainer className="logo-container">
                    <Col className="logo"><LogoFooter/></Col>
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
                            <div><FooterFacebookIcon/></div>
                            <div><FooterLinkedinIcon/></div>
                            <div><FooterTwitterIcon/></div>
                            <div><FooterYoutTubeIcon/></div>
                        </Col>
                        <Col className="bulletin-signup">
                            <p>AM Bulletin Signup</p>
                            <input placeholder="E-MAIL"></input>
                            <p>Subscribe <span><ArrowRight/></span></p>
                        </Col>
                    </ColBox>
            </ColContainer>
            </SectionsContainer>
            <BottomContainer>
                <CopyrightSection>© Copyright 2022. Alvarez  Marsal Holdings, LLC. All Rights Reserved.</CopyrightSection>
                <BrandSection>Alvarez  Marsal</BrandSection>
            </BottomContainer>
        </ContentContainer>
    </FooterContainer>
    </>
  )
};

export default FooterNew
