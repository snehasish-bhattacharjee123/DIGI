"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface TimelineItem {
  number: number;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    number: 1,
    title: "Smart intake",
    description:
      "Brief better with Superspace, our centralized platform for kickoff, collaboration, and feedback.",
  },
  {
    number: 2,
    title: "Always on-brand",
    description:
      "Stay visually consistent with toolkits, creative systems, and teams trained on your brand.",
  },
  {
    number: 3,
    title: "Speed without sacrifice",
    description:
      "Turn work around fast with dedicated creative pods that get to know your team and goals.",
  },
  {
    number: 4,
    title: "Flexible scale",
    description:
      "Spin up more output, formats, or campaigns in days—not weeks—with modular resourcing.",
  },
  {
    number: 5,
    title: "Built to test",
    description:
      "Get multiple variants fast so you can experiment, optimize, and avoid ad fatigue.",
  },
];

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Track scroll progress for the line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Smooth animation for the line fill (disabled if reduced motion)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });
  const lineHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", reducedMotion ? "0%" : "100%"],
  );

  // Update active step efficiently using IntersectionObserver
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      // Fallback: keep the existing simple logic
      const handleScroll = () => {
        if (!timelineRef.current) return;
        const windowHeight = window.innerHeight;
        stepRefs.current.forEach((ref, index) => {
          if (!ref) return;
          const rect = ref.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          if (mid < windowHeight * 0.6 && mid > 0) setActiveStep(index);
        });
      };
      const onScroll = () => requestAnimationFrame(handleScroll);
      const win = timelineRef.current?.ownerDocument?.defaultView;
      if (!win) return;
      win.addEventListener("scroll", onScroll);
      handleScroll();
      return () => win.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute("data-step-index");
          if (indexAttr == null) return;
          const index = parseInt(indexAttr, 10);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveStep((prev) => (index > prev ? index : prev));
          } else {
            // If scrolling upward, allow index to move back
            const bounding = entry.boundingClientRect;
            const rootBounds = entry.rootBounds;
            if (rootBounds && bounding.top > rootBounds.bottom) {
              setActiveStep((prev) => Math.min(prev, index));
            }
          }
        });
      },
      { root: null, threshold: [0.5] },
    );

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      el.setAttribute("data-step-index", String(index));
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-brand-blue-900 text-white py-16 md:py-20 lg:py-32"
      data-mood="brand-dark"
      aria-label="How we work timeline"
    >
      {/* Wrapper section ensures left stays sticky while right content scrolls */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="relative flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 justify-between">
          {/* Left Side - Sticky Text (fixed within this wrapper while the right moves) */}
          <div className="md:sticky md:top-20 lg:top-28 md:self-start xl:w-[41%] lg:w-[46%] md:w-[47%] w-full h-fit space-y-10 lg:space-y-16 pt-12 lg:pt-0">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reducedMotion ? undefined : { duration: 0.6 }}
              className="space-y-4 lg:space-y-8"
            >
              <span className="font-din text-sm font-semibold uppercase tracking-[0.15em] text-brand-orange/90 block">
                how we work
              </span>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                A faster, easier way to get{" "}
                <span className="font-extrabold tracking-tight text-brand-orange">
                  high-performing ad creative
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Our process removes bottlenecks and adds scale, with
                high-quality creative teams, clear communication, and delivery
                built for speed.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Scrollable Timeline (moves as the page scrolls) */}
          <div
            ref={timelineRef}
            className="xl:w-[54%] lg:w-[46%] md:w-[47%] w-full flex-shrink-0"
            role="list"
            aria-label="Process steps"
          >
            <div className="relative">
              {/* Scroll Line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-white/20 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-brand-orange"
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-12 lg:space-y-20">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    initial={reducedMotion ? false : { opacity: 0, x: 30 }}
                    whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={reducedMotion ? undefined : { duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-6 lg:gap-8 group"
                    role="listitem"
                    aria-current={activeStep === index ? "step" : undefined}
                    aria-label={`${item.number}. ${item.title}`}
                  >
                    {/* Number circle */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`font-heading relative flex items-center justify-center w-14 h-14 rounded-full font-extrabold text-2xl tracking-tight transition-all duration-500 ${
                          activeStep >= index ? "text-white" : "text-white/50"
                        }`}
                      >
                        {/* Background */}
                        <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                        {/* Active ring */}
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            activeStep >= index
                              ? "bg-brand-orange shadow-lg shadow-brand-orange/30 scale-100"
                              : "bg-transparent scale-0"
                          }`}
                        />
                        {/* Inner fill */}
                        <div className="absolute inset-0.5 bg-brand-blue-900 rounded-full" />
                        {/* Number */}
                        <span className="font-heading relative z-10">{item.number}</span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-2 space-y-2">
                      <h3
                        className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                          activeStep >= index ? "text-white" : "text-white/50"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${
                          activeStep >= index
                            ? "text-white/70"
                            : "text-white/40"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
              animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>
    </section>
  );
}
