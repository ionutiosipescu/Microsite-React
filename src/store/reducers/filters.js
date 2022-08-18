import {
  ADD_FILTER,
  REMOVE_FILTER,
  CHANGE_INSIGHTS_TYPE,
} from "../actions/filters"

// const insightTypes = ["all", "industryInsights", "caseStudies", "podcasts"]

const initialState = {
  currentInsightType: "all",
  filters: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILTER:
      return addFilter(state, payload)

    case REMOVE_FILTER:
      return removeFilter(state, payload)

    case CHANGE_INSIGHTS_TYPE: {
      return {
        currentInsightType: payload,
        filters: [],
      }
    }

    default:
      return state
  }
}

const addFilter = (state, payload) => {
  return {
    ...state,
    filters: [...state.filters].includes(payload)
      ? state.filters
      : [...state.filters, payload],
  }
}

const removeFilter = (state, payload) => {
  return {
    ...state,
    filters: [...state.filters].filter(filter => filter !== payload),
  }
}
