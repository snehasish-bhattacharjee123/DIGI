import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
            className="relative h-full w-full overflow-hidden rounded-[10px]"
            style={{
              clipPath,
              translateY,
            }}
          >
            <video
              autoPlay
              playsInline
              muted
              loop
              className="h-full w-full object-cover"
              src="https://cdn.sanity.io/files/k0dlbavy/production/bc8082e2b9b2a6b0cc7392174bdaf334db6f36b8.mp4"
            >
              <source
                src="https://cdn.sanity.io/files/k0dlbavy/production/bc8082e2b9b2a6b0cc7392174bdaf334db6f36b8.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
