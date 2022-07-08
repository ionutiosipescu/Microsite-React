import React from 'react'
import styled from 'styled-components'
import { ChevronRightBlue } from '../assets/icons'

const Route = styled.div`
	color: var(--lightBlue);
	margin: 1rem 0;
	font-size: 1.25rem;

	display: flex;
	align-items: center;
	gap: 1rem;

	img {
		height: 1.25rem;
	}
`

const CurrentRoute = ({ route, subRoute }) => {
	return (
		<Route>
			<span>{route}</span>
			<ChevronRightBlue />
			<span>{subRoute}</span>
		</Route>
	)
}

export default CurrentRoute
