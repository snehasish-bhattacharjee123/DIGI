import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";

export function OurWorkSection() {
  const videoContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "center center"],
  });

  const inset = useTransform(scrollYProgress, [0, 1], [10.5, 0]);

  const clipPath = useTransform(
    inset,
    (latest) => `inset(${latest}% ${latest}% 0% round 10px)`
  );

  const translateY = useTransform(inset, (latest) => `-${latest}%`);

  return (
    <section className="bg-white text-black py-20 md:py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            From high tech to high fashion{" "}
            <em className="font-serif font-normal not-italic">and beyond</em>
          </h2>
        </div>

        <div
          ref={videoContainerRef}
          className="relative h-[calc(100vh-200px)] w-full"
        >
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-[10px] flex items-center justify-center bg-black"
            style={{
              clipPath,
              translateY,
            }}
            onClick={togglePlayPause}
          >
            <video
              ref={videoRef}
              playsInline
              className="h-full w-full object-cover"
              src="https://cdn.sanity.io/files/k0dlbavy/production/bc8082e2b9b2a6b0cc7392174bdaf334db6f36b8.mp4"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="https://cdn.sanity.io/files/k0dlbavy/production/bc8082e2b9b2a6b0cc7392174bdaf334db6f36b8.mp4"
                type="video/mp4"
              />
            </video>

            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center hover:bg-black/20 transition-colors"
            >
              {isPlaying ? (
                <svg
                  className="w-20 h-20 text-white opacity-70 hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-20 h-20 text-white opacity-70 hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
