import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Colors from "./pages/colors";
import Buzzwords from "./pages/buzzwords";
import StarWars from "./pages/StarWars";
import Emogees from "./pages/emogees";
import FortuneCookies from "./pages/fortuneCookies";

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  );
};

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/starwars" component={StarWars} />
          <Route path="/emogees" component={Emogees} />
          <Route path="/fortunecookies" component={FortuneCookies} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
