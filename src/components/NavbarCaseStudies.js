import React from 'react'
import {
	Container,
	Nav,
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap'
import { routeNames } from '../../routes/routes'
import { Search } from '../../assets/icons'
import styled from 'styled-components'

const handleFilterArticles = (title) => {
    var newArr = arr.filter((post) => post.category == title.toLowerCase());
    setArticles(newArr);
  };

const NavbarCaseStudies = () => {
    const CustomNavbar = styled(Nav)`
        width: 100%;
        display: flex;
        justify-content: space-around;

    `

    return (
        <CustomNavbar className="bg-primary"/>

    )

}

export default NavbarCaseStudies; 

const arr1 = [
    "Expertise",
    "Industry",
    "Country",
    "Year",
    "Buletin Type",
    "Media Type",
  ];

{/* <div className="container-fluid d-flex justify-content-around  bg-primary ">
{arr1?.map((element, key) => (
  <div className=" p-2 " id={key}>
    <button
      type="button"
      className="btn btn-primary border-0"
      onClick={() => handleFilterArticles(element)}
    >
      {element}
    </button>
  </div>
))}
<div className=" p-2">
  <input
    className="h-100 rounded border-0 p-2"
    placeholder="Enter Author's Name"
  />
</div>
</div> */}
<NavDropdown className='' title="Expertise" id="navbarScrollingDropdown">
							<NavDropdown.Item href={routeNames.expertiseQuality}>
								{'Quality Efficiency Improvement'}
							</NavDropdown.Item>
						</NavDropdown>