import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	background: var(--orange1);
	color: white;

	border: 1px solid #df8e25;

	text-transform: uppercase;
	padding: 15px 20px;

	border-radius: ${props => props.radius || '0px'};
	width: ${props => props.width || 'auto'};
	height: ${props => props.height || 'auto'};
	display: ${props => props.display || 'block'};

`

const YellowButton = ({ text, radius, width, height, display }) => {
	return (
		<Button radius={radius} width={width} height={height} display={display}>
			{text}
		</Button>
	)
}

export default YellowButton
