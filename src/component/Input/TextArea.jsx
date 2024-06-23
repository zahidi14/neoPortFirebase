import React from "react";

const TextArea = ({ label, ...rest }) => {
  return (
    <div className="input-container">
      <textarea
        id={label}
        className="sci-fi-textarea"
        {...rest}
        required
      ></textarea>
      <label for={label} className="floating-label">
        {label}
      </label>
    </div>
  );
};

export default TextArea;
