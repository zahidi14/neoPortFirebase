import React from "react";
import "./heading.scss";
import Logo from "../../assets/heading.svg?react";

const Head = ({ label }) => {
  return (
    <div className="headd">
      <div className="logo">
        <Logo />
      </div>
      <div className="text">{label}</div>
    </div>
  );
};

export default Head;
