import Axios from 'axios'

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
export const image_URL = 'https://www.alvarezandmarsal.com/'

export const fetchHeroSectionDataHome = async setContent => {
	const link = `${baseApiUrl}/taxonomy_term/industries/c11b8f8f-9d3a-433a-949e-5518b9b24c25?include=field_image`
	let heroSectionData = {}
	await Axios.get(link)
		.then(res => {
			const data = res.data.data

			const name = data?.attributes.name
			const fetchedImage = res.data.included[0].attributes?.uri.url

			heroSectionData = {
				...heroSectionData,
				title: name,
				backgroundUrl: `${image_URL}${fetchedImage}`,
			}
		})
		.catch(err => console.log(err))
	setContent(heroSectionData)
}
