import React from "react";

const ButNav = ({ bot, top, mid, color, props, rotate }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
    enableBackground="new 0 0 1000 1000"
    xmlSpace="preserve"
    className={rotate}
    {...props}
  >
    <circle
      className="st0"
      cx={500}
      cy={500}
      r={312}
      fill="none"
      stroke="#17BDEF"
      strokeWidth={12}
      strokeMiterlimit={10}
      strokeDasharray="400,200"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 500 500"
        to="360 500 500"
        dur="40s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      className="st1"
      cx={500}
      cy={500}
      r={267.7}
      fill="none"
      stroke="#17BDEF"
      strokeWidth={22}
      strokeMiterlimit={10}
      strokeDasharray="50, 90, 200, 30, 40, 0"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 500 500"
        to="360 500 500"
        dur="10s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      className="st2"
      cx={500}
      cy={500}
      r={366.8}
      transform="rotate(0 500 500)"
      fill="none"
      stroke="#17BDEF"
      strokeWidth={42}
      strokeMiterlimit={10}
      strokeLinecap="square"
      strokeDasharray="120, 20, 110, 20, 140"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 500 500"
        to="-360 500 500"
        dur="7s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      className="st3"
      cx={500}
      cy={500}
      r={385.1}
      fill="none"
      stroke="#17BDEF"
      strokeMiterlimit={10}
      strokeWidth={16}
      strokeLinecap="square"
    />
    <circle
      className="st4"
      cx={500}
      cy={500}
      r={215.1}
      fill="none"
      stroke="#78cce2"
      strokeMiterlimit={10}
      strokeWidth={16}
      strokeLinecap="square"
      strokeDasharray="110, 120"
    />
    <line
      x1={400}
      y1={500}
      x2={600}
      y2={500}
      stroke={color}
      strokeWidth={mid}
    />
    <line
      x1={400}
      y1={575}
      x2={600}
      y2={bot}
      stroke={color}
      strokeWidth={22}
      fill={color}
    />
    <line
      x1={400}
      y1={425}
      x2={600}
      y2={top}
      stroke={color}
      strokeWidth={22}
      fill={color}
    />
  </svg>
);

export default ButNav;
