import React from "react";
import PropTypes from "prop-types";
import "./bg.scss";

const MainBg = ({ children }) => {
  return <div className="bgCard">{children}</div>;
};

MainBg.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainBg;
