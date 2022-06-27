import React from 'react'
import image from '../images/ConnorWine'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'

const Card = styled.div`
	display: flex;

	background: #2f2f7e;
`

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`

const ImageContainer = styled.div`
	background: gray;
	img {
		width: 200px;
	}
`

const Content = styled.div`
	padding: 20px;
	text-transform: uppercase;
	color: var(--orange2);

	h4 {
		padding: 0;
		margin: 0;
		color: white;
		text-transform: uppercase;
	}
`

const CardProfessionals = ({ name, imageSrc, position, country }) => {
	return (
		<Card>
			<ImageContainer>
				<img src={imageSrc} alt="portrait"></img>
			</ImageContainer>

			<CardBody>
				<Content>
					<h4>{name}</h4>
					<div>{position}</div>
					<div>{country}</div>
				</Content>
				<YellowButton text={'connect'} radius={'0'} />
			</CardBody>
		</Card>
	)
}

export default CardProfessionals
