import React from "react";
import styled from "styled-components";
import LocationCard from "./LocationCard";
import { ContainerLocation } from "../layout/Rows&Collumns/Rows&Collumns.style";

const Card = styled.div`
    width: 100%;
.coutry{
    font-size: 36px;
    line-height: 1;
    font-weight: 700;
    color: #0085CA;
    text-transform: uppercase;
    margin: 40px 0;
}
`

const LocationCardRow = () => {
    return(
        <>
        <Card>
            <div className="coutry">Australia</div>
            <ContainerLocation>
                <LocationCard/>
            </ContainerLocation>
        </Card>
        </>
    )
}

export default LocationCardRow;