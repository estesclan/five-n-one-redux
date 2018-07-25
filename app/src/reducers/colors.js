import { SET_COLORS } from "../constants";
import { CHG_CURRENT_COLOR } from "../constants";
import { head } from "ramda";

export const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload;
    default:
      return state;
  }
};

export const currentColor = (state = [], action) => {
  switch (action.type) {
    case CHG_CURRENT_COLOR:
      console.log(" action.payload", action.payload);
      return head(action.payload);
    default:
      return state;
  }
};
