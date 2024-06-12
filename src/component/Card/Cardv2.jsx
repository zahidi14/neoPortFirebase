import React from "react";
import { Link } from "react-router-dom";
import Card from "../../assets/projectcard.svg?react";
import "./card.scss";

const Cardv2 = ({ title, language, desc, imgurl, link }) => {
  console.log({ lang: language });
  return (
    <div className="contain">
      <Link to={link}>
        <div className="backg">
          <Card />
        </div>
        <div className="detail">
          {language.map((lang, index) => (
            <span key={index}>{lang}</span>
          ))}

          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default Cardv2;
