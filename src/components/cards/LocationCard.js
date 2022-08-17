import React from "react";
import styled from "styled-components";
import { ButtonWithAnimation } from "../buttons";

const Card = styled.div`
    border-bottom: 1px solid #C4C4C4;
    padding-bottom: 40px;
.name {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    color: #00244A;
    margin-bottom: 30px;
}
.contact-field {
    font-size: 20px;
    line-height: 24px;
    color: #00244A;
}
.adress {
    margin: 30px 0 15px;
}
`

const LocationCard = () => {
    return(
        <>
        <Card>
            <div className="name">Melbourne</div>
            <div className="phone contact-field">
                <span>Tel: </span>
                <span>+61 3 9101 8550</span>
            </div>
            <div className="contact-field">
                <p className="adress">
                    <span>Level 30</span>
                    <br/>
                    <span>35 Collins Street</span>
                    <br/>
                    <span>VIC</span>
                    <span>3000</span>
                    <br/>
                    <span>Australia</span>
                </p>
            </div>
            <ButtonWithAnimation/>
        </Card>
        </>
    )
}

export default LocationCard;