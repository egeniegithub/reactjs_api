import axios from "axios";
import * as _ from "lodash";

const api = axios.create({ baseURL: "https://api-test.test.aws.the8app.com/" });

//Types
const FETCH_SPONSORSHIPS = "FETCH_SPONSORSHIPS";

//default state
const initialState = {
  sponsorships: [],
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPONSORSHIPS:
      return {
        ...state,
        sponsorships: action.payload,
      };
    default:
      return state;
  }
};

//data layer functions
const fetchSponsorshipsReq = async () => {
  try {
    let response = await api.get("campaigns/sampledata/sponsorships");
    return response;
  } catch (err) {
    console.log("sponsorships err:", err);
    return err;
  }
};

//action creators
export const fetchSponsorships = (callback = () => {}) => (dispatch) => {
  fetchSponsorshipsReq()
    .then((res) => {
      let sponsorships = _.get(res, "data", []);
      callback();
      return dispatch({ type: FETCH_SPONSORSHIPS, payload: sponsorships });
    })
    .catch((err) => {
      callback();
      return dispatch({ type: FETCH_SPONSORSHIPS, payload: err });
    });
};

//default export reducer
export default reducer;
