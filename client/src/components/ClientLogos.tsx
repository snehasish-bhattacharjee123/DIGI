import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

const clientsTop = [
  "Parle",
  "Naksha",
  "MKT Rugs",
  "Dhruwo Cabs",
  "ASR Doctors Clinic",
  "Kulina Entertainment",
  "Mehakleen",
];
const clientsBottom = [
  "Celestial Guidance",
  "KODC",
  "RedOchre",
  "The Smash",
  "Viracocha Little Learners",
  "Teamax",
  "Transformation & Strength",
];

interface LogoScrollerProps {
  clients: string[];
  direction: "ltr" | "rtl";
}

const LogoScroller: React.FC<LogoScrollerProps> = ({ clients, direction }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    if (!scroller || !content) return;

    setIsDown(true);
    content.classList.add("animate-pause");
    setStartX(e.pageX - scroller.offsetLeft);
    setScrollLeft(scroller.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    const content = contentRef.current;
    if (!content) return;

    setIsDown(false);
    content.classList.remove("animate-pause");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const animationClass =
    direction === "ltr" ? "animate-scroll" : "animate-scroll-rtl";

  return (
    <div className="relative overflow-hidden select-none">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div
        ref={scrollerRef}
        className={`relative overflow-hidden ${
          isDown ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        <div
          ref={contentRef}
          className={`flex w-max hover:animate-pause ${animationClass}`}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client}-${index}`} className="flex-shrink-0 mx-8 py-2">
              <span className="text-lg font-medium text-brand-blue-700 hover:text-brand-blue-900 transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-border overflow-hidden">
      <div className="max-w-[1680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <p className="text-sm font-medium text-brand-blue-700 uppercase tracking-wider">
            Trusted by leading brands
          </p>
        </motion.div>

        <div className="space-y-8">
          <LogoScroller clients={clientsTop} direction="ltr" />
          <LogoScroller clients={clientsBottom} direction="rtl" />
        </div>
      </div>
    </section>
  );
}
