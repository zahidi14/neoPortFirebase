import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
const Card = ({ title, language, desc, imgurl, link }) => {
  console.log({ lang: language });
  return (
    <div className="cont">
      <div class="card">
        <Link className="link" to={link}>
          <div class="content">
            <div className="titlee">{title}</div>
            <div class="image">
              <img src={imgurl} alt="" />
            </div>
            <ul>
              {language.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
            <div class="desc">{desc}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
