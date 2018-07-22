import fetch from "isomorphic-fetch";
import { SET_EMOGEES } from "../constants";
const url = "http://localhost:5000/emogees";

export const setEmogees = async (dispatch, getState) => {
  const emogees = await fetch(url).then(res => res.json());
  dispatch({ type: SET_EMOGEES, payload: emogees });
};
