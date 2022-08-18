export const ADD_FILTER = "ADD_FILTER"
export const REMOVE_FILTER = "REMOVE_FILTER"
export const CHANGE_INSIGHTS_TYPE = "CHANGE_INSIGHTS_TYPE"

export const addFilter = filter => {
  // console.log(filter)
  return {
    type: ADD_FILTER,
    payload: filter,
  }
}

export const removeFilter = filter => {
  return {
    type: REMOVE_FILTER,
    payload: filter,
  }
}

export const changeInsightsType = type => {
  // console.log(type)
  return {
    type: CHANGE_INSIGHTS_TYPE,
    payload: type,
  }
}
