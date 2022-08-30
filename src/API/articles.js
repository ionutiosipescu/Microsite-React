import Axios from "axios"
import { dateToShortLocale } from "../utils/dateFormat"
import { getLinkWithFilters, grabRelatedPeople, cleanInsights } from "./helper"

const jsonApi = process.env.REACT_APP_JSON_API_URL
const customApi = process.env.REACT_APP_CUSTOM_API_URL

export const getInsights = async (setData, insightType, filters, next) => {
  const link = `${customApi}/insight-filter?insight[]=${insightType.id}&page[limit]=10`

  const linkWithFilters = getLinkWithFilters(link, filters)

  console.log("This is filters", filters)
  console.log("This is linkWithFilters", linkWithFilters)

  const res = await Axios.get(linkWithFilters)

  const cleanedData = cleanInsights(res.data, insightType.name)

  setData(cleanedData)
}

export const getAllInsightTypes = async (setData, insightType, filters) => {
  // business & industry inisights
  const link1 = `${customApi}/insight-filter?insight[]=${insightType.id[0]}`

  // health & life case studies
  const link2 = `${customApi}/insight-filter?insight[]=${insightType.id[1]}`

  // Health & Life Podcast
  const link3 = `${customApi}/insight-filter?insight[]=${insightType.id[2]}`

  const linkWithFilters1 = getLinkWithFilters(link1, filters)
  const linkWithFilters2 = getLinkWithFilters(link2, filters)
  const linkWithFilters3 = getLinkWithFilters(link3, filters)

  const res1 = await Axios.get(linkWithFilters1)
  const res2 = await Axios.get(linkWithFilters2)
  const res3 = await Axios.get(linkWithFilters3)

  const cleanedData1 = cleanInsights(res1.data, "business & industry inisights")
  const cleanedData2 = cleanInsights(res2.data, "health & life case studies")

  // For podcasts. Yet to see.
  const cleanedData3 = cleanInsights(res3.data, "Health & Life Podcast")

  const allInsights = {
    industryInsights: cleanedData1,
    caseStudies: cleanedData2,
    healthPodcasts: cleanedData3,
  }

  setData(allInsights)
}

export const getPodcasts = (
  setInsightsContent,
  insightType,
  selectedFilters
) => {
  //   const categories = {
  //     industryInsights:
  //   "?filter[field_category.id]=b7d6df12-5304-4aaf-ab3d-265acd0fb33c&include=field_category",
  //   caseStudies:
  //   "?filter[field_category.id]=f1d36195-6097-4860-ad51-3e7146dba239&include=field_category",
  //   healthPodcasts:
  //   "?filter[field_category.id]=f488f6ff-6a3d-4637-b45c-5ed578cf85f6&include=field_category",
  // }

  const categoryPretty = {
    industryInsights: "business & industry inisights",
    caseStudies: "health & life case studies",
    healthPodcasts: "health & life podcasts",
  }

  let link = `https://akamai.alvarezandmarsal.com/jsonapi/node/podcast?filter[field_category.id]=f488f6ff-6a3d-4637-b45c-5ed578cf85f6`
  // console.log("This is selectedFilters", selectedFilters)

  // let link = `${jsonApi}/node/article${categories[insightType]}&page[limit]=10&sort=-created`

  link = getLinkWithFilters(link, selectedFilters)
  // console.log("This is link", link)

  Axios.get(link).then(res => {
    const articles = res.data.data.map(podcast => {
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
        category: categoryPretty[insightType],
      }
    })

    setInsightsContent(articles)
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
