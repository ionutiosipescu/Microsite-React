import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
	HeroSection,
	Services,
	CardProfessionals,
	CarouselSection,
} from '../../components/cards'
import BreadCrumb from '../../components/BreadCrumb'
import Connor from '../../assets/images/ConnorWine'
import { arr } from '../../utils/data'

const ExpertisePharma = () => {
	// Card content
	const cardContent = {
		imageSrc: Connor,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
		// country: 'japan',
		buttonText: 'connect',
	}

	return (
		<>
			<HeroSection
				title={'pharma & medtech portfolio management'}
				pageTitle={'Expertise'}
			/>
			<Row className="p-0 m-0 d-flex flex-column flex-lg-row ">
				<Col className="m-4 flex-grow-1">
					<BreadCrumb
						route={'Expertise'}
						subRoute={'Pharma & MedTech portfolio management'}
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
				<Col className="border-start border-secondary  p-lg-0 m-4 m-lg-0 flex-grow-0 gap-3">
					<CardProfessionals {...cardContent} />
					<CardProfessionals {...cardContent} />
				</Col>
			</Row>
			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="#002B49"
				arr={arr}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#FFF"
				carouselDotBackground="#002b49"
			/>
		</>
	)
}

export default ExpertisePharma
