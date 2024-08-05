import React from "react";

const Btn = ({ label, props }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={180}
        height={47}
        fill="none"
        viewBox="0 0 180 47"
        {...props}
        className=""
      >
        <g>
          <path
            fill="#17BDEF"
            fillOpacity={0.3}
            d="m7 7.5 5.914-5.914A2 2 0 0 1 14.328 1h150.844a2 2 0 0 1 1.414.586L172 7l5.414 5.414a2 2 0 0 1 .586 1.414v18.89a2 2 0 0 1-.53 1.357L172 40l-5.414 5.414a2 2 0 0 1-1.414.586H68.5a2 2 0 0 1-1.6-.8l-1.8-2.4a2 2 0 0 0-1.6-.8H33.907a2 2 0 0 0-1.505.683l-2.304 2.634a2 2 0 0 1-1.505.683H13.828a2 2 0 0 1-1.414-.586L7 40l-5.027-5.94a2 2 0 0 1-.473-1.293V13.828a2 2 0 0 1 .586-1.414L7 7.5Z"
          />
        </g>
        <text
          x={90}
          y={23.5}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
        >
          {label}
        </text>
        <path
          fill="#17BDEF"
          d="M155 0h12l12.5 13v20.5L167 47h-12v-2h11l11-11.5V13L166 2h-11V0ZM24.5 0h-12L0 13v20.5L12.5 47h12v-2h-11l-11-11.5V13l11-11h11V0Z"
        />
        <path fill="red" d="M34 43h9.5L41 46h-9.5l2.5-3Z" />
        <path fill="#171BEF" d="M55 43h9.5l-1.714 3H52.5l2.5-3Z" />
        <path fill="#5BEF17" d="M44.5 43H54l-2.5 3H42l2.5-3Z" />
      </svg>
    </div>
  );
};

export default Btn;
