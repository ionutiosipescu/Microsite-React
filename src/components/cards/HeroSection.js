import digital from '../../assets/images/digital'
import React from 'react'
import styled from 'styled-components'
import image from '../../assets/images/ConnorWine'
import HeroCardBrazilTransparent from './HeroCardBrazilTransparent'

const Hero = styled.div`
	position: relative;
	height: 400px;
	width: 100%;
	/* padding: 2rem; */
	/* margin: 2rem; */
	padding: 3rem;
	background-size: cover;
	background-image: url(${props => props.backgroundUrl || digital});

	text-transform: uppercase;

	h1 {
		color: white;
		font-size: clamp(2.25rem, 5vw, 5rem);

		margin: 0;
		/* margin: 0 1rem; */
		/* line-height: 100%; */
		word-wrap: break-word;
	}

	h4 {
		color: var(--orange2);
		margin: 0;
	}
`

const HeroSection = ({ title, backgroundUrl, buttonText, pageTitle, transparent  }) => {
	return (
		<Hero backgroundUrl={backgroundUrl}>
			<h1>{title}</h1>
			{transparent && <HeroCardBrazilTransparent/>}
		</Hero>
	)
}

export default HeroSection
