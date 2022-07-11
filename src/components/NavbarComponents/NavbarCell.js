import React from 'react'
import styled from 'styled-components'

export const Cell = styled.div`
	display: flex;
	height: 100%;
	padding: 0 3rem;
	vertical-align: middle;
	align-items: center;

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
`

const NavbarCell = ({ children, link }) => {
	return (
		<Cell>
			<a href={link}>{children}</a>
		</Cell>
	)
}

export default NavbarCell
