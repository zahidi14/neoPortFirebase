import React from "react";
import BtnNav from "./BtnNav";
import "./button.scss";
const Btn = ({ link, label }) => {
  return (
    <div className="sci">
      <a href={link}>
        <BtnNav />
        {label}
      </a>
    </div>
  );
};

export default Btn;
