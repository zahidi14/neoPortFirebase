import React from "react";

const SecondNav = ({ bot, top, mid, color, rotate, props }) => {
  const lineStyle = {
    transition: "transform 0.5s ease-in-out",
    transform: `translateY(${bot - top})`,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      className={rotate}
      style={{
        enableBackground: "new 0 0 1000 1000",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <circle
        className="st0"
        cx={500}
        cy={500}
        r={312}
        style={{
          fill: "none",
          stroke: "#78cce2",
          strokeWidth: 12,
          strokeMiterlimit: 10,
          strokeDasharray: "400,200",
        }}
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
        style={{
          fill: "none",
          stroke: "#78cce2",
          strokeWidth: 22,
          strokeMiterlimit: 10,
          strokeDasharray: "50, 90, 200, 30, 40, 0",
        }}
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
        style={{
          fill: "none",
          stroke: "#78cce2",
          strokeWidth: 42,
          strokeMiterlimit: 10,
          strokeLinecap: "square",
          strokeDasharray: "120, 20, 110, 20, 140",
        }}
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
        style={{
          fill: "none",
          stroke: "#78cce2",

          strokeMiterlimit: 10,
          strokeWidth: 16,
          strokeLinecap: "square",
        }}
      />
      <circle
        className="st4"
        cx={500}
        cy={500}
        r={215.1}
        style={{
          fill: "none",
          stroke: "#78cce2",

          strokeMiterlimit: 10,
          strokeWidth: 16,
          strokeLinecap: "square",
          strokeDasharray: "110, 120",
        }}
      />
      <line
        x1={350}
        y1={500}
        x2={650}
        y2={500}
        stroke={color}
        strokeWidth={mid}
      />
      <line
        x1={350}
        y1={400}
        x2={650}
        y2={top}
        stroke={color}
        strokeWidth={22}
      />
      <line
        x1={350}
        y1={600}
        x2={650}
        y2={bot}
        stroke={color}
        strokeWidth={22}
      />
    </svg>
  );
};

export default SecondNav;
