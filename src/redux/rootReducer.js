import { combineReducers } from "redux";

import AppReducer from "./app";
import SponsorshipsReducer from "./sponsorships";

const reducers = {
  app: AppReducer,
  sponsorships: SponsorshipsReducer,
};

export default combineReducers(reducers);
