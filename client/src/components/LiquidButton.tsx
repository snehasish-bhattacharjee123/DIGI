import React from "react";

interface LiquidButtonProps {
  label: string;
  color?: string; // solid color for border & fill
  textColor?: string; // text color
  duration?: number; // animation duration in ms
  className?: string;
  onClick?: () => void;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  label,
  color = "#646cff",
  textColor = "#ffffff", // default white
  duration = 700,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative group px-8 py-4 font-semibold text-base border-2 rounded-full overflow-hidden cursor-pointer transition-all ease-in-out ${className}`}
      style={{
        borderColor: color,
        color: textColor, // dynamic text color
        transitionDuration: `${duration}ms`,
      }}
    >
      <span className="relative z-10">{label}</span>

      {/* Solid color fill animation */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className="absolute inset-0 translate-y-[110%] group-hover:translate-y-0 transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            backgroundColor: color,
            transitionDuration: `${duration}ms`,
          }}
        ></span>
      </span>
    </button>
  );
};
