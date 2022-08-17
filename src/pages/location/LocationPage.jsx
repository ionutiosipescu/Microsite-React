import React from "react";
import { HeroSection } from "../../components/cards";
import { StyledContainerLocation, ContainerLocation } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import LocationCardRow from "../../components/cards/LocationCardRow";

const LocationPage = () => {
    
    return(
        <>
        <HeroSection height={300} title={"HEALTCARE & LIFE SCIENCES LOCATIONS"} description={"Cross border, no problem. Our global team of senior professionals are ready to execute your business solutions."} />
        <StyledContainerLocation>
            <LocationCardRow/>
        </StyledContainerLocation>
        </>
    )
}

export default LocationPage;