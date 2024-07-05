import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import ButNav from "./ButNav";
import SecondNav from "./SecondNav";
import Button from "../Button/Button";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="navigation">
      <button onClick={toggle} className="nav-toggle-button">
        {/* <ButNav className={navOpen ? "opened" : "close"} /> */}
        <SecondNav
          bot={navOpen ? 400 : 600}
          top={navOpen ? 600 : 400}
          mid={navOpen ? 0 : 22}
          color={navOpen ? "red" : "white"}
          rotate={navOpen ? "expanded" : "shut"}
        />
      </button>
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
