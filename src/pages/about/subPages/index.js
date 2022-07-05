import React from 'react'
import Overview from './Overview'
import Capabilities from './Capabilities'
import NewsRelease from './NewsRelease'
import Professionals from './Professionals'
import Insights from './Insights'
import Practice from './Practice'
import { Container } from 'react-bootstrap'

const SubPage = ({ subPage }) => {
	console.log(subPage)
	const subPages = {
		overview: <Overview />,
		capabilities: <Capabilities />,
		newsRelease: <NewsRelease />,
		insights: <Insights />,
		professionals: <Professionals />,
		practice: <Practice />,
	}

	return (
		<Container fluid className="bg-light">
			{subPages[subPage]}
		</Container>
	)
}

export default SubPage
