import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-container">
      <input id={label} className="sci-fi-input" {...rest} required></input>
      <label htmlFor={label} className="floating-label">
        {label}
      </label>
    </div>
  );
};

export default Input;
