import {
  GET_HERO_SECTION_DATA,
  GET_INDUSTRIES,
  GET_INDUSTRY,
  GET_EXPERTISES,
  GET_EXPERTISE,
} from "../../actions/hls/hlsHome";

const initialState = {
  heroSection: {},
  industries: [],
  expertises: [],
  industry: {},
  expertise: {},
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
      console.log(payload);
      return {
        ...state,
        industries: payload,
      };
    }
    case GET_EXPERTISES: {
      return {
        ...state,
        expertises: payload,
      };
    }
    case GET_INDUSTRY: {
      return {
        ...state,
        industry: payload,
      };
    }
    case GET_EXPERTISE: {
      return {
        ...state,
        expertise: payload,
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
