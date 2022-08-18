import Axios from "axios"
import { getLink, getLinkWithFilters, grabRelatedPeople } from "./helper"

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi"
const customApi = process.env.REACT_APP_CUSTOM_API_URL

export const getInsights = (setInsightsContent, selectedFilters, type) => {
  let link = `${customApi}/hls`

  console.log(type)

  Axios.get(link).then(res => {
    if (type === "all") {
      setInsightsContent({
        businessInsights: res.data.block_two,
        caseStudies: res.data.block_one,
        podcasts: res.data.block_three,
      })
    } else {
      setInsightsContent({
        content: res.data.block_one,
      })
    }
  })
}

export const getSingleArticle = (setArticleData, id) => {
  // Good one?
  // const link = `${jsonApi}/node/article/${id}?include=field_authors.field_professional_title,field_featured_expert.field_professional_title,field_pdf`

  const link = `${jsonApi}/node/article/${id}`

  // const link = `https://akamai.alvarezandmarsal.com/jsonapi/node/article?include=field_authors.field_professional_title,field_featured_expert.field_professional_title&filter[id]=${id}`

  // console.log(link)
  Axios.get(link).then(res => {
    const data = res.data.data

    let article = {}

    article.content = data.attributes.body.value

    article.date = new Date(
      data.attributes.changed || data.attributes.created
    ).toLocaleDateString()

    article.title = data.attributes.title
    // console.log(article)
    //
    // article.authors = grabRelatedPeople("field_authors", res.data, 0)
    // article.experts = grabRelatedPeople("field_featured_expert", res.data, 0)

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
