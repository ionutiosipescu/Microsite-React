import Axios from "axios"
import { cleanDateFilter } from "./helper"

const customApi = process.env.REACT_APP_CUSTOM_API_URL

// This is very fucked up. I am taking the filters from 2 different places for now. Need to fix in the future
export const getInsightFilters = setFilters => {
  const link = `${customApi}/insight/filter-option`
  const hlsLink = `${customApi}/hls`

  let filters = {}

  Axios.get(link).then(res => {
    filters.region = res.data.region
    filters.date = cleanDateFilter(res.data.created)

    Axios.get(hlsLink).then(res => {
      const expertises = Object.values(res.data.expertise_parent_children).map(
        filter => {
          return { id: filter.id, uuid: filter.uuid, name: filter.name }
        }
      )
      const industries = Object.values(res.data.healthcare_industries).map(
        filter => {
          // console.log("This is filter", filter)
          return { id: filter.id, uuid: filter.uuid, name: filter.name }
        }
      )

      filters.expertise = expertises
      filters.industries = industries

      setFilters(filters)
    })
  })
}
