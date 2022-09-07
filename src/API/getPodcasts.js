import Axios from "axios"
import { cleanPodcastsData, getLinkWithJsonApiFilters } from "./helper"

const jsonApi = process.env.REACT_APP_JSON_API_URL

export const getPodcasts = async (
  currentInsightType,
  filters,
  nextPodcastPage
) => {
  try {
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
  } catch (e) {
    console.log("This is e", e)
    return null
  }
}
