import * as actionTypes from "../actions/types.js";

const initialState = {
  coffeeShops: [],
  loading: true
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeshops: action.payload,
        loading: false
      };

    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default coffeeReducer;
