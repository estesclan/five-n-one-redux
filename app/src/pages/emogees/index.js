import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

const makeli = anEmogee => {
  return <li key={anEmogee.id}>{anEmogee.name}</li>;
};

const Emogees = props => {
  return (
    <div>
      <h1>Emogees</h1>
      {console.log({ props })}
      <ul>{map(makeli, props.emogees)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { emogees: state.emogees };
};

const connector = connect(mapStateToProps);

export default connector(Emogees);
