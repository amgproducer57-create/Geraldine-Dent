import React from 'react';

interface SmileCurveProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export const SmileCurve: React.FC<SmileCurveProps> = ({
  className = "",
  width = 180,
  height = 24,
  color = "#E8B86D"
}) => {
  return (
    <svg
      viewBox="0 0 180 24"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 14C45 22 135 22 176 6C150 18 85 24 4 14Z"
        fill={color}
        fillOpacity="0.25"
      />
      <path
        d="M5 13C48 23 132 23 175 6"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        className="animate-draw-smile"
      />
      {/* Little sparkle dot at the right tip */}
      <circle cx="174" cy="6" r="2.5" fill={color} className="animate-pulse" />
    </svg>
  );
};
