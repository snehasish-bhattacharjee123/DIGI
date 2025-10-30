import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  number: number;
  label: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    number: 1,
    label: "Flexible",
    title: "Endless extra pairs of hands",
    description:
      "Our unique model means you get access to a modular team, which can effortlessly scale up or down to meet your needs, whether you need bandwidth or a specialist skill.",
  },
  {
    number: 2,
    label: "ULTRA-FAST",
    title: "Designed for speed",
    description:
      "We leverage our team's time zones to meet even the tightest timeline. 98% of projects are delivered on or before the deadline.",
  },
  {
    number: 3,
    label: "READY FOR THE FUTURE",
    title: "AI-enhanced creativity",
    description:
      "Our team uses cutting-edge AI tools to move faster while ensuring alignment with your brand and brief, delivering exceptional results efficiently.",
  },
  {
    number: 4,
    label: "CENTRALIZED",
    title: "Streamlined platform for collaboration",
    description:
      "A single, streamlined hub where creative collaboration happens. Our platform reduces feedback loops by 30%, keeping projects moving efficiently.",
  },
  {
    number: 5,
    label: "Collaborative",
    title: "One consistent team",
    description:
      "No hand-offs, delays, or resourcing guesswork. You'll work with a team that knows your brand inside out, minimizing friction and maximizing creative impact.",
  },
];

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Smooth scroll tracking for the line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Smoothly map progress (0 → 1) to percentage height (0% → 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const windowHeight = window.innerHeight;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const stepTop = ref.getBoundingClientRect().top;
        const stepMiddle = stepTop + ref.offsetHeight / 2;

        if (stepMiddle < windowHeight / 2 && stepMiddle > 0) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-gray-100 py-16 md:py-20 lg:py-32">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 justify-between">
          {/* Left Side - Sticky Content */}
          <div className="md:sticky md:top-28 xl:w-[41%] lg:w-[46%] md:w-[47%] w-full h-max space-y-10 lg:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 lg:space-y-8"
            >
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 block">
                How we work with you
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1]">
                A process built to give your brand{" "}
                <span className="font-serif italic text-primary">
                  the support it deserves
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Finding the best people is just the first step. Our process is
                equally delightful—from onboarding to delivery, we make
                collaboration seamless.
              </p>

              <div className="pt-4">
                <a
                  href="https://wa.me/917998596948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-lg border-2 border-white/20 hover:border-primary hover:bg-primary/10 text-white font-semibold transition-all duration-300"
                  >
                    Book a Demo
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:grid grid-cols-2 gap-8"
            >
              <div className="border-b border-white/10 pb-4 lg:pb-6 space-y-1">
                <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light">
                  750+
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-light">
                  Talented creatives around the globe
                </p>
              </div>

              <div className="border-b border-white/10 pb-4 lg:pb-6 space-y-1">
                <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light">
                  9.6/10
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-light">
                  Average customer satisfaction rating
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Timeline */}
          <div ref={timelineRef} className="xl:w-[54%] lg:w-[50%] md:w-[47%] w-full">
            <div className="relative">
              {/* ✅ Dynamic Timeline Line */}
              {/* ✅ Dynamic Timeline Line (no glow version) */}
{/* ✅ Dynamic Timeline Line (pulsating effect, no glow) */}
{/* ✅ Clean, Flat Dynamic Timeline Line (no glow, no gradient) */}
<div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-700 overflow-hidden">
  <motion.div
    className="absolute top-0 left-0 w-full bg-primary"
    style={{ height: lineHeight }}
    animate={{
      opacity: [0.6, 1, 0.6],
      scaleX: [1, 1.04, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>




              {/* Timeline Items */}
              <div className="space-y-12 lg:space-y-20">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      x: 6,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="relative flex items-start gap-6 lg:gap-8 group"
                  >
                    {/* Number Circle */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`relative flex items-center justify-center w-14 h-14 rounded-full font-serif text-2xl transition-all duration-500 ${
                          activeStep >= index
                            ? "text-gray-100"
                            : "text-gray-600"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gray-800/50 rounded-full backdrop-blur-sm"></div>
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            activeStep >= index
                              ? "bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/30 scale-100"
                              : "bg-transparent scale-0"
                          }`}
                        ></div>
                        <div className="absolute inset-0.5 bg-[#0a0a0a] rounded-full"></div>
                        <span className="relative z-10 font-light">
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2 space-y-2">
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-600 block">
                        {item.label}
                      </span>
                      <h3
                        className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-500 ${
                          activeStep >= index
                            ? "text-gray-100"
                            : "text-gray-500"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-base md:text-lg leading-relaxed font-light transition-colors duration-500 ${
                          activeStep >= index
                            ? "text-gray-400"
                            : "text-gray-600"
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

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
        <motion.div
          className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
