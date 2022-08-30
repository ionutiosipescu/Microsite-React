import React, {useEffect, useState} from "react"
import { HeroSection } from "../../components/cards"
import { StyledContainerLocation } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import LocationCardRow from "../../components/cards/LocationCardRow"
import { getLocations, getSingleLocation } from "../../API"


const LocationPage = () => {
  const [location, setLocations] = useState(null)

  useEffect(() => {
    
    getLocations(setLocations);
  }, []);
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
          // console.log(location)
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
      {location?.map((location, index) => (
                  <LocationCardRow location={location} key={index} />
                ))}
      </StyledContainerLocation>
    </>
  )
}

export default LocationPage
