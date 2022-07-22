import Axios from 'axios'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL

export function getArticle(setPostContent) {
	const link =
		baseApiUrl +
		'/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare&page[limit]=6&sort=-created'

	Axios.get(link).then(res => {
		const arr = []
		res.data.data.map(item => {
			let data = {}
			data.title = item.attributes.title
			data.teaserText = item.attributes.field_teaser_text
			data.date = item.attributes.created
			data.id = item.id
			arr.push(data)
		})
		setPostContent([...arr])
	})
}
