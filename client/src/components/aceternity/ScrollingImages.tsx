"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@shared/schema";

interface ScrollingImagesProps {
  items: PortfolioItem[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const ScrollingImages = ({
  items,
  speed = "normal",
  pauseOnHover = true,
  className,
}: ScrollingImagesProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollingItems, setScrollingItems] = useState<PortfolioItem[]>([]);

  // ✅ Detect mobile/tablet up to 1280px
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Duplicate items for infinite scroll
  useEffect(() => {
    if (items.length > 0) {
      setScrollingItems([...items, ...items]);
    }
  }, [items]);

  // ✅ Duration control
  const duration = speed === "fast" ? 25 : speed === "normal" ? 50 : 100;

  if (!items.length) return null;

  // ✅ MOBILE — Two horizontal rows
  if (isMobile) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden flex flex-col gap-6",
          "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
          className
        )}
        onMouseEnter={() => pauseOnHover && setIsHovering(true)}
        onMouseLeave={() => pauseOnHover && setIsHovering(false)}
      >
        {/* Row 1 → Left to Right */}
        <motion.div
          className="flex gap-4"
          initial={{ x: "0%" }}
          animate={
            isHovering
              ? { x: "0%" }
              : {
                  x: "-50%",
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration,
                    ease: "linear",
                  },
                }
          }
        >
          {[...scrollingItems, ...scrollingItems].map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              className="relative w-[200px] aspect-square flex-shrink-0 overflow-hidden rounded-[10px] shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title || "Portfolio item"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 → Right to Left */}
        <motion.div
          className="flex gap-4"
          initial={{ x: "-50%" }}
          animate={
            isHovering
              ? { x: "-50%" }
              : {
                  x: "0%",
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration,
                    ease: "linear",
                  },
                }
          }
        >
          {[...scrollingItems, ...scrollingItems].map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              className="relative w-[200px] aspect-square flex-shrink-0 overflow-hidden rounded-[10px] shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title || "Portfolio item"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  // ✅ DESKTOP — Vertical scrolling, fixed image cut issue
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden",
        // 👇 Softer fade top/bottom
        "[mask-image:linear-gradient(to_bottom,transparent_5%,white_20%,white_80%,transparent_95%)]",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      onMouseLeave={() => pauseOnHover && setIsHovering(false)}
    >
      <motion.div
        className="flex flex-col gap-4 py-12" // 👈 extra padding top/bottom
        initial={{ y: "0%" }}
        animate={
          isHovering
            ? { y: "0%" }
            : {
                y: "-50%",
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration,
                  ease: "linear",
                },
              }
        }
      >
        {[...scrollingItems, ...scrollingItems].map((item, idx) => (
          <div
            key={`col-${item.id}-${idx}`}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] shadow-lg"
          >
            <img
              src={item.imageUrl}
              alt={item.title || "Portfolio item"}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
