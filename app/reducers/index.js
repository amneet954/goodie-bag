import Axios from "axios";

const initialState = {
  allCandies: []
};

//WHAT WAYS CAN WE UPDATE STATE

// ACTION TYPE

const GOT_CANDIES = "GOT_CANDIES";

//ACTION CREATOR
const gotCandies = candies => ({ type: GOT_CANDIES, candies });

/// TRUNK CREATOR

export const gettingCandies = () => async dispatch => {
  const { data } = await Axios.get("api/candies");
  console.log("-wooah", gotCandies(data));
  dispatch(gotCandies(data));
};

// CASE IN REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return { ...state, allCandies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
