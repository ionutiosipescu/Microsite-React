import Axios from "axios"
import { dateToShortLocale } from "../utils/dateFormat"
import {
  getLinkWithFilters,
  grabRelatedPeople,
  cleanInsightsData,
} from "./helper"

const jsonApi = process.env.REACT_APP_JSON_API_URL
const customApi = process.env.REACT_APP_CUSTOM_API_URL

// Get insights from the api
export const getInsights = async (currentInsightType, filters, nextPage) => {
  try {
    const link = `${customApi}/insight-filter?insight[]=${currentInsightType.id}&page=${nextPage}`

    const linkWithFilters = getLinkWithFilters(link, filters)

    const res = await Axios.get(linkWithFilters)

    return cleanInsightsData(res.data, currentInsightType.name)
  } catch (e) {
    console.log("This is e", e)
    return null
  }
}

export const getSingleArticle = async id => {
  try {
    const link = `${jsonApi}/node/article/${id}?include=field_authors.field_professional_title,field_authors.field_city,field_authors.field_image_background,field_featured_expert.field_professional_title,field_featured_expert.field_city,field_featured_expert.field_image_background`

    // console.log("This is link", link)

    const res = await Axios.get(link)
    const data = res.data.data

    let article = {}

    article.content = data.attributes.body.value

    article.date = dateToShortLocale(
      data.attributes.changed || data.attributes.created
    )

    article.title = data.attributes.title
    article.authors = grabRelatedPeople("field_authors", res.data, 0)
    article.experts = grabRelatedPeople("field_featured_expert", res.data, 0)

    return article
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getLocations = setLocations => {
  const link = `https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/cities?include=field_countries_tag`

  Axios.get(link).then(res => {
    let data = res.data.data
    let included = res.data.included

    let dataFiltered = data.map(element => {
      const city = element.attributes.name
      const phone = element.attributes.field_contact_phone
      const fax = element.attributes.field_fax_number
      const address_line1 = element.attributes.field_address.address_line1
      const address_line2 = element.attributes.field_address.address_line2
      const postal = element.attributes.field_address.postal_code
      const area = element.attributes.field_address.administrative_area
      const id = element.relationships.field_countries_tag.data[0].id
      const map = element.attributes.field_google_map_url

      return {
        city,
        phone,
        fax,
        address_line1,
        address_line2,
        postal,
        area,
        id,
        map,
      }
    })

    let includedFiltered = included.map(element => {
      const country = element.attributes.name
      const idd = element.id
      return {
        country,
        idd,
      }
    })

    let combinedArrays = []

    combinedArrays.cities = dataFiltered
    combinedArrays.countries = includedFiltered

    let location = []

    for (let key of combinedArrays.countries) {
      let addCountryToCity = key.country
      let locationObject = {}
      let countriesarr = []

      for (let element of combinedArrays.cities) {
        if (key.idd === element.id) {
          element.country = addCountryToCity
          countriesarr.push(element)
        }
      }

      locationObject.city = countriesarr
      locationObject.country = key
      location.push(locationObject)
    }
    setLocations(location)
  })
}
