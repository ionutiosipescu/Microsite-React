import digital from '../../components/images/digital'
import React from 'react'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'

const Hero = styled.div`
	height: 400px;
	width: 100%;
	padding: 70px;
	background-image: url(${props => props.backgroundUrl || digital});
	text-transform: uppercase;

	h1 {
		color: white;
		font-size: 5rem;
	}
`

const HeroSection = ({ title, backgroundUrl }) => {
	return (
		<Hero backgroundUrl={backgroundUrl}>
			<h1>{title}</h1>
			<YellowButton text="contact us" />
		</Hero>
	)
}

export default HeroSection
