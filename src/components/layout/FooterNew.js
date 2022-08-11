

import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/icons";
import Col from "react-bootstrap/esm/Col";
import { FooterFacebookIcon, FooterLinkedinIcon, FooterTwitterIcon, FooterYoutTubeIcon, LogoFooter, ArrowRight } from "../../assets/icons";



const FooterContainer = styled.div`
background-color: var(--darkBlue) !important;
 max-width: 1280px;
 height: auto;
  width: 100%;
  padding-bottom: 50px;
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
padding: 50px 140px 50px;
font-size: 12px;
`
const SectionsContainer = styled.div`
padding-bottom: 50px;
display: flex;
justify-content: space-between;
p {
    color: #fff;
}
.list-info {
    line-height: 1.6;
    p {
        margin: 0;
    }
}
`
const ColContainer = styled.div`
display: flex;
.logo {
    svg {
        height: 55px;
        width: auto;
    }
}

`
const ColBox = styled.div`
.bulletin-signup {
    display: flex; 
    gap: 0.7rem;
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
`
const BottomContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid #fff;
    padding-top: 20px;
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
            <SectionsContainer>
               <ColContainer>
                    <Col className="logo"><LogoFooter/></Col>
               </ColContainer>
               <ColContainer className="list-info">
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
                        <Col>
                            <p>Privacy Policy</p>
                            <p>Privacy Shield Notice</p>
                            <p>California Privacy Notice</p>
                            <p>Cookie Policy</p>
                            <p>Terms of Use</p>
                        </Col>
               </ColContainer>
               <ColContainer className="bulletin-container align-items-end">
                    <ColBox>
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
