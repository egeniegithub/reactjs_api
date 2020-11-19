import { combineReducers } from "redux";

import AppReducer from "./app";
import SponsorshipsReducer from "./sponsorships";
import TilesReducer from "./tiles";

const reducers = {
  app: AppReducer,
  sponsorships: SponsorshipsReducer,
  tiles: TilesReducer,
};

export default combineReducers(reducers);
