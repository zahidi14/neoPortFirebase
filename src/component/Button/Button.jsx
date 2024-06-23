import React from "react";
import "./button.scss";
import a from "../../assets/btn.svg";

const Button = ({ label, icon, link, ...rest }) => {
  return (
    <div className="btn-frame">
      <a className="scifi-button" href={link}>
        {label}
      </a>
    </div>
  );
};

export default Button;
