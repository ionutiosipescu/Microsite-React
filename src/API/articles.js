import Axios from "axios"
import { dateToShortLocale } from "../utils/dateFormat"
import {
  cleanPodcastsData,
  getLinkWithFilters,
  grabRelatedPeople,
  cleanInsights as cleanInsightsData,
} from "./helper"

const jsonApi = process.env.REACT_APP_JSON_API_URL
const customApi = process.env.REACT_APP_CUSTOM_API_URL

// Get insights from the api
export const getInsights = async (currentInsightType, filters, nextPage) => {
  const link = `${customApi}/insight-filter?insight[]=${currentInsightType.id}&page=${nextPage}`

  const linkWithFilters = getLinkWithFilters(link, filters)

  const res = await Axios.get(linkWithFilters)

  const cleanedData = await cleanInsightsData(res.data, currentInsightType.name)
  return cleanedData
}

export const getAllInsightTypes = async (
  data,
  setData,
  insightType,
  filters,
  nextPage
) => {
  // business & industry inisights
  const link1 = `${customApi}/insight-filter?insight[]=${insightType.id[0]}&page=${nextPage}`

  // health & life case studies
  const link2 = `${customApi}/insight-filter?insight[]=${insightType.id[1]}&page=${nextPage}`

  // Health & Life Podcast
  // const link3 = `${customApi}/insight-filter?insight[]=${insightType.id[2]}`
  const link3 = `https://akamai.alvarezandmarsal.com/jsonapi/node/podcast?filter[field_category.id]=f488f6ff-6a3d-4637-b45c-5ed578cf85f6`

  const linkWithFilters1 = getLinkWithFilters(link1, filters)
  const linkWithFilters2 = getLinkWithFilters(link2, filters)
  // const linkWithFilters3 = getLinkWithFilters(link3, filters)
  const linkWithFilters3 = link3

  const res1 = await Axios.get(linkWithFilters1)
  const res2 = await Axios.get(linkWithFilters2)

  const res3 = await Axios.get(link3)

  const cleanedData1 = cleanInsightsData(
    res1.data,
    "business & industry inisights"
  )
  const cleanedData2 = cleanInsightsData(
    res2.data,
    "health & life case studies"
  )

  // For podcasts. Yet to see.
  const cleanedData3 = cleanPodcastsData(res3.data, "Health & Life Podcast")

  const allInsights = {
    industryInsights: cleanedData1,
    caseStudies: cleanedData2,
    healthPodcasts: cleanedData3,
  }

  setData(allInsights)
}

export const getPodcasts = (setData, insightType, filters) => {
  let link = `https://akamai.alvarezandmarsal.com/jsonapi/node/podcast?filter[field_category.id]=f488f6ff-6a3d-4637-b45c-5ed578cf85f6`
  // console.log("This is selectedFilters", selectedFilters)

  // let link = `${jsonApi}/node/article${categories[insightType]}&page[limit]=10&sort=-created`

  link = getLinkWithFilters(link, filters)

  // console.log("This is link", link)

  Axios.get(link).then(res => {
    const podcasts = res.data.data.map(podcast => {
      const uuid = podcast.id
      const title = podcast.attributes.title
      const teaserText = podcast.attributes.field_teaser_text
      const alias = podcast.attributes.path.alias.split("/")[2]

      const date = dateToShortLocale(
        podcast.attributes.changed || podcast.attributes.created
      )

      return {
        uuid,
        title,
        teaserText,
        alias,
        date,
        // category: categoryPretty[insightType],
      }
    })

    console.log("This is podcasts", podcasts)
    setData(podcasts)
  })
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

export const getSinglePodcast = (setPodcastData, id) => {
  // const link = `${jsonApi}/node/podcast?include=field_authors,field_authors.field_professional_title&filter[id]=${id}`;
  const link = `https://akamai.alvarezandmarsal.com/jsonapi/node/podcast?include=field_authors,field_authors.field_professional_title&filter[id]=2249cb18-f903-4c2f-a610-e7d50cd5681c`

  Axios.get(link).then(res => {
    const data = res.data.data

    let podcast = {}

    podcast.content = data[0].attributes.body.value

    podcast.title = data[0].attributes.title

    podcast.date = new Date(
      data[0].attributes.revision_timestamp
    ).toLocaleDateString()

    podcast.authors = grabRelatedPeople("field_authors", res.data, 0)

    setPodcastData(podcast)
  })
}

// export const getSingleLocation = (setLocation) => {
//   const link = `https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/cities?include=field_countries_tag&filter%5Bfield_countries_tag.id%5D=4b03a3f5-b7c1-4d73-b792-248c37e92e7c`

//   Axios.get(link).then(res =>  {
//     let data = res.data.data

//     let included = res.data.included

//     let location = {}

//     location.country = included[0].attributes.name
//     location.city = data[0].attributes.name
//     location.phone = data[0].attributes.field_contact_phone
//     location.fax = data[0].attributes.field_fax_number
//     location.address_line1 = data[0].attributes.field_address.address_line1
//     location.address_line2 = data[0].attributes.field_address.address_line2
//     location.postal = data[0].attributes.field_address.postal_code
//     location.area = data[0].attributes.field_address.administrative_area
//     location.id = data[0].relationships.field_countries_tag.data[0].id
//     location.idd = included[0].id
// console.log(location)
// setLocation(location)
//   })
// }

// getSingleLocation()

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
