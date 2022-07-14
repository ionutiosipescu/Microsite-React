import React, { useState } from 'react'
import styled from 'styled-components'
import { Cell } from './NavbarCell'
import { size } from '../../utils/breakpoints'

const DropdownCell = styled(Cell)`
	padding: 1rem 2rem;
`

const Dropdown = styled.ul`
	display: ${props => (props.show ? 'initial' : 'none')};

	padding: 0;
	margin: 0;

	@media ${size.lg} {
		display: ${props => (props.show ? 'initial' : 'none')};

		position: absolute;
		z-index: 2;
		background-color: var(--darkBlue1);

		display: ${props => (props.show ? 'grid' : 'none')};

		grid-template-columns: repeat(
			${props => props.columns || 2},
			minmax(200px, 1fr)
		);

		div {
			/* How the heck do i vertically align text? */
			padding: 0.5rem 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`

const NavbarDropdown = ({
	children,
	data,
	setFilterByTags,
	filterByTags,
	filter,
}) => {
	const [show, setShow] = useState(false)
	let columns

	if (data.length < 5) {
		columns = 1
	} else if (data.length < 9) {
		columns = 2
	} else {
		columns = 3
	}

	const handleClick = () => {
		setShow(!show)
	}

	const addTag = link => {
		filterByTags.push(link.name)

		setFilterByTags([...filterByTags])
	}

	return (
		<div onClick={handleClick}>
			<Cell as={'div'}>{children}</Cell>
			<Dropdown show={show} columns={columns}>
				{data.map((link, index) => (
					<DropdownCell key={index} onClick={() => addTag(link)}>
						{!filter ? <a>{link.name}</a> : <a href={data.href}>{link.name}</a>}
					</DropdownCell>
				))}
			</Dropdown>
		</div>
	)
}

export default NavbarDropdown
