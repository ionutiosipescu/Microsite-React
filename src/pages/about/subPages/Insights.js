import React from 'react'
import { Container } from 'react-bootstrap'
import CardInsights from '../../../components/cards/CardInsights'
import image from '../../../components/images/ConnorWine'

const Insights = () => {
	// this is the Insights that will come from drupal
	let drupal = [
		{
			image: image,
			type: 'podcast',
			title: 'This is a very long Title',
			content:
				'laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.',
		},
		{
			image: image,
			type: 'podcast',
			title: 'This is a very long Title',
			content:
				'laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.',
		},
		{
			image: image,
			type: 'podcast',
			title: 'This is a very long Title',
			content:
				'laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.',
		},
	]

	return (
		<>
			{drupal.map((insight, index) => (
				<CardInsights
					key={index}
					image={insight.image}
					type={insight.type}
					title={insight.title}
					content={insight.content}
				/>
			))}
		</>
	)
}

export default Insights
