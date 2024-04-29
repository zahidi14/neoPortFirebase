import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const BtnNav = ({ label, link }) => {
  return (
    <button className="navi">
      <Link to={link}>{label}</Link>
    </button>
  );
};

export default BtnNav;
