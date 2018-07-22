import { fetch } from "isomorphic-fetch";
import { SET_FORTUNE_COOKIES } from "../constants";

export const setFortuneCookies = async (dispatch, getState) => {
  const fortuneCookies = await fetch(url).then(res => res.json());
  dispatch({ type: SET_FORTUNE_COOKIES, payload: fortuneCookies });
};
