import Axios from "axios"
import {
  months,
  getLink,
  getLinkWithFilters,
  grabRelatedPeople,
} from "./helper"

const jsonApi = process.env.REACT_APP_JSON_API_URL
const customApi = process.env.REACT_APP_CUSTOM_API_URL

export const getInsights = (
  setInsightsContent,
  selectedFilters,
  insightType
) => {
  const categories = {
    industryInsights:
      "?filter[field_category.id]=b7d6df12-5304-4aaf-ab3d-265acd0fb33c&include=field_category",
    caseStudies:
      "?filter[field_category.id]=f1d36195-6097-4860-ad51-3e7146dba239&include=field_category",
    healthPodcasts:
      "?filter[field_category.id]=f488f6ff-6a3d-4637-b45c-5ed578cf85f6&include=field_category",
  }

  const categoryPretty = {
    industryInsights: "business & industry inisights",
    caseStudies: "health & life case studies",
    healthPodcasts: "health & life podcasts",
  }

  let link = `${jsonApi}/node/article${categories[insightType]}&page[limit]=10&sort=-created`

  link = getLinkWithFilters(link, selectedFilters)
  console.log("This is link", link)

  Axios.get(link).then(res => {
    const articles = res.data.data.map(article => {
      const id = article.id
      const title = article.attributes.title
      const teaserText = article.attributes.field_teaser_text
      const alias = article.attributes.path.alias.split("/")[2]
      const date = new Date(
        article.attributes.changed || article.attributes.created
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      // const date = article.attributes.changed || article.attributes.created

      return {
        id,
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

export const getPodcasts = (
  setInsightsContent,
  selectedFilters,
  insightType
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
      const id = podcast.id
      const title = podcast.attributes.title
      const teaserText = podcast.attributes.field_teaser_text
      const alias = podcast.attributes.path.alias.split("/")[2]
      const date = new Date(
        podcast.attributes.changed || podcast.attributes.created
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      return {
        id,
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
  // Good one?
  // const link = `${jsonApi}/node/article/${id}?include=field_authors.field_professional_title,field_featured_expert.field_professional_title,field_pdf`
  const link = `${jsonApi}/node/article/${id}?include=field_authors.field_professional_title,field_authors.field_city,field_authors.field_image_background,field_featured_expert.field_professional_title,field_featured_expert.field_city,field_featured_expert.field_image_background`
  // console.log("This is link", link)

  // const link = `https://akamai.alvarezandmarsal.com/jsonapi/node/article?include=field_authors.field_professional_title,field_featured_expert.field_professional_title&filter[id]=${id}`

  // console.log(link)
  Axios.get(link).then(res => {
    const data = res.data.data

    let article = {}

    // console.log("This is data", data)

    article.content = data.attributes.body.value

    article.date = new Date(
      data.attributes.changed || data.attributes.created
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    article.title = data.attributes.title
    article.authors = grabRelatedPeople("field_authors", res.data, 0)
    article.experts = grabRelatedPeople("field_featured_expert", res.data, 0)

    console.log("This is article", article)

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
