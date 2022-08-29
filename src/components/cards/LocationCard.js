import React from "react";
import styled from "styled-components";
import { ButtonWithAnimation } from "../buttons";
import { size } from "../../utils/breakpoints";

const Card = styled.div`
    border-bottom: 1px solid #C4C4C4;
    padding-bottom: 40px;
.city {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    color: #00244A;
    margin-bottom: 30px;
    @media ${size.lg} {
        text-align: unset;
    }
}
.contact-field {
    font-size: 20px;
    line-height: 24px;
    color: #00244A;
}
.adress {
    margin: 30px 0 15px;
}
.address-line {
    margin-bottom: 10px;

    :last-child{
        margin-bottom: 0;
    }
}
`

const LocationCard = ({location}) => {
const {
    address_line1,
    address_line2,
    area,
    country,
    postal,
    city,
    phone,
    fax
} = location
    // console.log(location)

    return(
        <>
        <Card>
            <div className="city">{city}</div>
            <div className="phone contact-field">
                <div className="address-line">{phone}</div>
                <div className="address-line">{fax}</div>
                
            </div>
            <div className="contact-field">
                <p className="adress">
                    <div className="address-line">{address_line1}</div>
                    <div className="address-line">{address_line2}</div>
                    <div className="address-line">{area}</div>
                    <div className="address-line">{country}</div>
                    <div className="address-line">{postal}</div>
                </p>
            </div>
            <ButtonWithAnimation/>
        </Card>
        </>
    )
}

export default LocationCard;