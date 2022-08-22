import {
  ADD_FILTER,
  REMOVE_FILTER,
  CHANGE_INSIGHTS_TYPE,
} from "../actions/filters"

const initialState = {
  currentInsightType: "all",
  filters: [],
}

const filters = (state = initialState, { type, payload }) => {
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
  const newArr = state.filters.filter(
    filter => filter.category !== payload.category
  )

  newArr.push(payload)

  return {
    ...state,
    filters: newArr,
  }
}

const removeFilter = (state, payload) => {
  return {
    ...state,
    filters: state.filters.filter(filter => filter.name !== payload.name),
  }
}

export default filters
