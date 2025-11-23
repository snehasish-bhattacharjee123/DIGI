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
    (latest) => `inset(${latest}% ${latest}% 0% round 12px)`
  );

  const translateY = useTransform(inset, (latest) => `-${latest}%`);

  return (
    <section className="bg-white text-blue-900 py-20 md:py-28 lg:py-40" data-mood="light">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-20"
        >
          <span className="block mb-3 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-green-600">
            Our Work
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight leading-tight">
            From High Tech to High Fashion{" "}
            <em className="font-serif font-normal not-italic text-green-600">
              and Beyond
            </em>
          </h2>
        </motion.div>

        {/* Video Container */}
        <div
          ref={videoContainerRef}
          className="relative h-[calc(100vh-200px)] w-full"
        >
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-[12px] border border-gray-200 shadow-xl"
            style={{
              clipPath,
              translateY,
            }}
          >
            <VideoPlayer
              src="https://cdn.sanity.io/files/k0dlbavy/production/bc8082e2b9b2a6b0cc7392174bdaf334db6f36b8.mp4"
              className="h-full w-full"
            />
          </motion.div>
        </div>

        {/* Optional Caption */}
        <p className="mt-10 text-gray-600 text-lg max-w-2xl mx-auto text-center leading-relaxed">
          Experience how creativity and strategy come together in our latest
          work — pushing boundaries for global brands.
        </p>
      </div>
    </section>
  );
}
