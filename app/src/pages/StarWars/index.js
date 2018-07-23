import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

const makeli = starName => {
  return <li key={starName.id}>{starName.name}</li>;
};

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars!</h1>
      {console.log({ props })}
      <ul>{map(makeli, props.starwars)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { starwars: state.starwars };
};

const connector = connect(mapStateToProps);

export default connector(StarWars);
