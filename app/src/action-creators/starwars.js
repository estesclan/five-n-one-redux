import fetch from "isomorphic-fetch";
import { SET_STARWARS } from "../constants";
const url = "http:/localhost:3000/starwars";

export const setStarWars = async (dispatch, getState) => {
  const starWars = await fetch(url).then(res => res.json());
  dispatch({ type: SET_STARWARS, payload: starWars });
};
