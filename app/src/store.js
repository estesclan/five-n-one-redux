import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { colors } from "./reducers/colors";
import { buzzwords } from "./reducers/buzzwords";
import { emogees } from "./reducers/emogees";
import { starwars } from "./reducers/starwars";
import { fortuneCookies } from "./reducers/fortune-cookies";

export default createStore(
  combineReducers({
    colors,
    buzzwords,
    emogees,
    starwars,
    fortuneCookies
  }),
  applyMiddleware(thunk)
);
