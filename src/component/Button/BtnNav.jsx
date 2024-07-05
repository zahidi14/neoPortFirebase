import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const BtnNav = ({ label, link, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={630}
      height={232}
      fill="none"
      viewBox="0 0 630 232"
      {...props}
    >
      <g filter="url(#a)">
        <path
          stroke="#78CCE2"
          strokeWidth={5}
          d="M142.164 16H57.803a8 8 0 0 0-7.497 5.208l-34.266 92a7.999 7.999 0 0 0 0 5.584l34.266 92A8 8 0 0 0 57.803 216h84.361"
        />
      </g>
      <g filter="url(#b)">
        <path
          stroke="#78CCE2"
          strokeWidth={5}
          d="M487.836 216h84.361a8 8 0 0 0 7.497-5.208l34.266-92a7.997 7.997 0 0 0 0-5.584l-34.266-92A8 8 0 0 0 572.197 16h-84.361"
        />
      </g>
      <g filter="url(#c)">
        <path
          fill="#78CCE2"
          fillOpacity={0.21}
          d="M219.256 38h78.35l7.543 8h164.776l4.477-8h94.116l24.989 77-24.989 77h-228.9l-6.708-13H151.118l-6.666 13H64.328l-24.254-77 24.254-77h154.928Z"
          shapeRendering="crispEdges"
        />
        <path
          stroke="#78CCE2"
          d="m304.785 46.343.148.157h165.285l.143-.256 4.335-7.744h93.459l24.826 76.5-24.826 76.5H339.923l-6.569-12.729-.14-.271H150.813l-.139.272-6.527 12.728H64.694L40.598 115l24.096-76.5H297.39l7.395 7.843Z"
          shapeRendering="crispEdges"
        />
      </g>
      <path fill="#78CCE2" d="M301.566 38h170.15l-3.582 6H306.94l-5.374-6Z" />
      <g filter="url(#d)">
        <path fill="#78CCE2" d="M336.493 192H147.538l4.478-10h180l4.477 10Z" />
      </g>
      <defs>
        <filter
          id="a"
          width={154.327}
          height={230.2}
          x={0.437}
          y={0.9}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={4}
            result="effect1_dropShadow_25_5"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={4.3} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.79 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_25_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_25_5"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          width={154.327}
          height={230.2}
          x={475.236}
          y={0.9}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={4}
            result="effect1_dropShadow_25_5"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={4.3} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.79 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_25_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_25_5"
            result="shape"
          />
        </filter>
        <filter
          id="c"
          width={564.033}
          height={164.6}
          x={34.774}
          y={32.7}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_25_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_25_5"
            result="shape"
          />
        </filter>
        <filter
          id="d"
          width={196.955}
          height={18}
          x={143.538}
          y={182}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_25_5" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_25_5"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BtnNav;
