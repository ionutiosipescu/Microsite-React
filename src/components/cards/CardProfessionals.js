import React from 'react'
import { Container } from 'react-bootstrap'
import image from '../images/ConnorWine'
import styled from 'styled-components'

const Card = styled.div`
	display: flex;
	width: 400px;
	background: var(--darkBlue);
`

const CardBody = styled.div`
	width: 100%;
	padding: 30px;

	h5 {
		text-transform: uppercase;
		color: white;
		// margin-bottom: 10px;
	}

	p {
		text-transform: uppercase;
		color: var(--orange2);
		padding: 0;
		margin: 0;
	}
`
const ImageContainer = styled.div`
	background: gray;
	img {
		width: 200px;
	}
`

const CardProfessionals = ({ imageSrc, name, position }) => {
	return (
		<Card>
			<ImageContainer>
				<img src={imageSrc} alt="portrait"></img>
			</ImageContainer>

			<CardBody>
				<h5>{name}</h5>
				<div>
					<p>{position}</p>
				</div>
			</CardBody>
		</Card>
	)
}

export default CardProfessionals
