import React from 'react'
import styled from 'styled-components'
import { ChevronRight } from '../../assets/icons'

const Card = styled.div`
	display: flex;
	padding: 20px;
	border-bottom: 1px solid gray;
	gap: 20px;
`
const ImageContainer = styled.div`
	background: gray;
	width: 150px;

	img {
		width: 100%;
	}
`
const CardBody = styled.div`
	flex: 5;
	padding: 10px;
	h6 {
		margin: 0;
		color: var(--hover-blue);
		text-transform: uppercase;
	}

	h4 {
		margin: 0;
		font-weight: bold;
	}

	p {
	}
`
const CardArrow = styled.div`
	flex: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
`

const CardInsights = ({ image, type, title, content, href }) => {
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
