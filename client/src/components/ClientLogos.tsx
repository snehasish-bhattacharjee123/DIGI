import React, { useRef, useState, MouseEvent, TouchEvent } from "react";
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

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    if (!scroller || !content) return;

    setIsDown(true);
    content.classList.add("animate-pause");
    setStartX(e.touches[0].pageX - scroller.offsetLeft);
    setScrollLeft(scroller.scrollLeft);
  };

  const handleTouchEnd = () => {
    const content = contentRef.current;
    if (!content) return;

    setIsDown(false);
    content.classList.remove("animate-pause");
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDown || !scrollerRef.current) return;
    const x = e.touches[0].pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const animationClass =
    direction === "ltr" ? "animate-scroll-logos" : "animate-scroll-logos-rtl";

  return (
    <div className="gradient-mask-horizontal relative overflow-hidden select-none">
      <div
        ref={scrollerRef}
        className={`relative overflow-hidden ${
          isDown ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="flex flex-row">
          {/* First copy - visible */}
          <div
            ref={contentRef}
            className={`shrink-0 will-change-transform flex hover:animate-pause ${animationClass}`}
            aria-hidden="false"
          >
            <div className="flex my-auto">
              <div className="flex shrink-0 flex-row items-center gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 md:px-8 lg:gap-16 lg:px-10 xl:gap-20 xl:px-12">
                {clients.map((client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="flex-shrink-0 transition-all duration-300"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-blue-700 hover:text-brand-blue-900 hover:scale-110 transition-all duration-300 whitespace-nowrap inline-block">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second copy - for seamless loop */}
          <div
            className={`shrink-0 will-change-transform flex hover:animate-pause ${animationClass}`}
            aria-hidden="true"
          >
            <div className="flex my-auto">
              <div className="flex shrink-0 flex-row items-center gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 md:px-8 lg:gap-16 lg:px-10 xl:gap-20 xl:px-12">
                {clients.map((client, index) => (
                  <div
                    key={`${client}-${index}-copy2`}
                    className="flex-shrink-0 transition-all duration-300"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-blue-700 hover:text-brand-blue-900 hover:scale-110 transition-all duration-300 whitespace-nowrap inline-block">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Third copy - for extra smoothness */}
          <div
            className={`shrink-0 will-change-transform flex hover:animate-pause ${animationClass}`}
            aria-hidden="true"
          >
            <div className="flex my-auto">
              <div className="flex shrink-0 flex-row items-center gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 md:px-8 lg:gap-16 lg:px-10 xl:gap-20 xl:px-12">
                {clients.map((client, index) => (
                  <div
                    key={`${client}-${index}-copy3`}
                    className="flex-shrink-0 transition-all duration-300"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-blue-700 hover:text-brand-blue-900 hover:scale-110 transition-all duration-300 whitespace-nowrap inline-block">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ClientLogos() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white border-border overflow-hidden">
      <div className="max-w-[1680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4"
        >
          <p className="text-xs sm:text-sm md:text-base font-semibold text-brand-blue-700 uppercase tracking-wider">
            Trusted by leading brands
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-hidden -mx-4 sm:-mx-6 lg:mx-0">
          <LogoScroller clients={clientsTop} direction="ltr" />
          <LogoScroller clients={clientsBottom} direction="rtl" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-logos {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-logos-rtl {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-logos {
            animation: scroll-logos 60s linear infinite;
          }

          .animate-scroll-logos-rtl {
            animation: scroll-logos-rtl 60s linear infinite;
          }

          .animate-pause {
            animation-play-state: paused !important;
          }

          /* Gradient mask for smooth fade on edges */
          .gradient-mask-horizontal {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }

          /* Performance optimizations */
          .will-change-transform {
            will-change: transform;
          }

          /* Mobile optimizations */
          @media (max-width: 640px) {
            .animate-scroll-logos {
              animation: scroll-logos 40s linear infinite;
            }

            .animate-scroll-logos-rtl {
              animation: scroll-logos-rtl 40s linear infinite;
            }

            .gradient-mask-horizontal {
              -webkit-mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 5%,
                black 95%,
                transparent 100%
              );
              mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 5%,
                black 95%,
                transparent 100%
              );
            }
          }

          /* Touch device active states */
          @media (hover: none) and (pointer: coarse) {
            .flex-shrink-0:active span {
              transform: scale(1.05);
            }
          }

          /* Smooth scrolling */
          @media (prefers-reduced-motion: no-preference) {
            .animate-scroll-logos,
            .animate-scroll-logos-rtl {
              animation-timing-function: linear;
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll-logos,
            .animate-scroll-logos-rtl {
              animation: none;
            }
          }
        `,
        }}
      />
    </section>
  );
}
