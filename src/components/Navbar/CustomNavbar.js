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
import { StyledNavbar, StyledDropdown } from './CustomNavbar.style'
import { routeNames } from '../../routes/routes'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const InPageNavbar = () => {
	return (
		<StyledNavbar className="py-0" expand="lg">
			<Container fluid className="pr-1">
				<StyledNavbar.Brand href={routeNames.home}>Logo</StyledNavbar.Brand>
				<StyledNavbar.Toggle aria-controls="navbarScroll" />
				<StyledNavbar.Collapse id="navbarScroll">
					<Nav className="flex-grow-1">
						<Nav.Link className="active web-title" href={routeNames.home}>
							{'HLS Home'}
						</Nav.Link>

						<StyledDropdown
							className=""
							title="Expertise"
							id="navbarScrollingDropdown"
						>
							<NavDropdown.Item
								href={routeNames.expertiseQuality}
								id="something"
							>
								{'Quality Efficiency Improvement'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.expertisePharma}>
								{'Pharma & MedTech Portfolio Management'}
							</NavDropdown.Item>
						</StyledDropdown>

						<Nav.Link className="active web-title" href={routeNames.leadership}>
							{'Leadership'}
						</Nav.Link>
						<Nav.Link className="active web-title" href={routeNames.contact}>
							{'Contact'}
						</Nav.Link>
					</Nav>
					{/* <Nav className="bg-primary h-100 p-2"> */}
					<SearchBar />
					{/* </Nav> */}
				</StyledNavbar.Collapse>
			</Container>
		</StyledNavbar>
	)
}

export default InPageNavbar
