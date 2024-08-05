import React from "react";

const SVGComponents: React.FC = () => {
  return (
    <>
      <div className="arrow arrow--top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270.11"
          height="609.9"
          overflow="hidden"
        >
          <g className="item-to bounce-1">
            <path
              className="geo-arrow draw-in"
              d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
            />
          </g>
          <circle
            className="geo-arrow item-to bounce-2"
            cx="194.65"
            cy="69.54"
            r="7.96"
          />
          <circle
            className="geo-arrow draw-in"
            cx="194.65"
            cy="39.5"
            r="7.96"
          />
          <circle
            className="geo-arrow item-to bounce-3"
            cx="194.65"
            cy="9.46"
            r="7.96"
          />
        </svg>
      </div>
      <div className="arrow arrow--bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.35"
          height="649.9"
          overflow="hidden"
        >
          <g className="item-to bounce-1">
            <circle
              className="geo-arrow item-to bounce-3"
              cx="15.5"
              cy="580.36"
              r="7.96"
            />
            <circle
              className="geo-arrow draw-in"
              cx="15.5"
              cy="610.4"
              r="7.96"
            />
            <circle
              className="geo-arrow item-to bounce-2"
              cx="15.5"
              cy="640.44"
              r="7.96"
            />
          </g>
        </svg>
      </div>
      <div className="main">
        <div className="main__text-wrapper">
          <h1 className="main__title"></h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dotted-circle"
            width="352"
            height="352"
            overflow="hidden"
          >
            <circle
              cx="176"
              cy="176"
              r="174"
              fill="none"
              className="dotted-circle"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SVGComponents;