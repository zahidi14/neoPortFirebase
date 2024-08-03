import React, { useState } from "react";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import ButNav from "./ButNav";
import SecondNav from "./SecondNav";
import Button from "../Button/Button";
import Title from "./title.svg?react";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const getLoc = () => {
    switch (location.pathname) {
      case "/":
        return "Wellcome";
      case "/about":
        return "User Profile";
      case "/project":
        return "Mission Log";
      case "/contact":
        return "Send Signal";
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
              <Button label="Home" />{" "}
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button label="About" />
            </Link>
          </li>
          <li>
            <Link to="/project">
              <Button label="Project" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button label="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
