import {
  GET_HERO_SECTION_DATA,
  GET_INDUSTRIES,
} from "../../actions/hls/hlsHome";

const initialState = {
  heroSection: {},
  industries: [],
  // overviewSection: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HERO_SECTION_DATA: {
      // console.log(payload);
      return {
        ...state,
        heroSection: payload,
      };
    }
    case GET_INDUSTRIES: {
      return {
        ...state,
        industries: payload,
      };
    }
    // case GET_OVERVIEW_SECTION_DATA: {
    //   return {
    //     ...state,
    //     overviewSection: payload,
    //   };
    // }
    default:
      return state;
  }
};
