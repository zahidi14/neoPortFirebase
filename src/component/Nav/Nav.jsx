import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import ButNav from "./ButNav";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="navigation">
      <button onClick={toggle} className="nav-toggle-button">
        <ButNav />
        {navOpen ? "openMenu" : "closeMenu"}
      </button>
      <nav className={`nav-menu ${navOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
