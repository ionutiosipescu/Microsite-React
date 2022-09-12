import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { ButtonWithAnimation } from "../buttons"
import { size } from "../../utils/breakpoints"

const Card = styled.div`
width: 100%;
/* text-align: center; */
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 40px;
  /* @media ${size.lg} {
      text-align: unset;
    } */
  .city {
    text-align: start;
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    color: #00244a;
    margin-bottom: 30px;
    @media ${size.lg} {
      /* text-align: center; */
    }
  }
  .contact-field {
    font-size: 20px;
    line-height: 24px;
    color: #00244a;
  }
  .adress {
    margin: 30px 0 15px;
  }
  .address-line {
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

const LocationCard = ({ location }) => {
  const {
    address_line1,
    address_line2,
    area,
    country,
    postal,
    city,
    phone,
    fax,
    map,
  } = location
  // console.log(location)

  return (
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
            <div className="address-line">{postal}</div>
            <div className="address-line">{country}</div>
          </p>
        </div>
        <ButtonWithAnimation text={"VIEW MAP"} href={map} />
      </Card>
    </>
  )
}

export default LocationCard
