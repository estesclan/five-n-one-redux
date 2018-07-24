import React from "react";
import { Link } from "react-router-dom";

const Form = ({ id, name, value, onChange, cancelURL, onSubmit }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        <label className="dib">id</label>
        <div>{id}</div>
      </div>
      <div>
        <label className="dib">name</label>
        <input
          type="text"
          value={name}
          onChange={e => onChange("name", e.target.value)}
        />
      </div>
      <div>
        <label className="dib">value</label>
        <input
          type="text"
          value={value}
          onChange={e => onChange("value", e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <Link to={cancelURL}>Cancel</Link>
      </div>
    </form>
  );
};

export default Form;
