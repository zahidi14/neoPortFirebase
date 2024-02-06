import React, { useState, useEffect } from "react";
import "./heading.scss";
const Heading = ({ label }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <h1>{label}</h1>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isDesktop ? "700" : "280"}
          height="39"
          fill="none"
          viewBox="0 0 727 39"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M20.58 19.884 45 2.44 43.256 0 18.41 17.748a11.449 11.449 0 0 0-6.91-2.307c-6.351 0-11.5 5.149-11.5 11.5s5.149 11.5 11.5 11.5S23 33.292 23 26.941c0-2.66-.903-5.109-2.42-7.057Z"
            clip-rule="evenodd"
          />
          <path stroke="#fff" stroke-width="3" d="M42 2.059 727 2" />
        </svg>
      </div>
    </div>
  );
};

export default Heading;
