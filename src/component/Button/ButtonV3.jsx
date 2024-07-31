import React from "react";
import "./button.scss";
const ButtonV3 = ({ text }) => {
  const styles = {
    svg: {
      cursor: "pointer",
    },
  };
  return (
    <div className="but3">
      <div className="v3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={211}
          height={70}
          fill="none"
          viewBox="0 0 211 70"
          style={styles.svg}
        >
          <text
            x="50%"
            y="50%"
            fill="#fff"
            fontSize={20}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {text}
          </text>
          <path
            stroke="#17BDEF"
            strokeWidth={4}
            d="M35.455 6H20.512a8 8 0 0 0-7.637 5.618L6.743 31.277a8 8 0 0 0 0 4.764L12.875 55.7a8 8 0 0 0 7.637 5.618h14.943m137.216 0h17.143a8 8 0 0 0 7.569-5.41l6.73-19.658a8 8 0 0 0 0-5.182l-6.73-19.659A8 8 0 0 0 189.814 6h-17.143"
          />
          <g filter="url(#a)">
            <path
              fill="#17BDEF"
              d="M99.956 6h61.119l-1.287 2.155h-57.902L99.956 6Zm12.546 55.318H44.628l1.609-3.592h64.657l1.608 3.592Z"
            />
          </g>
          <g filter="url(#b)">
            <path
              fill="#17BDEF"
              fillOpacity={0.3}
              id="fill"
              d="m98.537 6 2.709 2.874h59.189L162.043 6h33.807l8.976 27.659-8.976 27.659h-82.222l-2.41-4.67h-65.3l-2.395 4.67H14.742L6.03 33.658 14.742 6h83.795Z"
              shapeRendering="crispEdges"
            />
            <path
              stroke="#78CCE2"
              d="m100.882 9.217.148.157h59.698l.143-.256 1.465-2.618h33.151l8.814 27.159-8.814 27.159h-81.554l-2.27-4.4-.14-.27H45.612l-.14.272-2.254 4.398h-28.11l-8.554-27.16L15.109 6.5H98.32l2.561 2.717Z"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="a"
              width={124.447}
              height={63.318}
              x={40.628}
              y={6}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={4} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_84_171"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_84_171"
                result="shape"
              />
            </filter>
            <filter
              id="b"
              width={209.397}
              height={65.918}
              x={0.73}
              y={0.7}
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
              <feGaussianBlur stdDeviation={2.65} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_84_171"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_84_171"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ButtonV3;
