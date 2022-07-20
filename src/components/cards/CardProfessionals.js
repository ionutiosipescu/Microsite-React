import React from 'react'
import image from '../../assets/images/ConnorWine'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'
import { size } from '../../utils/breakpoints'
import { ChevronRight } from '../../assets/icons'

const Card = styled.div`
	display: flex;
	background: var(--darkBlue);
	transform: scale(${props => props.transform || 1});
	/* height: 95.297px; */
	height: 5.9565rem;
	width: 100%;
	@media ${size.sm} {
		/* height: 146.609px; */
		height: 9.1633rem;
	}
	@media ${size.lg} {
		/* height: 168.609px; */
		height: 10.539rem;
	}
	@media ${size.xl} {
		/* height: 219.922px; */
		height: 13.746rem;
	}
`

const CardBody = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: -webkit-fill-available;

	@media ${size.lg} {
		flex-direction: column;
	}
	button {
		transition: background-color 0.2s ease-out;
	}
	button:hover {
		background-color: var(--hover-blue);
		border-color: var(--hover-blue);
	}
	@media ${size.lg} {
		button {
			display: block;
		}
	}
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
	justify-content: center;

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

	h2,
	.country {
		transition: color 0.2s ease-out;
		cursor: pointer;
	}

	h2:hover,
	.country:hover {
		color: var(--hover-blue);
	}
	div {
		font-size: 16px;
	}
`
const CardArrow = styled.div`
	flex: 1;
	display: flex;
	justify-content: end;
	align-items: center;
	button:hover {
		background-color: var(--hover-blue);
	}
`
const Button = styled.button`
	background-color: rgba(0, 0, 0, 0);
	border: 0;
	height: 100%;
	max-width: 30px;
	transition: background-color 0.2s ease-out;
	@media ${size.lg} {
		display: none !important;
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
						<div className="country">{country} </div>
					</div>
				</Content>
				{buttonText ? (
					<YellowButton
						className="CardProfessionalsButton"
						text={buttonText}
						radius={'0'}
						height={'50px'}
						display={'none'}
					/>
				) : (
					''
				)}
				<CardArrow>
					<Button className="whitebutton">
						<ChevronRight />
					</Button>
				</CardArrow>
			</CardBody>
		</Card>
	)
}

export default CardProfessionals
