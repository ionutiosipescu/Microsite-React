import React from 'react'
import { Container, NavDropdown, Nav, Form, Button } from 'react-bootstrap'
import CardProfessionals from '../../../components/cards/CardProfessionals'
import { CardHolder } from './subPages.style'
import image from '../../../components/images/ConnorWine'
import { CustomNavbar } from './subPages.style.js'

const Professionals = () => {
	// Professionals from backend
	const professionals = {
		imageSrc: image,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
	}

	return (
		<>
			<h2>
				Qui excepteur aute dolore proident adipisicing ullamco laborum.
				consectetur.
			</h2>
			<p>
				Et enim ex magna aliqua deserunt aliqua nisi cupidatat. Sit irure aliqua
				aute aliquip ea nisi culpa aliqua nisi quis nostrud cillum culpa nulla.
				Cillum do incididunt eu cupidatat. Velit reprehenderit eiusmod anim amet
				id aliquip enim eiusmod culpa. Consequat quis ut incididunt duis nulla
				magna eiusmod est nulla eiusmod elit laborum do.
			</p>
			<CustomNavbar expand="lg">
				<Container fluid>
					<CustomNavbar.Toggle aria-controls="navbarScroll" />
					<CustomNavbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<NavDropdown title="Expertise" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Industry" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Country" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="City" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
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

			<h3 className="m-3">Leaders</h3>

			{/* <CardProfessionals /> */}

			<CardHolder>
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
				<CardProfessionals {...professionals} />
			</CardHolder>
		</>
	)
}

export default Professionals
