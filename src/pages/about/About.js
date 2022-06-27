import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { test } from '../../store/actions/test'
import { Hero } from './about.style'
import { Container } from 'react-bootstrap'
import { CustomNavbar, NavItem } from './about.style'
import SubPage from './subPages/'
import YellowButton from '../../components/buttons/YellowButton'
import HeroSection from '../../components/cards/HeroSection'
import digital from '../../components/images/digital'

const About = () => {
	const dispatch = useDispatch()
	const testReducer = useSelector(state => state.test)
	const [subPage, setSubPage] = useState('overview')
	// console.log(testReducer)

	const handleSubPage = name => {
		setSubPage(name)
	}

	//
	const subPages = {
		overview: 'overview',
		capabilities: 'capabilities',
		newsRelease: 'newsRelease',
		insights: 'insights',
		professionals: 'professionals',
	}

	return (
		<>
			<HeroSection title={'a&m digital capabilities'} />

			<CustomNavbar bg="light" expand="lg">
				<NavItem
					onClick={() => handleSubPage(subPages.overview)}
					clicked={subPage === subPages.overview}
				>
					{'Overview'}
				</NavItem>
				<NavItem
					onClick={() => handleSubPage(subPages.capabilities)}
					clicked={subPage === subPages.capabilities}
				>
					{'Capabilities'}
				</NavItem>
				<NavItem
					onClick={() => handleSubPage(subPages.newsRelease)}
					clicked={subPage === subPages.newsRelease}
				>
					{'News & Release'}
				</NavItem>
				<NavItem
					onClick={() => handleSubPage(subPages.insights)}
					clicked={subPage === subPages.insights}
				>
					{'Insights'}
				</NavItem>
				<NavItem
					onClick={() => handleSubPage(subPages.professionals)}
					clicked={subPage === subPages.professionals}
				>
					{'Professionals'}
				</NavItem>
			</CustomNavbar>
			<SubPage subPage={subPage} />
		</>
	)
}

export default About
