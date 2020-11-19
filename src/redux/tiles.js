import axios from "axios";
import * as _ from "lodash";

const api = axios.create({ baseURL: "https://api-test.test.aws.the8app.com/" });

//Types
const FETCH_TILES = "FETCH_TILES";

//default state
const initialState = {
  tiles: [],
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TILES:
      return {
        ...state,
        tiles: action.payload,
      };
    default:
      return state;
  }
};

//data layer functions
const fetchTilesReq = async () => {
  try {
    let response = await api.get("campaigns/sampledata/tiles");
    return response;
  } catch (err) {
    console.log("tiles err:", err);
    return err;
  }
};

//action creators
export const fetchTiles = (callback = () => {}) => (dispatch) => {
  fetchTilesReq()
    .then((res) => {
      let Tiles = _.get(res, "data", []);
      callback();
      return dispatch({ type: FETCH_TILES, payload: Tiles });
    })
    .catch((err) => {
      callback();
      return dispatch({ type: FETCH_TILES, payload: err });
    });
};

//default export reducer
export default reducer;
