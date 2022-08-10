import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/icons";
import Col from "react-bootstrap/esm/Col";



const FooterContainer = styled.div`
background-color: var(--darkBlue) !important;
 max-width: 1280px;
 max-height: 315px;
  width: 100%;
  .logo {
    img {
      width: 45px;
      height: 40px;
    }
  }

`;

const ContentContainer = styled.div`
border: 1px solid red;
height: 100%;
width: 100%;
`
const SectionsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
p {
    color: #fff;
}
`
const ColContainer = styled.div`
width: 100%;
height: 100%;
display: flex;

`
const ColBox = styled.div`

`
const BottomContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
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
                    <Col className="custom-navbar-brand"><Logo style={{ width: "40px" }} /></Col>
               </ColContainer>
               <ColContainer>
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
               <ColContainer>
                    <ColBox>
                        <Col>icons</Col>
                        <Col>
                            <p>AM Bulletin Signup</p>
                            <input></input>
                            <p>Subscribe</p>
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
