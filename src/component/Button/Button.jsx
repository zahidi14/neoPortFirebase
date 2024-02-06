import React from "react";
import "./button.scss";

const Button = ({ label, icon, ...rest }) => {
  return (
    <button className="but" {...rest}>
      <img src={icon} alt="" />
      <span>{label}</span>
    </button>
  );
};

export default Button;
