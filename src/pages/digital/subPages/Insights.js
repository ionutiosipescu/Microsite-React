import React, { useEffect, useState } from 'react'
import { CardInsights } from '../../../components/cards/'
import image from '../../../assets/images/ConnorWine'
import { getPodcasts } from '../../../API'

const Insights = () => {
	// this is the Insights that will come from drupal

	const [podcasts, setPodcasts] = useState([])

	useEffect(() => {
		getPodcasts(setPodcasts)
	}, [])

	console.log(podcasts)

	return (
		<>
			{podcasts.map((podcast, index) => (
				<CardInsights
					key={index}
					image={podcast.image}
					type={podcast.type}
					title={podcast.title}
					teaserText={podcast.teaserText}
				/>
			))}
		</>
	)
}

export default Insights
