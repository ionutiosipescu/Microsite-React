import React from 'react'
import styled from 'styled-components'
import { size } from '../../utils/breakpoints'

export const Cell = styled.li`
	display: flex;
	height: 100%;
	align-items: center;

	padding: 0.5rem 1rem;
	/* border: 2px solid red; */

	transition: all 0.2s ease-in-out;

	:hover {
		background-color: var(--darkBlue1);
		cursor: pointer;
		color: var(--hover-blue);
	}

	a {
		text-decoration: none;
		color: white;
	}
	@media ${size.lg} {
		padding: 0 2rem;
	}
`

const NavbarCell = ({ children, href }) => {
	return (
		<Cell>
			<a href={href}>{children}</a>
		</Cell>
	)
}

export default NavbarCell
