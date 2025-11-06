"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

  // Track scroll progress for the line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Smooth animation for the line fill
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Update active step based on scroll position
  useEffect(() => {
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
    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-blue-900 text-white py-16 md:py-20 lg:py-32">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 justify-between">
          {/* Left Side - Sticky Text */}
          <div className="md:sticky md:top-28 md:self-start xl:w-[41%] lg:w-[46%] md:w-[47%] w-full h-fit space-y-10 lg:space-y-16 pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 lg:space-y-8"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-orange/90 block">
                how we work
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                A faster, easier way to get{" "}
                <span className="font-serif italic text-brand-orange">
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

          {/* Right Side - Scrollable Timeline */}
          <div
            ref={timelineRef}
            className="xl:w-[54%] lg:w-[46%] md:w-[47%] w-full flex-shrink-0"
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
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-6 lg:gap-8 group"
                  >
                    {/* Number circle */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`relative flex items-center justify-center w-14 h-14 rounded-full font-serif text-2xl transition-all duration-500 ${
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
                        <span className="relative z-10">{item.number}</span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-2 space-y-2">
                      <h3
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
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
      </div>
    </section>
  );
}
