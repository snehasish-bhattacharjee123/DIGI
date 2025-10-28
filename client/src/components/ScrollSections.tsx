import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ScrollSections - Reusable Pinned Vertical Scroll Component
 *
 * Features:
 * - ScrollMagic-style pinned scroll behavior
 * - Smooth transitions between slides as user scrolls
 * - Progress indicators
 * - Fully typed with TypeScript
 * - Mobile-friendly fallback
 * - GPU-accelerated animations
 */

export interface Slide {
  id: string;
  title?: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface ScrollSectionsProps {
  slides: Slide[];
  height?: string;
  showProgress?: boolean;
  showTitles?: boolean;
  className?: string;
  progressPosition?: "bottom" | "right";
  onSlideChange?: (index: number) => void;
}

function SlideItem({
  slide,
  index,
  total,
  scrollYProgress,
  showTitles,
}: {
  slide: Slide;
  index: number;
  total: number;
  scrollYProgress: any;
  showTitles: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0.95, 1, 1, 0.95],
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {showTitles && (slide.title || slide.subtitle) && (
          <div className="mb-8 text-center">
            {slide.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {slide.title}
              </h2>
            )}
            {slide.subtitle && (
              <p className="text-lg md:text-xl text-gray-600">
                {slide.subtitle}
              </p>
            )}
          </div>
        )}
        <div className="w-full max-w-7xl">{slide.content}</div>
      </div>
    </motion.div>
  );
}

function ProgressIndicator({
  scrollYProgress,
  index,
  total,
  position,
}: {
  scrollYProgress: any;
  index: number;
  total: number;
  position: "bottom" | "right";
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const progress = useTransform(scrollYProgress, [start, end], [0, 1]);

  const isActive = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0],
  );

  if (position === "right") {
    return (
      <motion.div
        className="w-1 h-12 bg-white/20 rounded-full overflow-hidden"
        style={{ opacity: isActive }}
      >
        <motion.div
          className="w-full bg-white"
          style={{ scaleY: progress, transformOrigin: "top" }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-1 w-12 bg-white/20 rounded-full overflow-hidden"
      style={{ opacity: isActive }}
    >
      <motion.div
        className="h-full bg-white"
        style={{ scaleX: progress, transformOrigin: "left" }}
      />
    </motion.div>
  );
}

export function ScrollSections({
  slides,
  height = "100vh",
  showProgress = true,
  showTitles = true,
  className = "",
  progressPosition = "bottom",
  onSlideChange,
}: ScrollSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (onSlideChange) {
    scrollYProgress.on("change", (progress) => {
      const activeIndex = Math.floor(progress * slides.length);
      const clampedIndex = Math.max(
        0,
        Math.min(slides.length - 1, activeIndex),
      );
      onSlideChange(clampedIndex);
    });
  }

  return (
    <>
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className={`relative ${className}`}
          style={{ height: `${slides.length * parseFloat(height)}vh` }}
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="relative h-full w-full">
              {slides.map((slide, index) => (
                <SlideItem
                  key={slide.id}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  scrollYProgress={scrollYProgress}
                  showTitles={showTitles}
                />
              ))}

              {showProgress && (
                <div
                  className={`absolute z-20 flex ${
                    progressPosition === "bottom"
                      ? "bottom-8 left-1/2 -translate-x-1/2 flex-row gap-2"
                      : "right-8 top-1/2 -translate-y-1/2 flex-col gap-2"
                  }`}
                >
                  {slides.map((slide, index) => (
                    <ProgressIndicator
                      key={slide.id}
                      scrollYProgress={scrollYProgress}
                      index={index}
                      total={slides.length}
                      position={progressPosition}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`min-h-screen flex items-center justify-center py-16 ${className}`}
          >
            <div className="w-full px-4 sm:px-6">
              {showTitles && (slide.title || slide.subtitle) && (
                <div className="mb-8 text-center">
                  {slide.title && (
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-base md:text-lg text-gray-600">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              )}
              <div className="w-full max-w-4xl mx-auto">{slide.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ScrollSections;
export type { ScrollSectionsProps };
