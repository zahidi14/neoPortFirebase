import React from "react";

const ButNav = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
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
      r={302.8}
      style={{
        fill: "none",
        stroke: "#78cce2",
        strokeWidth: 42,
        strokeMiterlimit: 10,
        strokeDasharray: 500,
      }}
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 500 500"
        to="360 500 500"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      className="st1"
      cx={500}
      cy={500}
      r={237.7}
      style={{
        fill: "none",
        stroke: "#78cce2",
        strokeWidth: 42,
        strokeMiterlimit: 10,
        strokeDasharray: 232,
      }}
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 500 500"
        to="90 500 500"
        dur="2s"
        repeatCount={1}
      />
    </circle>
    <circle
      style={{
        fill: "none",
        stroke: "#78cce2",
        strokeWidth: 42,
        strokeMiterlimit: 10,
        strokeLinecap: "square",
        strokeDasharray: 600,
      }}
      className="st2"
      cx={500}
      cy={500}
      r={366.8}
      transform="rotate(0 500 500)"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 500 500"
        to="-360 500 500"
        dur="50s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx={500}
      cy={500}
      r={100}
      stroke="#78cce2"
      strokeWidth={22}
      style={{
        fill: "none",
      }}
    />
    <rect width={22} height={120} x={492} y={350} fill="#78cce2" rx={10} />
    <rect
      width={22}
      height={120}
      x={515}
      y={-410}
      fill="#78cce2"
      rx={10}
      transform="rotate(90 31 14)"
    />
    <rect
      width={22}
      height={120}
      x={495}
      y={-640}
      fill="#78cce2"
      rx={10}
      transform="rotate(90 12 14)"
    />
    <rect width={22} height={120} x={492} y={550} fill="#78cce2" rx={10} />
  </svg>
);
export default ButNav;
