import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import Component from "@reactions/component";

const li = buzzword => {
  console.log(buzzword.name);
  return <li key={buzzword.id}>{buzzword.name}</li>;
};

const Buzzwords = ({ match }) => (
  <Component
    didMount={({ setState }) =>
      fetch("http://localhost:5000/buzzwords")
        .then(res => res.json())
        .then(buzzwords => {
          console.log({ buzzwords });
          setState({ buzzwords: buzzwords });
        })
        .catch(err => console.log(err))
    }
    initialState={{ buzzwords: [] }}
  >
    {({ state, setState }) => {
      console.log({ state });
      return (
        <div>
          <h1>Buzzwords</h1>
          <ul>{map(li, state.buzzwords)}</ul>
        </div>
      );
    }}
  </Component>
);

export default Buzzwords;
