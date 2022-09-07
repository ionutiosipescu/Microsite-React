import { combineReducers } from "redux"
import leaders from "./reducers/leaders"
import brazilLeaders from "./reducers/brazilian/brazilLeaders"
import brazilianOverview from "./reducers/brazilian/brazilianOverview"
import filters from "./reducers/filters"
import hlsHero from "./reducers/hls/hlsHome"

export default combineReducers({
  leaders,
  brazilLeaders,
  brazilianOverview,
  hlsHero,
  filters,
})
