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
import { routeNames } from '../../routes/routes/dashboard'
import { Search } from '../icons'

const NavBar = () => {
	console.log(routeNames)
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 fw-bold f">
						<Nav.Link href={routeNames.about}>{'About A&M'}</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>Expertise</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>Insight</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>#AMon Social</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>Our People</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>Global Locations</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>Careers</Nav.Link>
						<Nav.Link href={routeNames.dashboard}>A&M on COVID-19</Nav.Link>

						{/* <NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					<Nav>
						<Nav.Link href="#action2">{<Search />}</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
