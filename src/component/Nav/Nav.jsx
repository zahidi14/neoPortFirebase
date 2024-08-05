import React, { useState } from "react";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import ButNav from "./ButNav";
import SecondNav from "./SecondNav";
import Button from "../Button/Button";
import Title from "./title.svg?react";
import BtnNav from "./BtnNav";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const getLoc = () => {
    switch (location.pathname) {
      case "/":
        return "Welcome Aboard";
      case "/about":
        return "Bio Log";
      case "/project":
        return "Mission Log";
      case "/contact":
        return "Connect Station";
      default:
        return "Page";
    }
  };

  const toggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="navigation">
      <div className="head">
        <button onClick={toggle} className="nav-toggle-button">
          {/* <ButNav className={navOpen ? "opened" : "close"} /> */}
          <ButNav
            bot={navOpen ? 425 : 575}
            top={navOpen ? 575 : 425}
            mid={navOpen ? 0 : 22}
            color={navOpen ? "#ff1800" : "#fff"}
            rotate={navOpen ? "expanded" : "shut"}
          />
        </button>
        <div className="title">
          <div className="text">{getLoc()}</div>
          <Title />
        </div>
      </div>

      <nav className={`nav-menu ${navOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <Link to="/">
              <BtnNav text="Dashboard" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <BtnNav text="Bio Log" />
            </Link>
          </li>
          <li>
            <Link to="/project">
              <BtnNav text="Mission Log" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <BtnNav text="Send Signal" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
