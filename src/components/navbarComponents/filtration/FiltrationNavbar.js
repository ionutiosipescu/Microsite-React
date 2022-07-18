import React, { useState, createContext } from 'react'
import { SearchBar } from '../index'
import { Container, MobileDropdown } from './Filtration.styles'
import SearchBar2 from './SearchBar2'

export const NavbarContext = createContext(null)

const Navbar = ({
	children,
	searchBar,
	searchBar2,
	spread,
	filterByTags,
	setFilterByTags,
}) => {
	const [visible, setVisible] = useState(false)
	const [toggle, setToggle] = useState(false)

	const vals = {
		filterByTags: filterByTags,
		setFilterByTags: setFilterByTags,
	}

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
				<NavbarContext.Provider value={vals}>
					<ul>
						{children}
						{searchBar2 && <SearchBar2 placeholder={searchBar2} />}
					</ul>
				</NavbarContext.Provider>
				{searchBar && <SearchBar disappearOnMobile={true} />}
			</Container>
		</>
	)
}

export default Navbar
