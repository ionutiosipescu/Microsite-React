import React, { useEffect, useState } from "react"
import { HeroSection } from "../../components/cards"
import { StyledContainerLocation } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import LocationCardRow from "../../components/cards/LocationCardRow"
import { getLocations, getSingleLocation } from "../../API"
import ButtonJumpToCountry from "../../components/buttons/ButtonJumpToCountry"

const LocationPage = () => {
  const [location, setLocations] = useState(null)

  useEffect(() => {
    getLocations(setLocations)
  }, [])
  return (
    <>
      <HeroSection
        height={360}
        title={"HEALTCARE & LIFE SCIENCES LOCATIONS"}
        description={
          "Cross border, no problem. Our global team of senior professionals are ready to execute your business solutions."
        }
        Custom={ButtonJumpToCountry}
      />
      <StyledContainerLocation>
        {location?.map((location, index) => (
          <LocationCardRow location={location} key={index} />
        ))}
      </StyledContainerLocation>
    </>
  )
}

export default LocationPage
