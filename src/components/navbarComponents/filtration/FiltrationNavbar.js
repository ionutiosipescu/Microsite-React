import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from '../index'
import { Cell } from './NavbarCell'
import { size } from '../../../utils/breakpoints'

const Container = styled.nav`
	display: column;

	background-color: var(--darkBlue);
	color: white;
	font-size: 1rem;
	min-height: 70px;

	a {
		color: white;
		text-decoration: none;
	}

	& > form {
		display: none;

		@media ${size.lg} {
			display: flex;
		}
	}

	& > ul {
		flex-grow: 1;

		margin-bottom: 0;
		display: ${props => (props.toggle ? 'column' : 'none')};

		display: column;
		/* color: white; */

		@media ${size.lg} {
			display: flex;
			padding-left: 0;

			justify-content: ${props =>
				props.spread ? 'space-between' : 'flex-start'};
		}
	}

	@media ${size.lg} {
		display: flex;
	}
`

const MobileDropdown = styled.div`
	display: flex;

	div {
		transition: all 0.2s ease-in-out;
		display: flex;
		align-items: center;
		padding-left: 2rem;
		min-height: 70px;

		flex-grow: 1;

		:hover {
			cursor: pointer;
			color: var(--orange2);
		}
	}

	@media ${size.lg} {
		display: none;
	}
`

const Navbar = ({
	children,
	searchBar,
	spread,
	filterByTags,
	setFilterByTags,
}) => {
	// console.log('Navbar spread: ', spread)

	const [visible, setVisible] = useState(false)

	const [toggle, setToggle] = useState(false)

	const handleClick = (e, userInput) => {
		console.log('click')
		if (userInput == null) {
			e.preventDefault()
			setVisible(!visible)
		} else {
			// Logic to search for user input or Api call?
		}
	}

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<>
			<SearchBar visible={!visible} handleClick={handleClick} />
			<Container toggle={toggle} spread={spread}>
				<MobileDropdown
					as={'div'}
					filterByTags={filterByTags}
					setFilterByTags={setFilterByTags}
				>
					<div onClick={handleToggle}>{'Filter results by'}</div>

					{searchBar && (
						<SearchBar
							visible={visible}
							handleClick={handleClick}
							disappearOnMobile={true}
						/>
					)}
				</MobileDropdown>
				<ul>{children}</ul>
				{searchBar && (
					<SearchBar
						// visible={visible}
						// handleClick={handleClick}
						disappearOnMobile={true}
					/>
				)}
			</Container>
		</>
	)
}

export default Navbar
