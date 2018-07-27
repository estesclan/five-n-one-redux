import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Colors from "./pages/colors";
import Buzzwords from "./pages/buzzwords";
import StarWars from "./pages/StarWars";
import Emogees from "./pages/emogees";
import FortuneCookies from "./pages/fortuneCookies";
import ColorForm from "./pages/colors/form";
import ShowColor from "./pages/colors/show";
import EditColorForm from "./pages/colors/edit-form";

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
          <Link to="/emogees">Emojis</Link>
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
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/buzzwords" component={Buzzwords} />
          <Route exact path="/starwars" component={StarWars} />
          <Route exact path="/emogees" component={Emogees} />
          <Route exact path="/fortune-cookies" component={FortuneCookies} />
          <Route exact path="/colors/new" component={ColorForm} />
          <Route exact path="/colors/:id/edit" component={EditColorForm} />
          <Route exact path="/colors/:id" component={ShowColor} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
