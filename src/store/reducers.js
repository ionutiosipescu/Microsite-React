import { combineReducers } from "redux";
import logger from "redux-logger";
import test from "./reducers/test";
import leaders from "./reducers/leaders";

export default combineReducers({
  test,
  leaders,
});
