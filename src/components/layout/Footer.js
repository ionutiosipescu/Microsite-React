import React from "react";
import styled from "styled-components";
import { Form, Button, Nav } from "react-bootstrap";
import BulletinSignup from "../BulletinSignup";
import { LinkedIn, Facebook, Twitter, YouTube } from "../../assets/icons";
// import FacebookIcon from '@mui/icons-material/Facebook'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  // align-items: space-between;

  justify-content: space-between;

  gap: 30px;
  // background: white;
  // height: 700px;
`;

const LinksC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .media {
    justify-content: space-between;
  }
  .Global {
    padding-bottom: 0;
  }
  .Careers {
    padding-top: 0;
  }
`;

const Col = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;

  p {
    font-weight: bold;
  }
`
const ColContainer = styled.div`
display: flex;
`
const ColBox = styled.div`

`

const Copyright = styled.div`
  background: black;
  color: white;
  padding: 20px;
  // flex: 2;
  width: 100%;
  
  p {
    line-height: 1.2;
  }
`;

const Footer = () => {
  return (
    <FooterContainer className="bg-light fluid">
      <BulletinSignup />
      <LinksC>
        <ColContainer>
          <ColBox>
            <Col className="Global">
              <p>Global Locations</p>
              <p>Expertise</p>
              <p>Industries</p>
              <p>Insights</p>
              <p>Our People</p>
            </Col>
            <Col className="Careers">
              <p>Careers </p>
              <p>#AMon Social</p>
              <p>A&M on Covid-19</p>
              <p>About A&M</p>
            </Col>
          </ColBox>
          <Col className="Contact">
            <p>Contact</p>
            <p>Alumni</p>
            <p>A&M Capital</p>
            <p>A&M Capital Real Estate</p>
            <p>Employee Portal</p>
            <p>Privacy Policy</p>
            <p>Privacy Shield Notice</p>
            <p> California Privacy Notice</p>
            <p>Cookie Policy</p>
            <p>Terms of Use</p>
          </Col>
        </ColContainer>
        <Col>
          <div className="d-flex gap-3 media">
            <LinkedIn />
            <YouTube />
            <Facebook />
            <Twitter />
          </div>
        </Col>
      </LinksC>
      <Copyright>
        <p >
          © Copyright 2022, Alvarez & Marsal Holdings, LLC. All Rights Reserved.
        </p>
        <p>
          ALVAREZ & MARSAL®, A&M Logo®, A&M Logo® and A&M® are trademarks of
          Alvarez & Marsal Holdings, LLC.
        </p>
        <p>
          Note: Alvarez & Marsal employs CPAs, but is not a licensed CPA firm.
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
