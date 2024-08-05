import React from "react";

const BtnNav = ({ text }) => {
  return (
    <div className="navBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={189}
        height={57}
        fill="none"
        viewBox="0 0 189 57"
      >
        <g className="fill">
          <path
            fill="#17BDEF"
            fillOpacity={0.3}
            d="m12 12.5 5.914-5.914A2 2 0 0 1 19.328 6h150.844a2 2 0 0 1 1.414.586L177 12l5.414 5.414a2 2 0 0 1 .586 1.414v18.89a2 2 0 0 1-.53 1.357L177 45l-5.414 5.414a2 2 0 0 1-1.414.586H73.5a2 2 0 0 1-1.6-.8l-1.8-2.4a2 2 0 0 0-1.6-.8H38.907a2 2 0 0 0-1.505.683l-2.304 2.634a2 2 0 0 1-1.505.683H18.828a2 2 0 0 1-1.414-.586L12 45l-5.027-5.94a2 2 0 0 1-.473-1.293V18.828a2 2 0 0 1 .586-1.414L12 12.5Z"
          />
        </g>
        <g filter="url(#aa)">
          <path
            fill="#17BDEF"
            d="M160 5h12l12.5 13v20.5L172 52h-12v-2h11l11-11.5V18L171 7h-11V5Z"
          />
        </g>
        <g filter="url(#bb)">
          <path
            fill="#17BDEF"
            d="M29.5 5h-12L5 18v20.5L17.5 52h12v-2h-11l-11-11.5V18l11-11h11V5Z"
          />
        </g>
        <path fill="red" d="M39 48h9.5L46 51h-9.5l2.5-3Z" />
        <path fill="#171BEF" d="M60 48h9.5l-1.714 3H57.5l2.5-3Z" />
        <path fill="#5BEF17" d="M49.5 48H59l-2.5 3H47l2.5-3Z" />
        <text
          x={90}
          y={30}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
        >
          {text}
        </text>
        <defs>
          <filter
            id="aa"
            width={32.9}
            height={55.4}
            x={155.8}
            y={0.8}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={2.1} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_174_20"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_174_20"
              result="shape"
            />
          </filter>
          <filter
            id="bb"
            width={32.9}
            height={55.4}
            x={0.8}
            y={0.8}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={2.1} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_174_20"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_174_20"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BtnNav;
