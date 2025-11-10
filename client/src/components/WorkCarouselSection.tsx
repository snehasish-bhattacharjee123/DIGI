import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCarousel from "./TestimonialCarousel";

interface WorkItem {
  id: string;
  title: string;
  company: string;
  industry: string;
  colorMood: string;
  image: string;
  tags: string[];
  link: string;
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "How Reddit maximises creative production",
    company: "Reddit",
    industry: "SAAS",
    colorMood: "peach",
    image: "/images/work/reddit.svg",
    tags: ["Motion Design", "Social Media Creative"],
    link: "/our-work/reddit",
  },
  {
    id: "2",
    title: "Shopify Growth Workshop",
    company: "Shopify",
    industry: "E-commerce",
    colorMood: "minty-leaf",
    image: "/images/work/shopify.svg",
    tags: ["Ad Creative"],
    link: "/our-work/shopify",
  },
  {
    id: "3",
    title: "Opa! Brand Identity",
    company: "Opa!",
    industry: "Food & Beverages",
    colorMood: "stone",
    image: "/images/work/opa.svg",
    tags: ["Brand Identity", "Social Media Creative"],
    link: "/our-work/opa",
  },
  {
    id: "4",
    title: "GoHenry Creative Campaign",
    company: "GoHenry",
    industry: "Financial Services",
    colorMood: "minty-leaf",
    image: "/images/work/gohenry.svg",
    tags: ["Concept Creation", "Ad Creative", "Social Media Creative"],
    link: "/our-work/go-henry",
  },
  {
    id: "5",
    title: "Suzanne Kalan",
    company: "Suzanne Kalan",
    industry: "Fashion",
    colorMood: "cloudy",
    image: "/images/work/suzanne-kalan.svg",
    tags: ["Video Production", "Social Media Creative"],
    link: "/our-work/suzanne-kalan",
  },
  {
    id: "6",
    title: "Amazon Pharmacy",
    company: "Amazon Pharmacy",
    industry: "Healthcare",
    colorMood: "sky",
    image: "/images/work/amazon-pharmacy.svg",
    tags: ["Ad Creative", "Social Media Creative"],
    link: "/our-work/amazon-pharmacy",
  },
  {
    id: "7",
    title: "Marqeta",
    company: "Marqeta",
    industry: "Financial Services",
    colorMood: "spark",
    image: "/images/work/marqeta.svg",
    tags: ["Video Production", "Motion Design"],
    link: "/our-work/marqeta",
  },
];

const moodColors: Record<string, { bg: string; text: string }> = {
  peach: { bg: "bg-[#FFE5D9]", text: "text-[#2D1B12]" },
  "minty-leaf": { bg: "bg-[#D4F4DD]", text: "text-[#0D3B1A]" },
  stone: { bg: "bg-[#E8E4DF]", text: "text-[#2C2822]" },
  cloudy: { bg: "bg-[#E5E9F0]", text: "text-[#1A1F2E]" },
  sky: { bg: "bg-[#D4E4F7]", text: "text-[#0F2847]" },
  spark: { bg: "bg-[#FFE8E8]", text: "text-[#3D1616]" },
};

