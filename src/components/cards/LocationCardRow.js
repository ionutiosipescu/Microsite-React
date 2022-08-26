import React from "react";
import styled from "styled-components";
import LocationCard from "./LocationCard";
import { ContainerLocation } from "../layout/Rows&Collumns/Rows&Collumns.style";
import { size } from "../../utils/breakpoints";

const Card = styled.div`
    width: 100%;
.coutry{
    text-align: center;
    font-size: 36px;
    line-height: 1;
    font-weight: 700;
    color: #0085CA;
    text-transform: uppercase;
    margin: 40px 0;
    @media ${size.lg} {
        text-align: unset;
    }
}
`

const LocationCardRow = ({location}) => {
    const {
        country,
    } = location

    console.log(location)
    return(
        <>
        <Card>
            <div className="coutry">{country}</div>
            <ContainerLocation>
                <LocationCard location={location}/>
                <LocationCard location={location}/>
                <LocationCard location={location}/>
            </ContainerLocation>
        </Card>
        </>
    )
}

export default LocationCardRow;