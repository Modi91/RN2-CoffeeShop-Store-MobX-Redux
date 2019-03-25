import * as actionTypes from "./types.js";
import axios from "axios";
export const getCofeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const cofeeShops = res.data;
      dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: cofeeShops });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: actionTypes.COFFEESHOPS_LOADING
  };
};
