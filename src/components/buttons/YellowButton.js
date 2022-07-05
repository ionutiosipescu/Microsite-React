import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	background: var(--orange1);
	color: white;

	border: 1px solid #df8e25;

	text-transform: uppercase;
	padding: 15px 20px;
	/* text-align: center; */

	border-radius: ${props => props.radius || '5px'};
	/* width: ${props => props.width || 'auto'}; */
`

const YellowButton = props => {
	return <Button {...props} className='fw-bol'>{props.text}</Button>
}

export default YellowButton
