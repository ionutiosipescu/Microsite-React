import React from 'react'
import styled from 'styled-components'
import { size } from '../../utils/breakpoints'

export const Cell = styled.li`
	display: flex;
	height: 100%;
	align-items: center;

	padding: 0.5rem 1rem;

	transition: all 0.2s ease-in-out;

	:hover {
		background-color: var(--darkBlue1);
		cursor: pointer;
		color: var(--hover-blue);

		/* Without the css bellow if 'a' elem has a href, the color will not change. Anoying. Don't know a better way of fixing this*/
		a {
			transition: all 0.2s ease-in-out;
			color: var(--hover-blue);
		}
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
