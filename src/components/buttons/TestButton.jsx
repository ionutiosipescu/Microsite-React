import React, { useState, handleSelect } from "react";
import styled from "styled-components";

// const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 10;
// `;

const DropDownContainer = styled("div")`
    max-width: 250px;
`;

const DropDownHeader = styled("div")`

  /* padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff; */

  display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #0085CA;
    padding: 0 40px 0 10px;
    height: 40px;
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    position: relative;
    :hover{
        color: #fff;
    }
    :after{
            position: absolute;
        content: "";
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        background: transparent url(https://akamai.alvarezandmarsal.com/themes/custom/am/images/icons/arrow-right-white-64.png) no-repeat center center;
        background-size: contain;
        transform: rotate(90deg);
        transition: all 0.5s;
        }
`;

const DropDownListContainer = styled("div")`
    top: 100%;
`;

const DropDownList = styled("ul")`
  /* padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  } */


  display: grid;
    grid-template-columns: repeat(3,1fr);
    background-color: #0085CA;
    position: absolute;
    z-index: 99;
    width: 100%;
    max-width: 750px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled("li")`
    padding: 0;
    margin: 0;
    list-style: none;
`;
const Link = styled.div`
        display: block;
    padding: 1rem 2rem;
    transition: background-color 0.2s ease-out,color 0.2s ease-out;
    color: white;
    text-decoration: none;
    cursor: pointer;
    :hover {
        background-color: #00244A;
        color: #fff;
    }
`

const options = ["Mangoes", "Apples", "Oranges", "Mangoes", "Apples", "Oranges"];

// constructor(props) = () => {
//     super(props);
//     this.state = {value: options };
//     this.handleChange = this.handleChange.bind(this)
//   }

const TestButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  
//   const handleChange = event => {
//     this.setState({value: event.target.value})
//   }

  return (
<>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Jump to Country"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList 
            onSelect={handleSelect}
            >
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  <Link >{option}</Link>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      </>
  );
}

export default TestButton
