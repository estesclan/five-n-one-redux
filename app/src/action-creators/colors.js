import fetch from "isomorphic-fetch";
import { SET_COLORS } from "../constants";
import { CHG_CURRENT_COLOR } from "../constants";
const url = "http://localhost:5000/colors";

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json());
  dispatch({ type: SET_COLORS, payload: colors });
};

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { "Content-Type": "application/json" };
  const method = "POST";
  const body = JSON.stringify(color);

  const result = await fetch(url, {
    headers,
    method,
    body
  }).then(res => res.json());
  if (result.ok) {
    dispatch(setColors);
    history.push("/colors");
  } else {
    alert("dude... you blew it.");
  }
};

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } });
};

export const getColor = id => async (dispatch, getState) => {
  console.log("here's the id", id);
  const color = await fetch(url + "/" + id).then(res => res.json());
  console.log("color ", color);
  dispatch({ type: CHG_CURRENT_COLOR, payload: color });
};

export const removeColor = (id, history) => async (dispatch, getState) => {
  alert("ID in ac", id);
  const results = await fetch(url + "/" + id, {
    method: "DELETE"
  }).then(res => res.json());

  if (results.ok) {
    dispatch(setColors);
    history.push("/colors");
  } else {
    alert("Dude, removeColor is jacked up in action creators");
  }
};

export const updateColor = (color, history) => async (dispatch, getState) => {
  const result = await fetch(url + "/" + color.id, {
    headers: {
      "content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(color)
  }).then(res => res.json());

  if (result.ok) {
    dispatch(setColors);
    history.push("/colors/" + color.id);
  }
};
