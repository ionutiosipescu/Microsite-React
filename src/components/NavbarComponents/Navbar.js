import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from '.'
import { Cell } from './NavbarCell'
import { size } from '../../utils/breakpoints'

const Container = styled.div`
	display: flex;
	/* flex-direction: column; */
	/* height: 70px; */
	background-color: var(--darkBlue);
	color: white;
	font-size: 1.5rem;

	flex-direction: column;
`

const MobileDropdown = styled(Cell)`
	@media ${size.lg} {
		display: none;
	}
`

const Navbar = ({ children, searchBar }) => {
	const [show, setShow] = useState(true)

	const handleClick = (e, userInput) => {
		if (userInput == null) {
			e.preventDefault()
			setShow(!show)
		} else {
			// Logic to search for user input or Api call?
		}
	}

	return (
		<>
			<SearchBar show={show} handleClick={handleClick} />
			<Container>
				<MobileDropdown>{'Filter results by'}</MobileDropdown>
				{children}
				{searchBar && (
					<SearchBar
						show={!show}
						handleClick={handleClick}
						disappearOnMobile={true}
					/>
				)}
			</Container>
		</>
	)
}

export default Navbar
