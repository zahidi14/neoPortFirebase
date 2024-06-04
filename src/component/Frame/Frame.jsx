import React from 'react';
import PropTypes from 'prop-types';
import "./frame.scss";
import LayoutBackground from "../../assets/frame.svg?react"; 

const Frame = ({ children }) => {
  return (
    <div className="frame-container">
      <div className="bg">

      <LayoutBackground />
      </div>
      <div className="frame-content">
        {children}
      </div>
    </div>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;

