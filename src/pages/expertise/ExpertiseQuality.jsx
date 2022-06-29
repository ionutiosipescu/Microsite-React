import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { HeroSection, Services, CardOverview } from '../../components/cards'
import Connor from '../../components/images/ConnorWine'

const ExpertiseQuality = () => {
	// Card content
	const cardContent = {
		imageSrc: Connor,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
		country: 'japan',
	}

	return (
		<>
			<HeroSection
				title={'pharma & medtech portfolio management'}
				pageTitle={'Expertise'}
			/>
			<Row>
				<Col className="col-8 m-4">
					<p>
						Sit excepteur ullamco tempor excepteur fugiat amet culpa consectetur
						ea ut fugiat. Laborum irure non qui nulla minim anim reprehenderit
						Sit excepteur ullamco tempor excepteur fugiat amet culpa consectetur
						ea ut fugiat. Laborum irure non qui nulla minim anim
						reprehenderitSit excepteur ullamco tempor excepteur fugiat amet
						culpa consectetur ea ut fugiat. Laborum irure non qui nulla minim
						anim reprehenderit
					</p>

					<h3 className="text-primary fw-bold">Our Services</h3>
					<Services
						title="Strategic Transformation"
						conntent={
							'ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim '
						}
					/>
					<Services
						title="Strategic Transformation"
						conntent={
							'ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim '
						}
					/>
					<Services
						title="Strategic Transformation"
						conntent={
							'ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim '
						}
					/>
					<Services
						title="Strategic Transformation"
						conntent={
							'ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim '
						}
					/>
				</Col>
				<Col>
					<CardOverview {...cardContent} />
					<CardOverview {...cardContent} />
				</Col>
			</Row>
		</>
	)
}

export default ExpertiseQuality
