import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

const li = buzzword => {
  console.log(buzzword.name);
  return <li key={buzzword.id}>{buzzword.name}</li>;
};

const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      {console.log({ props })}
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords };
};

const connector = connect(mapStateToProps);

export default connector(Buzzwords);
