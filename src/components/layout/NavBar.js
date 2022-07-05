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
import { CustomNavbar } from './NavBar.style'
import { routeNames } from '../../routes/routes'
import { Search } from '../../assets/icons'
import "./NavBar.style.js"
import styled from 'styled-components'



const NavBar = () => {
	const CustomNavbar = styled(Navbar)`
#navbarScrollingDropdown, .web-title {
    color: rgba(0,0,0,.9) ;
    padding: 20px 12px  !important;
}
.nav-item.show.dropdown{
    background-color: #00254A;
}
.nav-item.show.dropdown a {
    color: white !important;
 }
.nav-item.show.dropdown div {
    background-color: #00254A;
    border-radius: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border: 0;

 }
.nav-item.show.dropdown a {
     background-color: #00254A;
 }
`
	return (
		<CustomNavbar className='py-0' bg="" expand="lg">
			<Container fluid>
				<CustomNavbar.Brand href={routeNames.home}>Logo</CustomNavbar.Brand>
				<CustomNavbar.Toggle aria-controls="navbarScroll" />
				<CustomNavbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 fw-bold f">
						<Nav.Link className='active web-title' href={routeNames.home}>{'HLS Home'}</Nav.Link>

						<NavDropdown className='' title="Expertise" id="navbarScrollingDropdown">
							<NavDropdown.Item href={routeNames.expertiseQuality}>
								{'Quality Efficiency Improvement'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.expertisePharma}>
								{'Pharma & MedTech Portfolio Management'}
							</NavDropdown.Item>
						</NavDropdown>

						{/* <Nav.Link href={routeNames.insight}>{"Insights"}</Nav.Link> */}
						<NavDropdown className='' title="Insights" id="navbarScrollingDropdown">
							<NavDropdown.Item href={routeNames.insightLatest}>
								{'Latest Insights'}
							</NavDropdown.Item>
							<NavDropdown.Item href={routeNames.insightCase}>
								{'Case Studies'}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className='active web-title' href={routeNames.leadership}>{'Leadership'}</Nav.Link>
						<Nav.Link className='active web-title' href={routeNames.contact}>{'Contact'}</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link className='' href="#action2">{<Search />}</Nav.Link>
					</Nav>
				</CustomNavbar.Collapse>
			</Container>
		</CustomNavbar>
	)
}

export default NavBar
