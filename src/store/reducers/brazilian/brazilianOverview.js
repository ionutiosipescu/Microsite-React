import {
  GET_HERO_SECTION_DATA,
  GET_OVERVIEW_SECTION_DATA,
} from "../../actions/brazilian/brazilianOverview";

const initialState = {
  heroSection: {},
  overviewSection: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HERO_SECTION_DATA: {
      return {
        ...state,
        heroSection: payload,
      };
    }
    case GET_OVERVIEW_SECTION_DATA: {
      return {
        ...state,
        overviewSection: payload,
      };
    }
    default:
      return state;
  }
};
