import Axios from 'axios'
import { getLink } from './helper'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL

export const getArticles = async (setContent, articleType, amount) => {
	const link = getLink(articleType, amount)
	console.log(amount)

	await Axios.get(link).then(res => {
		const arr = []

		res.data.data.map(item => {
			let data = {}

			data.title = item.attributes.title
			data.teaserText = item.attributes.field_teaser_text
			data.date = item.attributes.created
			data.id = item.id

			arr.push(data)
		})
		setContent([...arr])
	})
}

export const getCaseStudiesArticles = async setContent => {
	const link =
		baseApiUrl +
		'/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare&page[limit]=6&sort=-created'
	const arr = []
	await Axios.get(link)
		.then(res => {
			const articles = res.data.data
			console.log(articles)
			articles.forEach(article => {
				// console.log(article.attributes?.field_metatag);
				let art = {
					// id: article.id,
					title: article?.attributes?.title,
					description: article.attributes?.field_teaser_text,
					category: article.attributes.field_metatag?.keywords,
					date: new Date(
						article.attributes?.revision_timestamp
					).toLocaleDateString(),
				}
				arr.push(art)
			})
		})
		.catch(err => console.log(err))

	setContent([...arr])
}
