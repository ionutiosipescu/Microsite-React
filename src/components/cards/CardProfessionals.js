import React from 'react'
import Connor from '../../assets/images/ConnorWine'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'
import { size } from '../../utils/breakpoints'
import { ChevronRightWhite } from '../../assets/icons'

const Card = styled.div`
	display: flex;
	background: var(--darkBlue);
	width: 100%;
	height: 200px;
`

const CardBody = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

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

	@media ${size.lg} {
		flex-direction: column;
	}
`

const ImageContainer = styled.div`
	background: gray;
	img {
		width: 100px;
		height: 100%;
		object-fit: cover;
	}

	@media ${size.sm} {
		img {
			width: 125px;
		}
	}

	@media ${size.md} {
		img {
			width: 150px;
		}
	}

	@media ${size.lg} {
		img {
			width: 170px;
		}
	}
`

const Content = styled.div`
	padding: 20px;
	text-transform: uppercase;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${size.lg} {
		padding: 0 20px;
	}
`

const ArrowContainer = styled.div`
	display: flex;
	margin-left: auto;
	cursor: pointer;

	:hover {
		background: var(--hover-blue);
	}

	@media ${size.lg} {
		display: none;
	}
`

const Name = styled.a`
	color: white;
	text-decoration: none;
	font-size: 1.875rem;
	font-weight: bold;
	line-height: 0.8;
	padding-bottom: 5px;
	cursor: pointer;

	:hover {
		color: var(--hover-blue);
	}
`

const Info = styled.a`
	color: var(--orange2);
	text-decoration: none;
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 1;
	cursor: pointer;

	:hover {
		color: var(--hover-blue);
	}
`

const Position = styled.p`
	color: var(--orange2);
	text-decoration: none;
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 1;
	margin: 0;
`

const CardProfessionals = ({
	name,
	imageSrc,
	position,
	country,
	buttonText,
}) => {
	return (
		<Card>
			<ImageContainer>
				<img src={imageSrc || Connor} alt="portrait"></img>
			</ImageContainer>

			<CardBody>
				<Content>
					<Name>{name || 'Connor Colquhoun'}</Name>
					<Position>{position || 'wine connoisseur'}</Position>
					<Info>{country} </Info>
				</Content>
				{buttonText && (
					<YellowButton
						text={buttonText}
						radius={'0'}
						height={'50px'}
						display={'none'}
					/>
				)}
			</CardBody>
			<ArrowContainer>
				<ChevronRightWhite width="50px" />
			</ArrowContainer>
		</Card>
	)
}

export default CardProfessionals
