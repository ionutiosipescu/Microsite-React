import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
	StyledCol2,
	StyledCol1,
	StyledRow,
} from '../../components/layout/Rows&Collumns/Rows&Collumns.style.js'

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
				title={'quality efficiency improvment'}
				pageTitle={'Expertise'}
			/>
			<StyledRow>
				<StyledCol1>
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
				</StyledCol1>
				<StyledCol2>
					<CardProfessionals {...cardContent} />
					<CardProfessionals {...cardContent} />
				</StyledCol2>
			</StyledRow>
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
