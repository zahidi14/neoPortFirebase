import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";
import Butt from "./but.svg?react";
const Button = ({ text, link }) => {
  return (
    <div className="button">
      <Link to={link}>
        <div className="but">
          <span className="button-text">{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default Button;
