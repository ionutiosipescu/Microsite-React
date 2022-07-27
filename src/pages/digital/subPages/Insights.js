import React, { useEffect, useState } from 'react'
import { CardInsights } from '../../../components/cards/'
import { getPodcasts } from '../../../API'

const Insights = () => {
	const [podcasts, setPodcasts] = useState([])

	useEffect(() => {
		getPodcasts(setPodcasts)
	}, [])

	// console.log(podcasts)

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
