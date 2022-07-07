import React from 'react'
import styled from 'styled-components'
import { size } from '../../utils/breakpoints'

const Button = styled.button`
	background: var(--orange1);
	color: white;

	border: 1px solid #df8e25;

	text-transform: uppercase;
	padding: 15px 20px;

	border-radius: ${props => props.radius || '5px'};
	/* border-radius: ${radius => radius || '5px'}; */

	width: ${props => props.width || 'auto'};
`

const YellowButton = ({ text, radius, width }) => {
	// return <Button radius={radius}>{text}</Button>
	return (
		<Button radius={radius} width={width}>
			{text}
		</Button>
	)
}

export default YellowButton
