import digital from '../../components/images/digital'
import React from 'react'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'
import image from '../../components/images/ConnorWine'

const Hero = styled.div`
	height: 400px;
	width: 100%;
	padding: 70px;
	background-size: cover;
	background-image: url(${props => props.backgroundUrl || digital});

	text-transform: uppercase;

	h1 {
		color: white;
		font-size: 5rem;
		margin: 0;
		line-height: 100%;
	}

	h4 {
		color: var(--orange2);
		margin: 0;
	}
`

const HeroSection = ({ title, backgroundUrl, buttonText, pageTitle }) => {
	return (
		<Hero backgroundUrl={backgroundUrl}>
			{pageTitle ? <h4>{pageTitle}</h4> : ''}
			<h1>{title}</h1>
			{buttonText ? <YellowButton text={buttonText} /> : ''}
		</Hero>
	)
}

export default HeroSection
