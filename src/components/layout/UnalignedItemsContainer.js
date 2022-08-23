import React from "react"
import styled from "styled-components"
import { size } from "../../utils/breakpoints"

const Container = styled.div`
  & > div {
    display: flex;
    flex-direction: column;

    & > :last-child {
      border-bottom: none;
    }
  }

  @media ${size.lg} {
    display: grid;
    grid-template-columns: repeat(${props => props.columnsNumber}, 1fr);

    gap: 4rem;
  }
`

const UnalignedItemsConainer = ({ children, columnsNumber }) => {
  if (!columnsNumber) {
    columnsNumber = 3
  }

  // Create empty arrays equal to columnsNumber
  let arrays = []
  for (let i = 0; i < columnsNumber; i++) {
    arrays?.push([])
  }

  // Fancy funtion to split the the array(children) into arrays of length columnsNumber
  if (children) {
    arrays = arrays?.map((arr, parentIndex) => {
      while (children[parentIndex]) {
        arr.push(children[parentIndex])
        parentIndex = parentIndex + columnsNumber
      }
      return arr
    })
  }

  return (
    <Container columnsNumber={columnsNumber}>
      {arrays.map((arr, index) => {
        return (
          <div key={index}>
            {arr?.map(child => {
              return child
            })}
          </div>
        )
      })}
    </Container>
  )
}

export default UnalignedItemsConainer
