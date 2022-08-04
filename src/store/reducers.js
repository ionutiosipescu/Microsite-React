import { combineReducers } from "redux";

import test from "./reducers/test";
import selectedFilters from "./reducers/selectedFilters";

export default combineReducers({
  test,
  selectedFilters,
});