export function WorkCarouselSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);

  const cardWidth = 280; // base width + gap for mobile
  const cardWidthLg = 480; // base width + gap for desktop

  // Triple the items for seamless infinite loop
  const infiniteItems = [...workItems, ...workItems, ...workItems];

  const autoPlaySpeed = 3000; // 3 seconds per slide
  const animationDuration = 0.8; // seconds for smooth transition

  useEffect(() => {
    if (isPaused || isDragging) return;

    const startAutoPlay = async () => {
      const isMobile = window.innerWidth < 1024;
      const currentCardWidth = isMobile ? cardWidth : cardWidthLg;
      const totalWidth = workItems.length * currentCardWidth;

      // Start from the middle set of items
      await controls.set({ x: -totalWidth });

      const animate = async () => {
        // Get current position
        const currentX = x.get();
        const nextX = currentX - currentCardWidth;

        // Animate to next position
        await controls.start({
          x: nextX,
          transition: {
            duration: animationDuration,
            ease: "easeInOut",
          },
        });

        // Check if we've scrolled past the second set
        if (Math.abs(nextX) >= totalWidth * 2) {
          // Jump back to the middle set without animation
          await controls.set({ x: -totalWidth });
        }
      };

      // Initial animation
      await animate();

      // Set up interval for continuous animation
      const interval = setInterval(animate, autoPlaySpeed);

      return () => clearInterval(interval);
    };

    const cleanup = startAutoPlay();
    return () => {
      cleanup.then((fn) => fn && fn());
    };
  }, [
    isPaused,
    isDragging,
    controls,
    x,
    cardWidth,
    cardWidthLg,
    autoPlaySpeed,
  ]);

  const handlePrevious = async () => {
    setIsPaused(true);
    const isMobile = window.innerWidth < 1024;
    const currentCardWidth = isMobile ? cardWidth : cardWidthLg;
    const currentX = x.get();

    await controls.start({
      x: currentX + currentCardWidth,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
      },
    });

    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleNext = async () => {
    setIsPaused(true);
    const isMobile = window.innerWidth < 1024;
    const currentCardWidth = isMobile ? cardWidth : cardWidthLg;
    const currentX = x.get();

    await controls.start({
      x: currentX - currentCardWidth,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
      },
    });

    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section className="relative overflow-hidden bg-white text-[#003366] py-16 md:py-20 lg:py-32" data-mood="light">
      <div className="max-w-[1680px] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-green-700 mt-4 max-w-3xl"
          >
            Explore our portfolio of creative campaigns and brand experiences
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 lg:left-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 lg:right-8">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              style={{ x, cursor: isDragging ? "grabbing" : "grab" }}
              drag="x"
              dragConstraints={{ left: -Infinity, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => {
                setIsDragging(true);
                setIsPaused(true);
              }}
              onDragEnd={() => {
                setIsDragging(false);
                setTimeout(() => setIsPaused(false), 500);
              }}
              className="flex gap-4 px-4 lg:gap-6 lg:px-8"
            >
              {infiniteItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % workItems.length) * 0.05,
                  }}
                >
                  <a
                    href={item.link}
                    className={`block w-[260px] h-[380px] lg:w-[450px] lg:h-[600px] xl:h-[700px] rounded-xl overflow-hidden transition-all duration-500 hover:lg:scale-105 hover:lg:rotate-1 hover:shadow-2xl ${
                      moodColors[item.colorMood]?.bg || "bg-gray-800"
                    } ${moodColors[item.colorMood]?.text || "text-white"}`}
                    onClick={(e) => {
                      if (isDragging) {
                        e.preventDefault();
                      }
                    }}
                    draggable={false}
                  >
                    <div className="relative h-full flex flex-col justify-end">
                      {/* Image Container */}
                      <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-10">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                            draggable={false}
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.src = `https://placehold.co/400x450/${
                                item.colorMood === "peach"
                                  ? "FFE5D9"
                                  : item.colorMood === "minty-leaf"
                                  ? "D4F4DD"
                                  : "E8E4DF"
                              }/2D1B12/png?text=${encodeURIComponent(
                                item.company
                              )}`;
                            }}
                          />
                        </div>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                      {/* Content */}
                      <div className="relative z-10 p-4 lg:p-8">
                        <span className="hidden lg:block text-xs tracking-[0.15em] uppercase mb-2 opacity-60 font-semibold">
                          {item.industry}
                        </span>
                        <h4 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-serif tracking-tight mb-3 lg:mb-4">
                          {item.company}
                        </h4>
                        <div
                          className="flex gap-1 lg:gap-2 mt-2 lg:mt-4 opacity-70 overflow-hidden"
                          style={{
                            maskImage:
                              "linear-gradient(90deg, #000 85%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(90deg, #000 85%, transparent 100%)",
                          }}
                        >
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 lg:px-3 lg:py-1.5 text-[10px] lg:text-xs border rounded-full whitespace-nowrap font-semibold"
                              style={{
                                borderColor: "currentColor",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8 lg:mt-12">
            {workItems.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  !isPaused ? "bg-white/50" : "bg-white/30"
                }`}
                style={{
                  width: !isPaused ? "32px" : "8px",
                }}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {isPaused
              ? "Paused - Hover to pause, click arrows to navigate"
              : "Auto-playing - Hover to pause"}
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-32">
        <TestimonialCarousel />
      </div>
    </section>
  );
}
