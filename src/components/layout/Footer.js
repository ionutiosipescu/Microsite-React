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
  justify-content: space-around;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;

  p {
    font-weight: bold;
  }
`;

const Copyright = styled.div`
  background: black;
  color: white;
  padding: 20px;
  // flex: 2;
  width: 70%;
  line-height: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer className="bg-light">
      <BulletinSignup />
      <LinksC>
        <Col>
          <p>Global Locations</p>
          <p>Expertise</p>
          <p>Industries</p>
          <p>Insights</p>
          <p>Our People</p>
        </Col>
        <Col>
          <p>Careers </p>
          <p>#AMon Social</p>
          <p>A&M on Covid-19</p>
          <p>About A&M</p>
        </Col>

        <Col>
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
        <Col>
          <div className="d-flex gap-3">
            <LinkedIn />
            <YouTube />
            <Facebook />
            <Twitter />
          </div>
        </Col>
      </LinksC>
      <Copyright>
        <p className="pt-2">
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
