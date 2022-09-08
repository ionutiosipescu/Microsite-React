import Axios from "axios"
import { cleanDateFilter } from "./helper"

const customApi = process.env.REACT_APP_CUSTOM_API_URL

export const getInsightFilters = async () => {
  try {
    const hlsLink = `${customApi}/hls`

    let filters = {}

    const res = await Axios.get(hlsLink)

    const expertises = Object.values(res.data.expertise_parent_children).map(
      filterName => {
        return {
          id: filterName.id,
          uuid: filterName.uuid,
          name: filterName.name,
        }
      }
    )

    const industries = Object.values(res.data.healthcare_industries).map(
      filter => {
        return { id: filter.id, uuid: filter.uuid, name: filter.name }
      }
    )

    filters.expertise = expertises
    filters.industries = industries
    filters.region = res.data.region
    filters.date = cleanDateFilter(res.data.date_range)

    return filters
  } catch (e) {
    console.log(e)
    return null
  }
}
