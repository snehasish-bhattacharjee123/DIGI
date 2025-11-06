"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import type { PortfolioItem } from "@shared/schema";

interface ScrollingImagesProps {
  items: PortfolioItem[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export const ScrollingImages = ({
  items,
  direction = "up",
  speed = "normal",
  pauseOnHover = true,
  className,
  imgProps,
}: ScrollingImagesProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const duration = speed === "fast" ? 30 : speed === "normal" ? 50 : 80;

  if (!items.length) return null;

  const animationStyle = isHovering && pauseOnHover ? "paused" : "running";

  // MOBILE - Horizontal scrolling
  if (isMobile) {
    return (
      <div
        className={cn("relative h-full w-full overflow-hidden", className)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="flex flex-row gap-3"
          style={{
            animation: `scrollHorizontal ${duration}s linear infinite`,
            animationPlayState: animationStyle,
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[180px] sm:w-[200px]"
            >
              <div className="group relative h-[240px] sm:h-[260px] w-full overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={item.imageUrl}
                  alt={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  {...imgProps}
                />
              </div>
            </div>
          ))}
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}-dup`}
              className="flex-shrink-0 w-[180px] sm:w-[200px]"
            >
              <div className="group relative h-[240px] sm:h-[260px] w-full overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={item.imageUrl}
                  alt={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  {...imgProps}
                />
              </div>
            </div>
          ))}
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes scrollHorizontal {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `,
          }}
        />
      </div>
    );
  }

  // DESKTOP - Vertical scrolling
  const verticalAnimation =
    direction === "up" ? "scrollVerticalUp" : "scrollVerticalDown";

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `${verticalAnimation} ${duration}s linear infinite`,
          animationPlayState: animationStyle,
        }}
      >
        {items.map((item, index) => (
          <div key={`${item.id}-${index}`} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[3/4]">
              <img
                src={item.imageUrl}
                alt={item.title || "Portfolio item"}
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                {...imgProps}
              />
            </div>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`${item.id}-${index}-dup`} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[3/4]">
              <img
                src={item.imageUrl}
                alt={item.title || "Portfolio item"}
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                {...imgProps}
              />
            </div>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`${item.id}-${index}-dup2`} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[3/4]">
              <img
                src={item.imageUrl}
                alt={item.title || "Portfolio item"}
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                {...imgProps}
              />
            </div>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scrollVerticalUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-66.666%); }
          }
          @keyframes scrollVerticalDown {
            0% { transform: translateY(-66.666%); }
            100% { transform: translateY(0); }
          }
        `,
        }}
      />
    </div>
  );
};
