"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import type { PortfolioItem } from "@shared/schema";

const isVideoSrc = (src: string) =>
  /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

const posterCache = new Map<string, string>();

const getVideoPosterDataUrl = (title?: string) => {
  const safeTitle = (title ?? "").trim().slice(0, 36);
  const cached = posterCache.get(safeTitle);
  if (cached) return cached;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1220"/>
      <stop offset="0.55" stop-color="#111B2E"/>
      <stop offset="1" stop-color="#0B1220"/>
    </linearGradient>
    <radialGradient id="r" cx="0.5" cy="0.35" r="0.8">
      <stop offset="0" stop-color="#22C55E" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#22C55E" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="800" fill="url(#g)"/>
  <rect width="600" height="800" fill="url(#r)"/>
  <rect x="34" y="34" width="532" height="732" rx="28" fill="none" stroke="#FFFFFF" stroke-opacity="0.12"/>
  <g transform="translate(48 60)" fill="#FFFFFF" fill-opacity="0.86" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-weight="700">
    <text font-size="26" letter-spacing="0.02em">${safeTitle.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</text>
    <text y="36" font-size="14" fill-opacity="0.62" font-weight="600">Video preview</text>
  </g>
  <g transform="translate(300 430)">
    <circle r="64" fill="#FFFFFF" fill-opacity="0.10"/>
    <circle r="62" fill="none" stroke="#FFFFFF" stroke-opacity="0.18"/>
    <path d="M -16 -24 L 32 0 L -16 24 Z" fill="#FFFFFF" fill-opacity="0.75"/>
  </g>
</svg>`;

  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  posterCache.set(safeTitle, dataUrl);
  return dataUrl;
};

interface ScrollingImagesProps {
  items: PortfolioItem[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const derivePosterCandidates = (videoSrc: string) => {
  const base = videoSrc.replace(/\.(mp4|webm|ogg)(\?.*)?$/i, "");
  return [`${base}-poster.webp`, `${base}-poster.jpg`, `${base}-poster.png`];
};

export const ScrollingImages = ({
  items,
  direction = "up",
  speed = "normal",
  pauseOnHover = true,
  className,
  imgProps,
}: ScrollingImagesProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 1024 : false,
  );

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
                {isVideoSrc(item.imageUrl) ? (
                  <VideoOnDemand
                    src={item.imageUrl}
                    posterUrl={item.posterUrl ?? undefined}
                    title={item.title || "Portfolio item"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title || "Portfolio item"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                    {...imgProps}
                  />
                )}
              </div>
            </div>
          ))}
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}-dup`}
              className="flex-shrink-0 w-[180px] sm:w-[200px]"
            >
              <div className="group relative h-[240px] sm:h-[260px] w-full overflow-hidden rounded-lg bg-gray-900">
                {isVideoSrc(item.imageUrl) ? (
                  <VideoOnDemand
                    src={item.imageUrl}
                    posterUrl={item.posterUrl ?? undefined}
                    title={item.title || "Portfolio item"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title || "Portfolio item"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                    {...imgProps}
                  />
                )}
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
              {isVideoSrc(item.imageUrl) ? (
                <VideoOnDemand
                  src={item.imageUrl}
                  posterUrl={item.posterUrl ?? undefined}
                  title={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  {...imgProps}
                />
              )}
            </div>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`${item.id}-${index}-dup`} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[3/4]">
              {isVideoSrc(item.imageUrl) ? (
                <VideoOnDemand
                  src={item.imageUrl}
                  posterUrl={item.posterUrl ?? undefined}
                  title={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  {...imgProps}
                />
              )}
            </div>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`${item.id}-${index}-dup2`} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[3/4]">
              {isVideoSrc(item.imageUrl) ? (
                <VideoOnDemand
                  src={item.imageUrl}
                  posterUrl={item.posterUrl ?? undefined}
                  title={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title || "Portfolio item"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  {...imgProps}
                />
              )}
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

function VideoOnDemand({
  src,
  posterUrl,
  title,
  className,
}: {
  src: string;
  posterUrl?: string;
  title: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);

  const posterCandidates = posterUrl
    ? [posterUrl, ...derivePosterCandidates(src)]
    : derivePosterCandidates(src);
  const posterSrc = posterCandidates[posterIndex] ?? null;

  if (!active) {
    return (
      <img
        src={posterSrc ?? getVideoPosterDataUrl(title)}
        alt={title}
        className={className}
        loading="lazy"
        decoding="async"
        onError={() => setPosterIndex((i) => i + 1)}
        onMouseEnter={() => setActive(true)}
        onFocus={() => setActive(true)}
        tabIndex={0}
      />
    );
  }

  return (
    <video
      src={src}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      onMouseLeave={() => setActive(false)}
      onBlur={() => setActive(false)}
    />
  );
}
