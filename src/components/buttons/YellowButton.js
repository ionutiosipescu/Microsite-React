import React from 'react'
import styled from 'styled-components'
import { size } from '../../utils/breakpoints'

const Button = styled.button`
	background: var(--orange1);
	color: white;

	border: 1px solid #df8e25;

	text-transform: uppercase;
	padding: 15px 20px;

	border-radius: ${props => props.radius || '0px'};
	/* border-radius: ${radius => radius || '5px'}; */

	width: ${props => props.width || 'auto'};
	height: ${props => props.height || 'auto'};
	display: ${props => props.display || 'block'};
	 @media ${size.md} {
		border-radius: 0;
	} 
	 @media ${size.lg} {
		display: block;
	} 
`

const YellowButton = ({ text, radius, width, height, display }) => {
	// return <Button radius={radius}>{text}</Button>
	return (
		<Button radius={radius} width={width} height={height} display={display}>
			{text}
		</Button>
	)
}

export default YellowButton
