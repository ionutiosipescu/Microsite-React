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
`

const LocationCard = (datadeeper) => {
    return(
        <>
        <Card>
            <div className="city">{datadeeper.datadeeper.cities[0].city}</div>
            <div className="phone contact-field">
                <span>{datadeeper.datadeeper.cities[0].contact_field[0].phone.props.children}</span>
                
            </div>
            <div className="contact-field">
                <p className="adress">
                    <span>{datadeeper.datadeeper.cities[0].contact_field_addres[0].addres[0].props.children}</span>
                    <br/>
                    <span>{datadeeper.datadeeper.cities[0].contact_field_addres[0].addres[1].props.children}</span>
                    <br/>
                    <span>{datadeeper.datadeeper.cities[0].contact_field_addres[0].addres[2].props.children}</span>
                    <br/>
                    <span>{datadeeper.datadeeper.cities[0].contact_field_addres[0].addres[3].props.children}</span>
                </p>
            </div>
            <ButtonWithAnimation/>
        </Card>
        </>
    )
}

export default LocationCard;