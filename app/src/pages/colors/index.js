import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import Component from "@reactions/component";

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  );
};

const Colors = ({ match }) => (
  <Component
    didMount={({ setState }) =>
      fetch("http://localhost:5000/colors")
        .then(res => res.json())
        .then(colors => setState({ colors: colors }))
    }
    initialState={{ colors: [] }}
  >
    {({ setState, state }) => {
      return (
        <div>
          <h1>Colors</h1>
          <ul>{map(li, state.colors)}</ul>
        </div>
      );
    }}
  </Component>
);

export default Colors;
