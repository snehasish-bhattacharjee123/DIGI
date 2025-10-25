import React from "react";

interface LiquidButtonProps {
  label: string;
  color?: string; // solid color for border & fill
  duration?: number; // animation duration in ms
  className?: string;
  onClick?: () => void;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  label,
  color = "#646cff",
  duration = 700,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative group px-8 py-4 text-white font-semibold text-base border-2 rounded-full overflow-hidden cursor-pointer transition-all ease-in-out ${className}`}
      style={{
        borderColor: color,
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

      {/* Gloss reflection overlay */}
      <style jsx>{`
        button {
          position: relative;
          isolation: isolate;
        }
        button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 50% 0%,
              rgba(255, 255, 255, 0.25),
              transparent 60%
            )
            no-repeat;
          transform: translateY(120%);
          transition: transform ${duration}ms cubic-bezier(0.77, 0, 0.175, 1);
          border-radius: inherit;
          z-index: 1;
        }
        button:hover::before {
          transform: translateY(0);
        }
      `}</style>
    </button>
  );
};
