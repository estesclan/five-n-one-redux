import fetch from "isomorphic-fetch";
import { SET_FORTUNE_COOKIES } from "../constants";
const url = "http://localhost:5000/fortunecookie";

export const setFortuneCookies = async (dispatch, getState) => {
  const fortuneCookies = await fetch(url).then(res => res.json());
  //console.log(fortuneCookies);
  dispatch({ type: SET_FORTUNE_COOKIES, payload: fortuneCookies });
};
