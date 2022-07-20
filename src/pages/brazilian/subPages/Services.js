import React from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import image from '../../../assets/images/ConnorWine'
import TranslateButton from '../../../components/buttons/TranslateButton'

import { CardProfessionals, ServiceCard } from '../../../components/cards'
import {
	StyledCol2,
	StyledCol1,
	StyledRow,
} from '../../../components/layout/Rows&Collumns/Rows&Collumns.style.js'

const cardContent = {
	imageSrc: image,
	name: 'Connor Colquhoun',
	position: 'wine connoisseur',
	country: 'japan',
	buttonText: 'Connect',
}

const Services = () => {
	return (
		<>
			<StyledRow>
				<StyledCol1>
					<Row>
						<TranslateButton text1={'English'} text2={'Portuguese'} />
					</Row>
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

					<div className=" my-4  " style={{ background: 'white' }}>
						<Row className="rounded ">
							<Col>
								<h4 className="fw-bold " style={{ color: 'var(--lightBlue)' }}>
									Our Services
								</h4>
							</Col>
							<ServiceCard data={data} />
							<ServiceCard data={data} />
							<ServiceCard data={data} />
						</Row>
					</div>
				</StyledCol1>
				<StyledCol2>
					<CardProfessionals {...cardContent} />
					<CardProfessionals {...cardContent} />
				</StyledCol2>
			</StyledRow>
		</>
	)
}

export default Services

///data for cards
const data = {
	title: 'Coorporate Transformation',
	description:
		" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries",

	textButton: 'Contact our Team',
}
