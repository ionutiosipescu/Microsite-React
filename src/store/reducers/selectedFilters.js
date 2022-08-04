import { ADD_FILTER, REMOVE_FILTER } from "../actions/test";

const initialState = [];

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ADD_FILTER:
      addFilter(state, payload);
    case REMOVE_FILTER:
      return {
        ...state,
        test: payload,
      };
    default:
      return state;
  }
};

const addFilter = (state, payload) => {
  console.log("hey");
  console.log("payload", payload);
  console.log("state", state);
};

export default reducer;
