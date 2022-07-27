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

	const values = {
		filterByTags: filterByTags,
		setFilterByTags: setFilterByTags,
	}

	const handleSubmit = (e, userInput, openBigNavbar) => {
		e.preventDefault()
		console.log('this is userInput', userInput)
		console.log(userInput)
		console.log(openBigNavbar)

		if (openBigNavbar && userInput === '') {
			setVisible(!visible)
		} else {
			filterByTags.push(userInput)
			setFilterByTags([...filterByTags])

			console.log('submit')
		}
	}

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<>
			<SearchBar
				visible={!visible}
				handleSubmit={handleSubmit}
				{...searchBar}
			/>
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
							disappearOnMobile
							{...searchBar}
							handleSubmit={handleSubmit}
							openBigNavbar
						/>
					)}
				</MobileDropdown>
				<NavbarContext.Provider value={values}>
					<ul>
						{children}
						{searchBar2 && (
							<SearchBar2 {...searchBar2} handleSubmit={handleSubmit} />
						)}
					</ul>
				</NavbarContext.Provider>
				{searchBar && (
					<SearchBar
						disappearOnMobile
						handleSubmit={handleSubmit}
						{...searchBar}
					/>
				)}
			</Container>
		</>
	)
}

export default Navbar
