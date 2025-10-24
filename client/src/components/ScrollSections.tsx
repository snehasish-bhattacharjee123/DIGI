import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Section = {
  title: string;
  subtitle?: string;
  fromColor: string; // Tailwind color, e.g., "blue-600"
  toColor: string; // Tailwind color, e.g., "indigo-800"
};

const sections: Section[] = [
  {
    title: "Section One",
    subtitle: "Scroll down to see the magic",
    fromColor: "blue-600",
    toColor: "indigo-800",
  },
  {
    title: "Section Two",
    subtitle: "Smooth motion, pure CSS & Framer",
    fromColor: "purple-600",
    toColor: "pink-700",
  },
  {
    title: "Section Three",
    subtitle: "Apple-style scroll reveal",
    fromColor: "emerald-600",
    toColor: "teal-800",
  },
  {
    title: "Final Section",
    subtitle: "End of scroll",
    fromColor: "orange-600",
    toColor: "red-700",
  },
];

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSections = sections.length;
  const transforms = sections.map((_, index) => {
    const start = index / totalSections;
    const end = (index + 1) / totalSections;
    const fadeStart = start;
    const fadeEnd = start + 0.15;

    return {
      y: useTransform(scrollYProgress, [start, end], ["30%", "0%"]),
      opacity: useTransform(scrollYProgress, [fadeStart, fadeEnd], [0, 1]),
    };
  });

  return (
    <div
      ref={containerRef}
      className={`h-[${totalSections * 100}vh] relative overflow-hidden bg-gray-950`}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            style={{
              y: transforms[index].y,
              opacity: transforms[index].opacity,
            }}
            className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-${section.fromColor} to-${section.toColor} text-white text-4xl sm:text-6xl font-bold px-4 text-center`}
          >
            <h1>{section.title}</h1>
            {section.subtitle && (
              <p className="text-lg sm:text-xl mt-4 opacity-80">
                {section.subtitle}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
