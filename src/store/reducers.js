import { combineReducers } from "redux"
import test from "./reducers/test"
import leaders from "./reducers/leaders"
import brazilLeaders from "./reducers/brazilian/brazilLeaders"
import brazilianOverview from "./reducers/brazilian/brazilianOverview"

import hlsHero from "./reducers/hls/hlsHome"
export default combineReducers({
  test,
  leaders,
  brazilLeaders,
  brazilianOverview,
  hlsHero,
})
