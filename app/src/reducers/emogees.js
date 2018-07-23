import { SET_EMOGEES } from "../constants";

export const emogees = (state = [], action) => {
  switch (action.type) {
    case SET_EMOGEES:
      return action.payload;
    default:
      return state;
  }
};
