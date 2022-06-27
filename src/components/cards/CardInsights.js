import React from 'react'
import styled from 'styled-components'
import { ChevronRight } from '../icons'

const Card = styled.div`
	display: flex;
	padding: 20px;
	border-bottom: 1px solid black;
	gap: 20px;
`
const ImageContainer = styled.div`
	background: gray;
	width: 200px;
	// height: 150px;
	// flex: 1;

	img {
		width: 100%;
		// height: 100%;
		// object-fit: fill;
	}
`
const CardBody = styled.div`
	flex: 5;

	h6 {
		color: #5656db;
		text-transform: uppercase;
	}

	h4 {
	}

	p {
	}
`
const CardArrow = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`

const CardInsights = ({ image, type, title, content }) => {
	return (
		<Card>
			<ImageContainer>
				<img src={image} alt="Insight photo" />
			</ImageContainer>
			<CardBody>
				<h6>{type}</h6>
				<h4>{title}</h4>
				<p className="text-muted">{content}</p>
			</CardBody>
			<CardArrow>
				<ChevronRight />
			</CardArrow>
		</Card>
	)
}

export default CardInsights
