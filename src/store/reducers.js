import { combineReducers } from "redux";
import logger from "redux-logger";
import test from "./reducers/test";
import leaders from "./reducers/leaders";
import brazilLeaders from "./reducers/brazilian/brazilLeaders";
import brazilianOverview from "./reducers/brazilian/brazilianOverview";

//new Design
import hlsHero from "./reducers/hls/hlsHome";

export default combineReducers({
  test,
  leaders,
  brazilLeaders,
  brazilianOverview,
  hlsHero,
});
