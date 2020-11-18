import { combineReducers } from "redux";

import AppReducer from "./app";

const reducers = {
  app: AppReducer,
};

export default combineReducers(reducers);
