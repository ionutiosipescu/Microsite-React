import React from "react"
// import * as S from "./styles/ButtonJumpToCountry.style"
import styled from "styled-components"
import { ChevronRight } from "../../assets/icons"
import { NavDropdown, Dropdown, DropdownButton   } from "react-bootstrap"

const Container = styled.div`
/* #select {
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
} */
    .here{
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
    max-width: 250px;
    position: relative;
    :hover{
        color: #fff;
    }
    }
    
    .here:after{
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

`


const ButtonJumpToCountry = () => {
  
    return (
        
        // <DropdownButton className="here"  title="Jump To Country" >
        //     <Container >
        //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //     </Container>
        // </DropdownButton>
        <Container>
                <div className="here">{"Jump To Country"}</div>
        </Container>
    )
  }
  
  export default ButtonJumpToCountry

  