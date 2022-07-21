import React from 'react'
import CardInsights from '../../../components/cards/CardInsights'
import image from '../../../assets/images/ConnorWine'
import { StyledContainer } from '../../../components/layout/Rows&Collumns/Rows&Collumns.style'

import TranslateButton from '../../../components/buttons/TranslateButton'

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
		<StyledContainer>
			<TranslateButton text1={'English'} text2={'Portuguese'} />
			{drupal.map((insight, index) => (
				<CardInsights
					key={index}
					image={insight.image}
					type={insight.type}
					title={insight.title}
					content={insight.content}
				/>
			))}
		</StyledContainer>
	)
}

export default Insights
