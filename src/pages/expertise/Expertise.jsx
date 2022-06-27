import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from '../../components/cards/HeroSection'
import CardOverview from '../../components/cards/CardOverview'
import Connor from '../../components/images/ConnorWine'

const Expertise = () => {
	// Card content
	const cardContent = {
		imageSrc: Connor,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
		country: 'japan',
	}

	return (
		<Container>
			<HeroSection />
			<Row>
				<Col className="col-8">
					<p>
						Sit excepteur ullamco tempor excepteur fugiat amet culpa consectetur
						ea ut fugiat. Laborum irure non qui nulla minim anim reprehenderit
					</p>
				</Col>
				<Col>
					<CardOverview {...cardContent} />
					<CardOverview {...cardContent} />
				</Col>
			</Row>
		</Container>
	)
}

export default Expertise
