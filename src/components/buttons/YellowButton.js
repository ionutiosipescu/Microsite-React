import React from 'react'
import styled from 'styled-components'
import { size } from '../../utils/breakpoints'


const Button = styled.button`
	background: var(--orange1);
	color: white;

	border: 1px solid #df8e25;

	text-transform: uppercase;
	padding: 15px 20px;
	/* text-align: center; */

	border-radius: ${props => props.radius || '5px'};
	width: ${props => props.width || 'auto'}; 
	height: ${props => props.heigth || "50px"};

	@media ${size.smm} {
		border-radius: 5px;
	 }
	@media ${size.sm} {
		border-radius: 0;
	 }
`

const YellowButton = props => {
	return <Button {...props} className='fw-bol'>{props.text}</Button>
}

export default YellowButton
