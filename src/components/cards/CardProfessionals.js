import React from 'react'
import image from '../../assets/images/ConnorWine'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'

const Card = styled.div`
	display: flex;
	background: #2f2f7e;
	/* min-width: 400px;
	min-height: 300px; */
	max-width: 500px;
	min-height: 300px;
	transform: scale(${props => props.transform || 1});
`

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* flex: 2; */
	/* align-items: center; */
	/* width: 100px; */
`

const ImageContainer = styled.div`
	background: gray;
	width: 300px;
	/* flex: 1; */
	img {
		/* width: 200px; */
		width: 100%;
		height: 100%;
		object-fit: cover;
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

	h2 {
		padding: 0;
		margin: 0;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
	}

	div {
		font-size: 1.5rem;
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
				{buttonText ? <YellowButton text={buttonText} radius={'0'} /> : ''}
			</CardBody>
		</Card>
	)
}

export default CardProfessionals
