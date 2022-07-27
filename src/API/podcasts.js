import Axios from 'axios'
import { grabDataFromIncluded } from './helper'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const imageLink = process.env.REACT_APP_BASE_IMAGE_URL

export const getPodcasts = setContent => {
	const link =
		baseApiUrl +
		'/node/podcast?include=field_teaser_image,node_type&page[limit]=6&sort=-created'

	Axios.get(link).then(res => {
		const arr = []
		res.data.data.map((item, index) => {
			let data = {}

			data.title = item.attributes.title
			data.teaserText = item.attributes.field_teaser_text
			data.date = new Date(
				item.attributes.revision_timestamp
			).toLocaleDateString()

			data.image =
				imageLink + grabDataFromIncluded('field_teaser_image', res.data, index)
			data.type = grabDataFromIncluded('node_type', res.data, index)

			data.id = item.id

			arr.push(data)
		})
		setContent([...arr])
	})
}
