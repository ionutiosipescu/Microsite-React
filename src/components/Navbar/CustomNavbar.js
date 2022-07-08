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

const CustomNavbar = styled(Navbar)`
	padding: 1rem 0;
	margin: 0;
	background: var(--darkBlue);
	font-size: 1.5rem;

	/* 
	.dropdown-menu.show {
		background: var(--darkBlue1);
	}

	.dropdown-toggle.nav-link {
		color: white;
	}

	.dropdown-item {
		color: white;
	}

	.nav-item.dropdown {
		color: white;
	}

	.dropdown-toggle.nav-link {
		color: white;
	}
	.nav-link {
		color: white;
	}

	.active.web-title.nav-link {
		color: white;
	}

	.nav-item {
		color: white;
	} */
`

const InPageNavbar = () => {
	return (
		<CustomNavbar expand="lg" className="bg-danger">
			<Container fluid>
				<CustomNavbar.Toggle aria-controls="navbarScroll" />
				<CustomNavbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 fw-bold f">
						<NavDropdown title="Expertise" id="navbarScrollingDropdown">
							<NavDropdown.Item
								href={routeNames.expertiseQuality}
								id="something"
							>
								{'Quality Efficiency Improvement'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.expertisePharma}>
								{'Pharma & MedTech Portfolio Management'}
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown
							className="text-white"
							title="Insights"
							id="navbarScrollingDropdown"
						>
							<NavDropdown.Item
								href={routeNames.insightLatest}
								className="text-reset"
							>
								{'Latest Insights'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.insightCase}>
								{'Case Studies'}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className="active web-title" href={routeNames.leadership}>
							{'Leadership'}
						</Nav.Link>
						<Nav.Link className="active web-title" href={routeNames.contact}>
							{'Contact'}
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link className="" href="#action2">
							{<Search />}
						</Nav.Link>
					</Nav>
				</CustomNavbar.Collapse>
			</Container>
		</CustomNavbar>
	)
}

export default InPageNavbar
