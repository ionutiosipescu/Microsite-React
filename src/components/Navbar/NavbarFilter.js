import React, { useEffect, useState } from 'react'
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

const CustomNavbar = styled(Navbar)`
	background: var(--darkBlue);

	.navbarScrollingDropdown,
	.web-title {
		color: #fff;
		padding: 20px 12px !important;
	}
	.nav-item.show.dropdown {
		background-color: #002b49;
	}
	.nav-item.show.dropdown a {
		color: #fff !important;
	}
	.nav-item.show.dropdown div {
		background-color: #002b49;
		border-radius: 0;
		margin-top: 0;
		padding-bottom: 0.5rem;
		border: 0;
	}
	.nav-item.show.dropdown a {
		background-color: #002b49;
	}
	.nav-link {
		color: #fff !important;
	}
	.nav-item:hover .dropdown-menu {
		display: block !important;
	}
`

const NavbarFilter = () => {
	// const [articles, setArticles] = useState([...arr]);

	// const handleFilterArticles = (title) => {
	//     var newArr = arr.filter((post) => post.category == title.toLowerCase());
	//     setArticles(newArr);
	//   };
	const [show, setShow] = useState(false)
	const showDropdown = e => {
		setShow(show)
	}
	const hideDropdown = e => {
		setShow(false)
	}

	return (
		<CustomNavbar className="p-0" expand="lg">
			<Container fluid>
				<CustomNavbar.Toggle aria-controls="navbarScroll" />
				<CustomNavbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 fw-bold f">
						{arr1?.map(element => {
							return (
								<NavDropdown
									className=" p-2 navbarScrollingDropdown "
									title={element.title}
									id="navbarScroll"
									renderMenuOnMount={true}
									onMouseEnter={showDropdown}
									onMouseLeave={hideDropdown}
								>
									{element?.sublinks.map(link => {
										return (
											<NavDropdown.Item className="" href={'#'}>
												{link}
											</NavDropdown.Item>
										)
									})}
								</NavDropdown>
							)
						})}
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
		title: 'Expertise',
		sublinks: ['Link1', 'Link2', 'Link3'],
	},
	{
		id: 2,
		title: 'Industry',
		sublinks: ['Link1', 'Link2', 'Link6'],
	},
	{
		id: 3,
		title: 'Country',
		sublinks: ['Link1', 'Link2', 'Link3'],
	},
	{
		id: 4,
		title: 'Year',
		sublinks: ['Link1', 'Link2', 'Link3'],
	},
	{
		id: 5,
		title: 'Media Type',
		sublinks: ['Link1', 'Link2', 'Link3'],
	},
]

export default NavbarFilter
