import {
  GET_ALL_LEADERS,
  GET_FILTER_TAGS,
  FILTER_LEADERS,
  GET_ALL_PERSONS,
  GET_FILTERED_PERSONS,
  ADD_NAVBAR_FILTERS,
  FILTER_NAVBAR_FILTERS,
} from "../actions/leaders"

const initialState = {
  leaders: [],
  industryPersons: [],
  cities: [],
  expertises: [],
  location: [],
  filteredLeaders: [],
  personsCities: [],
  personsExpertises: [],
  personsLocation: [],
  personsIndustries: [],
  filtersPersons: [],
  navbarFilters: [],

  // personsFilters: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_LEADERS:
      return {
        ...state,
        leaders: payload.leaders,
        cities: payload.cities,
        expertises: payload.expertises,
        location: payload.location,
        filteredLeaders: payload.leaders,
      }
    case GET_ALL_PERSONS:
      return {
        ...state,
        industryPersons: payload.profiles,
        filtersPersons: payload.filters,
        personsCities: payload.cities,
        personsExpertises: payload.expertises,
        personsLocation: payload.location,
        personsIndustries: payload.industries,
      }
    case GET_FILTERED_PERSONS:
      return {
        ...state,
        filteredPersons: payload,
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
    case ADD_NAVBAR_FILTERS:
      return {
        ...state,
        navbarFilters: state?.navbarFilters?.concat(payload),
      }
    case FILTER_NAVBAR_FILTERS:
      return {
        ...state,
        navbarFilters: state.navbarFilters.filter(
          filter => filter.id !== payload.id
        ),
      }

    default:
      return state
  }
}
