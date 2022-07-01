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

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href={routeNames.home}>Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 fw-bold f">
						<Nav.Link href={routeNames.home}>{'HLS Home'}</Nav.Link>

						<NavDropdown title="Expertise" id="navbarScrollingDropdown">
							<NavDropdown.Item href={routeNames.expertiseQuality}>
								{'Quality Efficiency Improvement'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.expertisePharma}>
								{'Pharma & MedTech Portfolio Management'}
							</NavDropdown.Item>
						</NavDropdown>

						{/* <Nav.Link href={routeNames.insight}>{"Insights"}</Nav.Link> */}
						<NavDropdown title="Insights" id="navbarScrollingDropdown">
							<NavDropdown.Item href={routeNames.insightLatest}>
								{'Latest Insights'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.insightCase}>
								{'Case Studies'}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href={routeNames.leadership}>{'Leadership'}</Nav.Link>
						<Nav.Link href={routeNames.contact}>{'Contact'}</Nav.Link>
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
