import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import Component from "@reactions/component";

const li = fortuneCookie => {
  console.log(fortuneCookie.name);
  return <li key={fortuneCookie.id}>{fortuneCookie.name}</li>;
};

const FortuneCookies = ({ match }) => (
  <Component
    didMount={({ setState }) =>
      fetch("http://localhost:5000/fortunecookie")
        .then(res => res.json())
        .then(fortuneCookies => {
          setState({ fortuneCookies: fortuneCookies });
        })
        .catch(err => console.log(err))
    }
    initialState={{ fortuneCookies: [] }}
  >
    {({ state, setState }) => {
      console.log({ state });
      return (
        <div>
          <h1>Awesome Fortune Cookies!</h1>
          <ul>{map(li, state.fortuneCookies)}</ul>
        </div>
      );
    }}
  </Component>
);

export default FortuneCookies;
