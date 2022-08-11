import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const UnalignedItemsConainer = ({ children, columnsNumber }) => {
  if (!columnsNumber) {
    columnsNumber = 3;
  }

  // Create empty arrays equal to columnsNumber
  let arrays = [];
  for (let i = 0; i < columnsNumber; i++) {
    arrays.push([]);
  }

  // Fancy funtion to split the the array(children) into arrays of length columnsNumber
  arrays = arrays.map((arr, parentIndex) => {
    while (children[parentIndex]) {
      arr.push(children[parentIndex]);
      parentIndex = parentIndex + columnsNumber;
    }
    return arr;
  });

  console.log(arrays);

  return (
    <Container>
      {arrays.map((arr, index) => {
        return (
          <div key={index}>
            {arr.map((child) => {
              return child;
            })}
          </div>
        );
      })}
    </Container>
  );
};

export default UnalignedItemsConainer;
