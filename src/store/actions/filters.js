export const ADD_FILTER = "ADD_FILTER"
export const REMOVE_FILTER = "REMOVE_FILTER"
export const CHANGE_INSIGHTS_TYPE = "CHANGE_INSIGHTS_TYPE"

export const addFilter = filter => {
  return { type: ADD_FILTER, payload: filter }
}

export const removeFilter = filter => {
  return {
    type: REMOVE_FILTER,
    payload: filter,
  }
}

export const changeInsightsType = type => {
  return {
    type: CHANGE_INSIGHTS_TYPE,
    payload: type,
  }
}
