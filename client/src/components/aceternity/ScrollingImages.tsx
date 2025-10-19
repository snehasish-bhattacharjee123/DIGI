"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@shared/schema";

interface ScrollingImagesProps {
  items: PortfolioItem[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const ScrollingImages = ({
  items,
  direction = "up",
  speed = "normal",
  pauseOnHover = true,
  className,
}: ScrollingImagesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollingItems, setScrollingItems] = useState<PortfolioItem[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setScrollingItems([...items, ...items]);
    }
  }, [items]);

  const duration = speed === "fast" ? 25 : speed === "normal" ? 50 : 100;

  const variants = {
    initial: {
      y: direction === "up" ? "0%" : "-50%",
    },
    animate: {
      y: direction === "up" ? "-50%" : "0%",
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_25%,white_75%,transparent)]",
        className,
      )}
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      onMouseLeave={() => pauseOnHover && setIsHovering(false)}
    >
      <motion.div
        className="flex flex-col gap-4 py-2"
        variants={variants}
        initial="initial"
        animate={isHovering ? "initial" : "animate"}
      >
        {scrollingItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] shadow-lg"
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
};
