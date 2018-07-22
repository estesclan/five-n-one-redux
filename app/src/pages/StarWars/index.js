import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import Component from "@reactions/component";

const makeli = starName => {
  return <li key={starName.id}>{starName.name}</li>;
};

const StarWars = () => (
  <Component
    didMount={({ setState }) =>
      fetch("http://localhost:5000/starwars")
        .then(res => res.json())
        .then(starwars => {
          console.log({ starwars });
          setState({ starwars: starwars });
        })
        .catch(err => console.log(err))
    }
    initialState={{ starwars: [] }}
  >
    {({ state, setState }) => {
      console.log({ state });
      return (
        <div>
          <h1>Star Wars Characters</h1>
          <ul>{map(makeli, state.starwars)}</ul>
        </div>
      );
    }}
  </Component>
);
export default StarWars;
