import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

const li = fortuneCookie => {
  //console.log(fortuneCookie.name);
  return <li key={fortuneCookie.id}>{fortuneCookie.name}</li>;
};

const FortuneCookies = props => {
  return (
    <div>
      <h1>Fortune Cookies!</h1>
      {console.log({ props })}
      <ul>{map(li, props.fortuneCookies)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { fortuneCookies: state.fortuneCookies };
};
const connector = connect(mapStateToProps);

export default connector(FortuneCookies);
