import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import Component from "@reactions/component";

const makeli = anEmogee => {
  return <li key={anEmogee.id}>{anEmogee.name}</li>;
};

const Emogees = () => (
  <Component
    didMount={({ setState }) =>
      fetch("http://localhost:5000/emogees")
        .then(res => res.json())
        .then(emogees => {
          console.log({ emogees });
          setState({ emogees: emogees });
        })
        .catch(err => console.log(err))
    }
    initialState={{ emogees: [] }}
  >
    {({ state, setState }) => {
      console.log({ state });
      return (
        <div>
          <h1>Awesome Emogees!</h1>
          <ul>{map(makeli, state.emogees)}</ul>
        </div>
      );
    }}
  </Component>
);
export default Emogees;
