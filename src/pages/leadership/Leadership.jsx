import React, { useState } from 'react'
import {
	HeroSection,
	ProfessionalsCardSmall,
	CarouselSection,
} from '../../components/cards'
import styled from 'styled-components'
import { tags, leadersList, arr, links } from '../../utils/data'
import {
	FiltrationNavbar,
	NavbarCell,
	NavbarDropdown,
	SearchBar,
	NavigationCell,
	NavigationNavbar,
} from '../../components/navbarComponents'
import CurrentRoute from '../../components/CurrentRoute'
import FilterBy from '../../components/FilterBy'
import YellowButton from '../../components/buttons/YellowButton'

export const LeaadersContainer = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 4rem;
	position: relative;
`

const Leadership = () => {
	const [openedState, setOpenedState] = useState(
		Array.from(leadersList, () => false)
	)
	const [filterByTags, setFilterByTags] = useState([
		'fuck',
		'fuck',
		'fuck2',
		'fuck3',
		'fuck4',
	])

	const [clickedNavbarCell, setClickedNavbarCell] = useState(null)

	const handleDisplay = index => {
		console.log('this is the index', index)
		if (!openedState[index]) {
			let arr = Array.from(leadersList, () => false)
			arr[index] = true
			setOpenedState([...arr])
		} else {
			setOpenedState(Array.from(leadersList, () => false))
		}
	}

	let elements = {
		button: <YellowButton />,
		card: <ProfessionalsCardSmall />,
	}
	let arr = [<YellowButton />, <ProfessionalsCardSmall />]
	// console.log(clickedNavbarCell)

	return (
		<>
			<HeroSection title={'helthcare & live sciences leaders'} />

			<FiltrationNavbar
				searchBar
				filterByTags={filterByTags}
				setFilterByTags={setFilterByTags}
			>
				<NavbarDropdown data={links}>Something</NavbarDropdown>
				<NavbarDropdown data={links}>DropDown</NavbarDropdown>
				<NavbarDropdown data={links}>Something</NavbarDropdown>
				<NavbarDropdown data={links}>Something2</NavbarDropdown>
			</FiltrationNavbar>

			<FiltrationNavbar
				searchBar2={'enter search here'}
				spread
				filterByTags={filterByTags}
				setFilterByTags={setFilterByTags}
			>
				<NavbarDropdown data={links}>Something</NavbarDropdown>
				<NavbarDropdown data={links}>DropDown</NavbarDropdown>
				<NavbarDropdown data={links}>Something</NavbarDropdown>
				<NavbarDropdown data={links}>Something2</NavbarDropdown>
			</FiltrationNavbar>

			<NavigationNavbar setClickedNavbarCell={setClickedNavbarCell}>
				<NavigationCell> First</NavigationCell>
				<NavigationCell> First1</NavigationCell>
				<NavigationCell> First2</NavigationCell>
			</NavigationNavbar>

			<FilterBy filterByTags={filterByTags} setFilterByTags={setFilterByTags} />
			{arr[clickedNavbarCell]}

			<div className="m-4">
				<LeaadersContainer>
					{leadersList.map((cardInfo, index) => {
						return (
							<ProfessionalsCardSmall
								key={index}
								cardInfo={cardInfo}
								index={index}
								openedState={openedState}
								handleDisplay={handleDisplay}
								showDetails={openedState[index]}
							/>
						)
					})}
				</LeaadersContainer>
			</div>

			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="#002B49"
				arr={arr}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#FFF"
				carouselDotBackground="#002b49"
			/>
		</>
	)
}

export default Leadership
