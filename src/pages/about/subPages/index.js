import React from 'react'
import Overview from './Overview'
import Capabilities from './Capabilities'
import NewsRelease from './NewsRelease'
import Professionals from './Professionals'
import Insights from './Insights'
import { Container } from 'react-bootstrap'

const SubPage = ({ subPage }) => {
	const subPages = {
		overview: <Overview />,
		capabilities: <Capabilities />,
		newsRelease: <NewsRelease />,
		insights: <Insights />,
		professionals: <Professionals />,
	}

	return (
		<Container fluid className="bg-light">
			{subPages[subPage]}
		</Container>
	)
}

export default SubPage
