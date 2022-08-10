import React from "react";
import styled from "styled-components";
import { BulletinSignup } from "../";
import { LinkedIn, Facebook, Twitter, YouTube } from "../../assets/icons";
import { size } from "../../utils/breakpoints";
// import FacebookIcon from '@mui/icons-material/Facebook'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

`;

const Footer = () => {
  return (
    <FooterContainer className="bg-light fluid">

    </FooterContainer>
  );
};

export default Footer;
