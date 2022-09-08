import React, { useState, handleSelect } from "react";
import styled from "styled-components";


const DropDownContainer = styled("div")`
    max-width: 250px;
`;

const DropDownHeader = styled("div")`
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
const Link = styled.a`
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

const TestButton = ({location}) => {
  // let fullLink = location?.map((location, index) => {
  //   return "#" + location.country.idd
  // })
  // console.log(location)
  // console.log(country)


   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);
   const [isSelected, setisSelected] = useState(null)

   const toggling = () => setIsOpen(!isOpen);

   const onOptionClicked = value => () => {
     setSelectedOption(value);
   };

// const changeType = (e) =>{
// console.log(e.target.value)
// }
const handleClick = (location) => {
  setSelectedOption(location.country);
  setIsOpen(false);
  setisSelected(location.country.country)
  console.log(location.idd)
}
return(
      
<>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Jump to Country"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList >
              {location?.map((location, index) => (
                <ListItem onClick={()=>handleClick(location.country)} key={index}>
                  <Link  href={"#" + location.country.idd}>{location.country.country}</Link>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      </>
)

}
export default TestButton







// const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 10;
// `;


// const Select = styled.select`

//   // A reset of styles, including removing the default dropdown arrow
//   appearance: none;
//   // Additional resets for further consistency
//    margin: 0;
//   width: 100%;
//   font-family: inherit;
//   cursor: inherit;
//   line-height: inherit; 


// `

// const Option = styled.option`

// `





        {/* <Option value="" disabled selected hidden className="first-item">Please Choose</Option> */}


//   <select
//   required="required"
//   name="productType"
//   id="productType"
//   defaultValue={''}
//   onChange={changeType}
// >
//   <option value="" disabled hidden>
//     Select a Type
//   </option>
//   <option value="DVD">DVD</option>
//   <option value="Furniture">Furniture</option>
//   <option value="Book">Book</option>
// </select>
  
// const changeType = e => {
//   setCurrentType(e.target.value);
// }





//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const toggling = () => setIsOpen(!isOpen);

//   const onOptionClicked = value => () => {
//     console.log(value)

//     setSelectedOption(value);
//     setIsOpen(false);
//   };





// REACT INSPIRATION FOR DROPDOWN
//   return (
// <>
//       <DropDownContainer>
//         <DropDownHeader onClick={toggling}>
//           {selectedOption || "Jump to Country"}
//         </DropDownHeader>
//         {isOpen && (
//           <DropDownListContainer>
//             <DropDownList>
//               {options.map((option, index) => (
//                 <ListItem onClick={(option)=>onOptionClicked(option)} key={index}>
//                   <Link >{option}</Link>
//                 </ListItem>
//               ))}
//             </DropDownList>
//           </DropDownListContainer>
//         )}
//       </DropDownContainer>
//       </>
//   );
// }


// REACT WITH SELECT
{/* <>
<DropDownContainer>
        <DropDownHeader onClick={toggling}>
        {selectedOption || "Jump to Country"}
       </DropDownHeader>
              {isOpen && (
          <DropDownListContainer>
              <DropDownList>
                  <Select
                  onChange={changeType}
                  >
                      <ListItem><Option>hey</Option></ListItem>
                      <ListItem><Option>hey</Option></ListItem>
                      <ListItem><Option value='something'>hey</Option></ListItem>
                  </Select>
              </DropDownList>
      </DropDownListContainer>
              )}
</DropDownContainer>
</> */}