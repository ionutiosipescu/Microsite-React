import React from "react"
import { HeroSection } from "../../components/cards"
import { StyledContainerLocation } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import LocationCardRow from "../../components/cards/LocationCardRow"
import { objecttest } from "../../utils/data"

const LocationPage = () => {
  //   let i = [
  //     {
  //       country: { name: "Germany", id: 1234 },
  //       cities: [
  //         {
  //           cityName: "Berlin",
  //           adresa: "somethign so,mthing german",
  //           telephone: "something",
  //           // ...
  //         },
  //         {
  //           cityName: "Frankfurt",
  //           adresa: "somethign soemthing german",
  //           telephone: "something",
  //           // ...
  //         },
  //       ],
  //     },
  //     {
  //       country: { name: "Uk", id: 1234 },
  //       cities: [
  //         {
  //           cityName: "London",
  //           adresa: "somethign soemthing german",
  //           telephone: "something",
  //           // ...
  //         },
  //         {
  //           cityName: "Bath",
  //           adresa: "somethign soemthing german",
  //           telephone: "something",
  //           // ...
  //         },
  //       ],
  //     },
  //   ]
  return (
    <>
      <HeroSection
        height={360}
        title={"HEALTCARE & LIFE SCIENCES LOCATIONS"}
        description={
          "Cross border, no problem. Our global team of senior professionals are ready to execute your business solutions."
        }
      />
      <StyledContainerLocation>
        <LocationCardRow data={objecttest} />
      </StyledContainerLocation>
    </>
  )
}

export default LocationPage
