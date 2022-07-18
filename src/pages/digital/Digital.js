import React, { useState } from 'react'
import HeroSection from '../../components/cards/HeroSection'
import {
	Overview,
	Insights,
	Professionals,
	NewsRelease,
	Capabilities,
	Practice,
} from './subPages'
import {
	NavigationCell,
	NavigationNavbar,
} from '../../components/navbarComponents/'

const Digital = () => {
	// The index of the of the item clicked in the navbar
	const [clickedNavbarCell, setClickedNavbarCell] = useState(0)

	// The order of the sub pages in the array is important since it is used with the index from above
	const subPages = [
		<Overview />,
		<Capabilities />,
		<NewsRelease />,
		<Insights />,
		<Professionals />,
		<Practice />,
	]

	return (
		<>
			<HeroSection
				title={'a&m digital capabilities'}
				backgroundUrl={
					'https://www.alvarezandmarsal.com/sites/default/files/styles/wide_3_2_desktop/public/countrypage_brazil.jpg?itok=XVXwKdCi'
				}
			/>

			<NavigationNavbar setClickedNavbarCell={setClickedNavbarCell}>
				<NavigationCell>Overview</NavigationCell>
				<NavigationCell> capabilities</NavigationCell>
				<NavigationCell> {'news'}</NavigationCell>
				<NavigationCell> Insights</NavigationCell>
				<NavigationCell> Professionals</NavigationCell>
				<NavigationCell> Practice</NavigationCell>
			</NavigationNavbar>

			{subPages[clickedNavbarCell]}
		</>
	)
}

export default Digital
