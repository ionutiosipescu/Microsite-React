import React from 'react'
import image from '../../assets/images/ConnorWine'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'
import { size } from '../../utils/breakpoints'

const Card = styled.div`
	display: flex;
	background: var(--darkBlue);
	/* min-width: 400px;
	min-height: 300px; */
	/* max-width: 500px; */
	/* min-height: 300px; */
	transform: scale(${props => props.transform || 1});
	height: 95.297px;
	width: 100%;
	@media ${size.sm} {
		height: 146.609px;
	}		
	@media ${size.lg} {
		height: 168.609px;
	}		
	@media ${size.xl} {
		height: 219.922px;
	}		
`

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: -webkit-fill-available;
	/* flex: 2; */
	/* align-items: center; */
	/* width: 100px; */
`

const ImageContainer = styled.div`
	background: gray;
	/* width: 300px; */
	/* flex: 1; */
	img {
		/* width: 200px; */
		width: 65px;
		height: 100%;
		object-fit: cover;
	}
	@media ${size.sm} {
		img {
			width: 100px;
		}
	}	
	@media ${size.lg} {
		img {
			width: 115px;
		}
	}	
	@media ${size.xl} {
		img {
			width: 150px;
		}
	}	
`

const Content = styled.div`
	padding: 20px;
	text-transform: uppercase;
	color: var(--orange2);
	font-weight: bold;
	/* width: 100%; */
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	/* justify-content: space-between; */
	/* gap: 1rem; */
	@media ${size.lg} {
		padding: 0 20px;
		h2 {
			font-size: 15px !important;
		}
		div {
		font-size: 10px !important;
		}
		.CardProfessionalsButton {
			height: 50px !important;
		}
	}	

	h2 {
		padding: 0;
		margin: 0;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 20px;
	}	

	div {
		font-size: 16px;
	}
`

const CardProfessionals = ({
	name,
	imageSrc,
	position,
	country,
	buttonText,
	transform,
}) => {
	return (
		<Card transform={transform}>
			<ImageContainer>
				<img src={imageSrc || image} alt="portrait"></img>
			</ImageContainer>

			<CardBody>
				<Content>
					<h2>{name || 'Connor Colquhoun'}</h2>
					<div>
						<div>{position || 'wine connoisseur'}</div>
						<div>{country} </div>
					</div>
				</Content>
				{buttonText ? <YellowButton className="CardProfessionalsButton" text={buttonText} radius={'0'} height={'50px'} display={"none"}/> : ''}
			</CardBody>
		</Card>
	)
}

export default CardProfessionals
