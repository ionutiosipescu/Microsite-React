import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from '.'
import { Cell } from './NavbarCell'
import { size } from '../../utils/breakpoints'

const Container = styled.nav`
	display: column;

	background-color: var(--darkBlue);
	color: white;
	font-size: 1rem;
	min-height: 70px;

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

const MobileDropdown = styled(Cell)`
	padding: 0 0 0 2rem;
	min-height: 70px;

	@media ${size.lg} {
		display: none;
	}
`

const Navbar = ({ children, searchBar, spread }) => {
	console.log('Navbar spread: ', spread)

	const [visible, setVisible] = useState(false)

	const [toggle, setToggle] = useState(false)

	const handleClick = (e, userInput) => {
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
				<MobileDropdown as={'div'} onClick={handleToggle}>
					{'Filter results by'}

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
