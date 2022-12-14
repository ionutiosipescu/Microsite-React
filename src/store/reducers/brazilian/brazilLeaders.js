import {
  GET_ALL_LEADERS,
  GET_FILTER_TAGS,
  FILTER_LEADERS,
  GET_ALL_PERSONS,
} from "../../actions/brazilian/brazilLeaders"

const initialState = {
  leaders: [],
  industryPersons: [],
  cities: [],
  expertises: [],
  industries: [],
  filteredLeaders: [],
  filterTags: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_LEADERS:
      return {
        leaders: payload.leaders,
        cities: payload.cities,
        expertises: payload.expertises,
        industries: payload.industries,
        filteredLeaders: payload.leaders,
      }
    case GET_ALL_PERSONS:
      return {
        ...state,
        industryPersons: payload,
      }
    case GET_FILTER_TAGS: {
      return {
        ...state,
        filterTags: payload,
      }
    }
    case FILTER_LEADERS:
      return {
        ...state,
        filteredLeaders: payload,
      }

    default:
      return state
  }
}
