import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div class="input-container">
      <input id={label} className="sci-fi-input" {...rest} required></input>
      <label for={label} className="floating-label">
        {label}
      </label>
    </div>
  );
};

export default Input;
