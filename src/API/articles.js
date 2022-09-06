import Axios from "axios"
import { insightTypes } from "../components/navbarComponents/inisightsNavbar/InsightsNavbar"
import { dateToShortLocale } from "../utils/dateFormat"
import {
  cleanPodcastsData,
  getLinkWithFilters,
  grabRelatedPeople,
  cleanInsightsData,
  getLinkWithJsonApiFilters,
} from "./helper"

const jsonApi = process.env.REACT_APP_JSON_API_URL
const customApi = process.env.REACT_APP_CUSTOM_API_URL

// Get insights from the api
export const getInsights = async (currentInsightType, filters, nextPage) => {
  const link = `${customApi}/insight-filter?insight[]=${currentInsightType.id}&page=${nextPage}`
  // const link = `${customApi}/insight-filter?insight[]=${currentInsightType.id}&page=35`

  const linkWithFilters = getLinkWithFilters(link, filters)

  const res = await Axios.get(linkWithFilters)

  return cleanInsightsData(res.data, currentInsightType.name)
}

export const getPodcasts = async (
  currentInsightType,
  filters,
  nextPodcastPage
) => {
  let link

  if (nextPodcastPage) {
    link = nextPodcastPage
  } else {
    // let link = `${jsonApi}/node/article${categories[insightType]}&page[limit]=10&sort=-created`
    // let link = `${jsonApi}/node/podcast?filter[field_category.id]=f488f6ff-6a3d-4637-b45c-5ed578cf85f6&page[limit]=10&sort=-created`
    link = `${jsonApi}/node/podcast?include=field_teaser_image&page[limit]=10&sort=-created`
    link = getLinkWithJsonApiFilters(link, filters)
  }

  const res = await Axios.get(link)

  const nextPageLink = (await res.data.links?.next?.href) || null

  const cleanData = await cleanPodcastsData(res.data, currentInsightType.name)

  return { cleanData, nextPageLink }
}

export const getAllInsightTypes = async (
  insightTypes,
  filters,
  nextPage,
  nextPodcastPage
) => {
  const industryInsights = await getInsights(insightTypes[1], filters, nextPage)
  const caseStudies = await getInsights(insightTypes[2], filters, nextPage)
  const healthPodcasts = await getPodcasts(
    insightTypes[3],
    filters,
    nextPodcastPage
  )

  return {
    industryInsights: industryInsights,
    caseStudies: caseStudies,
    healthPodcasts: healthPodcasts.cleanData,
    nextPageLink: healthPodcasts.nextPageLink,
  }
}

export const getSingleArticle = (setArticleData, id) => {
  const link = `${jsonApi}/node/article/${id}?include=field_authors.field_professional_title,field_authors.field_city,field_authors.field_image_background,field_featured_expert.field_professional_title,field_featured_expert.field_city,field_featured_expert.field_image_background`

  Axios.get(link).then(res => {
    const data = res.data.data

    let article = {}

    article.content = data.attributes.body.value

    article.date = dateToShortLocale(
      data.attributes.changed || data.attributes.created
    )

    article.title = data.attributes.title
    article.authors = grabRelatedPeople("field_authors", res.data, 0)
    article.experts = grabRelatedPeople("field_featured_expert", res.data, 0)

    setArticleData(article)
  })
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
    console.log(dataFiltered)
  })
}
