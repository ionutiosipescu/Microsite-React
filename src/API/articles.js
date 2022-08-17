import Axios from "axios"
import { getLink, getLinkWithFilters, grabRelatedPeople } from "./helper"

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi"
const customApi = process.env.REACT_APP_BASE_API_URL + "/api/v1"

// export const getInsights = (setInsightsContent, selectedFilters) => {
//   let link = `${customApi}/insight-filter`

//   if (selectedFilters && selectedFilters.length > 0) {
//     link = getLinkWithFilters(link, selectedFilters)
//   }

//   Axios.get(link).then(res => {
//     setInsightsContent([...res.data])
//   })
// }

export const getInsights = (setInsightsContent, selectedFilters) => {
  let link = `${customApi}/hls`

  // if (selectedFilters && selectedFilters.length > 0) {
  //   link = getLinkWithFilters(link, selectedFilters)
  // }

  Axios.get(link).then(res => {
    // console.log(res.data.block_two.data)
    // setInsightsContent([...res.data.block_two])
    setInsightsContent({
      businessInsights: res.data.block_two,
      caseStudies: res.data.block_one,
    })
  })
}

export const getSingleArticle = (setArticleData, id) => {
  const link = `${jsonApi}/node/article?include=field_authors.field_professional_title,field_featured_expert.field_professional_title,field_pdf&filter[id]=${id}`

  Axios.get(link).then(res => {
    const data = res.data.data
    console.log(res.data)

    let article = {}

    article.content = data[0].attributes.body.value

    article.date = new Date(
      data[0].attributes.changed || data[0].attributes.created
    ).toLocaleDateString()

    article.title = data[0].attributes.title

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
