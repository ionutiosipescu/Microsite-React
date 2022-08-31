import React from "react"
import styled from "styled-components/macro"
import LocationCard from "./LocationCard"
import { ContainerLocation } from "../layout/Rows&Collumns/Rows&Collumns.style"
import { size } from "../../utils/breakpoints"

const Card = styled.div`
  width: 100%;
  .coutry {
    text-align: center;
    font-size: 36px;
    line-height: 1;
    font-weight: 700;
    color: #0085ca;
    text-transform: uppercase;
    margin: 40px 0;
    @media ${size.lg} {
      text-align: unset;
    }
  }
`

const LocationCardRow = ({ location }) => {
  const { country } = location

  // console.log(location)
  // console.log(country)
  // console.log(location.city)
  // console.log(location.city[0])
  return (
    <>
      <Card>
        <div className="coutry">{country.country}</div>
        <ContainerLocation>
          {location.city?.map((location, index) => (
            <LocationCard location={location} key={index} />
          ))}
        </ContainerLocation>
      </Card>
    </>
  )
}

export default LocationCardRow
