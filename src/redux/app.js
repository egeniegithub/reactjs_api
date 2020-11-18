//Types
const SET_APP_NAME = "SET_APP_NAME";

//default state
const initialState = {
  appName: "My App",
};

//Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_APP_NAME:
      return {
        ...state,
        appName: action.payload,
      };
    default:
      return state;
  }
};

//action creators
export const setAppName = (appName) => (dispatch) => {
  return dispatch({ type: SET_APP_NAME, payload: appName });
};

//default export reducer
export default reducer;
