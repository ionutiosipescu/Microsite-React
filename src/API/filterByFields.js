import Axios from 'axios'
import { getLink } from './helper'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL

export const getExpertiseFields = () => {
	Axios.get(
		'https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/expertise'
	).then(res => {
		const arr = []

		// console.log(res.data)
		res.data.data.map(item => {
			// console.log(item.attributes.name)
			// console.log(item)
			// item.relationships.field_featured_expert.data = null
			if (item.relationships.field_featured_expert.data) {
				// console.log(item.relationships.field_featured_expert.data)
				if (!arr.includes(item.attributes.name)) {
					arr.push(item.attributes.name)
				}
			}
			// arr.push(item.attributes.name)
		})
		// console.log(arr)
		// console.log(arr.length)
	})
}

export const getCountries = () => {
	Axios.get(
		'https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/reporting_region_and_countries'
	).then(res => {
		const arr = []

		console.log(res.data)

		res.data.data.map(item => {
			// console.log(item.relationships.field_featured_expert.data)

			if (!arr.includes(item.attributes.name)) {
				arr.push(item.attributes.name)
			}
			// arr.push(item.attributes.name)
		})
		console.log(arr)
		// console.log(arr.length)
	})
}
