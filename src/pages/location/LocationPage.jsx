import React from "react";
import { HeroSection } from "../../components/cards";
import { StyledContainerLocation } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import LocationCardRow from "../../components/cards/LocationCardRow";
import { objecttest } from "../../utils/data";

const LocationPage = () => {
    return(
        <>
        <HeroSection height={300} title={"HEALTCARE & LIFE SCIENCES LOCATIONS"} description={"Cross border, no problem. Our global team of senior professionals are ready to execute your business solutions."} />
        <StyledContainerLocation>
            <LocationCardRow data={objecttest}/>
        </StyledContainerLocation>
        </>
    )
}

export default LocationPage;


