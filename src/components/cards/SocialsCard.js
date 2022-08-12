import React from "react";
import styled from "styled-components";
import { TwitterIcon, FacebookIcon, Pdf, Mail, Share } from "../../assets/icons";


const Card = styled.div`
background-color: var(--gray6);
width: auto;
height: auto;
padding: 20px;
margin: 20px 0;
display: flex;
align-items: center;
justify-content: space-between;
img {
            height: 2.8rem;
            width: auto;            
        }
`


const SocialsCard = () => {
    return (
        <Card>
            <Share/>
            <FacebookIcon/> 
            <TwitterIcon/>
            <Mail/>
            <Pdf/>
        </Card>
    )
}

export default SocialsCard