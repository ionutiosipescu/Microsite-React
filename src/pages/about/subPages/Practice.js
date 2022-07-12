import React from 'react'
import {
	Button,
	Card,
	Row,
	Col,
	Container,
	NavDropdown,
	Nav,
	Form,
	Navbar,
} from 'react-bootstrap'
import { routeNames } from '../../../routes/routes'
import YellowButton from '../../../components/buttons/YellowButton'
import { NewsCell } from './subPages.style'
import QualityCard from '../../../components/cards/QualityCard'
import { arrQualities } from '../../../utils/data'
import { CustomNavbar } from '../about.style'
import NavbarFilter from '../../../components/NavbarFilter'
import styled from 'styled-components'

const Practice = () => {
	return (
		<>
			<NavbarFilter />
			<Row className="justify-content-start">
				<Col className="p-5 col-8">
					<h1 className="my-4">
						Lorem IpsuCulpa sint magna ullamco irure reprehenderit occaecat
					</h1>
					<p>
						Esse incididunt deserunt esse aute. Est proident excepteur deserunt
						cillum labore ea esse eiusmod do aliqua anim. Eiusmod elit enim id
						dolor aliquip occaecat velit proident.
					</p>
					<p>
						Esse incididunt deserunt esse aute. Est proident excepteur deserunt
						in in minim sunt exercitation et ipsum dolor et. Commodo cillum
						dolor aliquip occaecat velit proident.
					</p>
				</Col>
			</Row>

			<Row className="justify-content-start">
				<Col className="col-6 my-5 ms-3 p-4 bg-secondary rounded">
					<h4 className="fw-bold text-info">Our Capabilities</h4>
					<Row className="my-4 fw-bold">
						<Col>
							<div>Digital Strategy</div>
							<div>Digital Strategy</div>
						</Col>
						<Col>
							<div>Digital Strategy</div>
							<div>Digital Strategy</div>
						</Col>
						<Col>
							<div>Digital Strategy</div>
							<div>Digital Strategy</div>
							{/* <img src={digital}></img> */}
						</Col>
					</Row>
					<YellowButton
						text={'Read more about our Capabilities'}
					></YellowButton>
				</Col>
			</Row>

			<h2 className="fw-bold">Related Insight</h2>
			<Row>
				<Col>
					<NewsCell>
						<h4 className="fw-bold">Lorem</h4>
						<p className="text-muted">15/5/2020</p>
					</NewsCell>
					<NewsCell>
						<h4 className="fw-bold">Lorem</h4>
						<p className="text-muted">15/5/2020</p>
					</NewsCell>
					<NewsCell>
						<h4 className="fw-bold">Lorem</h4>
						<p className="text-muted">15/5/2020</p>
					</NewsCell>
				</Col>
				<Col>
					<NewsCell>
						<h4 className="fw-bold">Lorem</h4>
						<p className="text-muted">15/5/2020</p>
					</NewsCell>
					<NewsCell>
						<h4 className="fw-bold">Lorem</h4>
						<p className="text-muted">15/5/2020</p>
					</NewsCell>
					<NewsCell>
						<h4 className="fw-bold">Lorem</h4>
						<p className="text-muted">15/5/2020</p>
					</NewsCell>
				</Col>
			</Row>
			<Row>
				<Col>
					<QualityCard quality={arrQualities[4]} />
				</Col>
			</Row>
		</>
	)
}

export default Practice
