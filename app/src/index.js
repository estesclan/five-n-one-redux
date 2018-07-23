import React from "react";
import { render } from "react-dom";
import "tachyons";
import { Provider } from "react-redux";
import store from "./store";
import { setColors } from "./action-creators/colors";
import { setBuzzwords } from "./action-creators/buzzwords";
import { setEmogees } from "./action-creators/emogees";
import { setStarWars } from "./action-creators/starwars";
import { setFortuneCookies } from "./action-creators/fortune-cookies";

import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(setColors);
store.dispatch(setBuzzwords);
store.dispatch(setEmogees);
store.dispatch(setStarWars);
store.dispatch(setFortuneCookies);
