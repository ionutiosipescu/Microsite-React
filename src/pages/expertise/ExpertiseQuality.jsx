import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
	HeroSection,
	Services,
	CardOverview,
	CarouselSection,
} from '../../components/cards'
import CurrentRoute from '../../components/CurrentRoute'

import Connor from '../../components/images/ConnorWine'

const ExpertiseQuality = () => {
	// Card content
	const cardContent = {
		imageSrc: Connor,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
		// country: 'japan',
	}
	const arr = [
		{
			id: 1,
			title: 'lorem-ipsum.line1',
			date: new Date().toLocaleDateString(),
			desciption:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
		},
		{
			id: 2,
			title: 'lorem-ipsum.2',
			date: new Date().toLocaleDateString(),
			desciption:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
		},
		{
			id: 3,
			title: 'lorem-ipsum.3',
			date: new Date().toLocaleDateString(),
			desciption:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
		},
		{
			id: 4,
			title: 'lorem-ipsum.4',
			date: new Date().toLocaleDateString(),
			desciption:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
		},
	]

	return (
		<>
			<HeroSection
				title={'quality efficiency imporovement'}
				pageTitle={'Expertise'}
			/>
			<Row className="p-0 m-0">
				<Col className="col-8 m-4">
					<CurrentRoute
						route={'Expertise'}
						subRoute={'Quality Efficiency Imporovement'}
					/>
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
				<Col className="border-start border-secondary m-0 p-0">
					<CardOverview {...cardContent} />
					<CardOverview {...cardContent} />
				</Col>
			</Row>
			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="var(--darkBlue)"
				arr={arr}
				titleColor="aqua"
			/>
		</>
	)
}

export default ExpertiseQuality
