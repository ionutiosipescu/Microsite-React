import {
  GET_ALL_LEADERS,
  GET_FILTER_TAGS,
  FILTER_LEADERS,
} from "../actions/leaders";

const initialState = {
  leaders: [],
  cities: [],
  expertises: [],
  location: [],
  filteredLeaders: [],
  filterTags: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_LEADERS:
      return {
        leaders: payload.leaders,
        cities: payload.cities,
        expertises: payload.expertises,
        location: payload.location,
        filteredLeaders: payload.leaders,
      };
    case GET_FILTER_TAGS: {
      return {
        ...state,
        filterTags: payload,
      };
    }
    case FILTER_LEADERS:
      return {
        ...state,
        filteredLeaders: payload,
      };

    default:
      return state;
  }
};
