import React from "react";
import "./heading.scss";
import Logo from "../../assets/heading.svg?react";
import Title from "../../assets/title.svg?react";

const Head = ({ label }) => {
  return (
    <div className="headd">
      <div className="logo">
        <Logo />
      </div>
      <div className="title">
        <div className="text">{label}</div>
        <Title />
      </div>
    </div>
  );
};

export default Head;
