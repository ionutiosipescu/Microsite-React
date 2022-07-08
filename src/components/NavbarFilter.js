import React, {useEffect, useState} from 'react'
import {
	Container,
	Nav,
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap'
import { routeNames } from '../routes/routes'
import { Search } from '../assets/icons'
import styled from 'styled-components'
import { ListGroup } from 'react-bootstrap'

const NavbarFilter = () => {
	const CustomNavbar = styled(Navbar)`
	background: #002B49;

.navbarScrollingDropdown, .web-title {
    color: #fff ;
    padding: 20px 12px  !important;
	cursor: pointer;
}
.nav-item.show.dropdown ul{
    background-color: var(--darkBlue1);
	padding: 12px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	height: auto;
	max-width: 287%;
    width: 501px;
	justify-content: space-evenly;
    align-items: center;
    text-align: center;
}
.nav-item.show.dropdown li {
    color: #fff !important;
	flex: none;
    padding: 0px 0px 15px 9px;
    transition: all 0.15s ease-in;
    font-size: 14px;
	width: 134.344px;
	height: auto;

 }
.nav-item.show.dropdown li:hover {
    color: #0085CA !important;	
 }

 .nav-item.dropdown {
    transition: all 0.2s ease-in;
	height: 65px;
	width: 165px;
	display: flex;
    justify-content: center;
    align-items: center;
 }
 .nav-item.dropdown:hover {
	background-color: var(--darkBlue1);
 }
 .nav-item.show.dropdown {
	background-color: var(--darkBlue1);
 }
.nav-item.show.dropdown div {
    background-color: #002B49;
    border-radius: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border: 0;

 }
.nav-link {
color: #fff !important;
 }
.dropdown-menu.show {
	padding: 0 !important;
}
#list-group-li {
	flex: none !important;
	text-decoration: none;
	flex-direction: row;
}
`

	return (
		<CustomNavbar className="p-0" expand="lg">
			<Container fluid className='p-0'>
				<CustomNavbar.Toggle aria-controls="navbarScroll" />
					<CustomNavbar.Collapse id="navbarScroll" className=''>
						<Nav className="me-auto my-2 my-lg-0 fw-bold " >

							{arr1?.map((element) => {
								return (
									<NavDropdown className=" p-2 navbarScrollingDropdown " 
									title={element.title}
									id="navbarScroll"
									>
									<ListGroup as="ul" className=''>	
									{element?.sublinks.map((link) => {
										return (
											<ListGroup rel={element.id} as="li" href="#" id="list-group-li">	
										
											{link}
										
										</ListGroup>
										)
									})}
								
								</ListGroup>
								</NavDropdown>
							)})}
							

						</Nav>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
							</Form>
					</CustomNavbar.Collapse>
			</Container>
		</CustomNavbar>
	)
}

const arr1 = [
	{
	id: 1,
	title:"Expertise", 
	sublinks: ["Link1","Link2", "Link3"]
},
	{
	id: 2,
	title:"Industry", 
	sublinks: ["Link1","Link2", "Link6","Link1","Link2", "Link3","Link1","Link2", "Link3","Link1","Link2", "Link3","Link1","Link1","Link1","Link1","Link1","Link1"]
},
	{
	id: 3,
	title:"Country", 
	sublinks: ["Link1","Link2", "Link3"]
},
	{
	id: 4,
	title:"Year", 
	sublinks: ["Link1","Link2", "Link3"]
},
	{
	id: 5,
	title:"Media Type", 
	sublinks: ["Link1","Link2", "Link3"]
}

  ];



export default NavbarFilter;
