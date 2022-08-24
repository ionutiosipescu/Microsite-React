import Axios from "axios"

const customApi = process.env.REACT_APP_CUSTOM_API_URL

// This is very fucked up. I am taking the filters from 2 different places for now. Need to fix in the future
export const getInsightFilters = setFilters => {
  const link = `${customApi}/insight/filter-option`
  const hlsLink = `${customApi}/hls`

  let filters = {}

  Axios.get(link).then(res => {
    filters = res.data

    Axios.get(hlsLink).then(res => {
      const expertises = Object.values(res.data.expertise_parent_children).map(
        filter => {
          return { uuid: filter.uuid, name: filter.name }
        }
      )
      const industries = Object.values(res.data.healthcare_industries).map(
        filter => {
          return { uuid: filter.uuid, name: filter.name }
        }
      )

      filters.expertise = expertises
      filters.industries = industries

      setFilters(filters)
    })
  })
}
