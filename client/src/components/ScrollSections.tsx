import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

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
  content?: React.ReactNode;
  mediaSrc?: string;
  mediaAlt?: string;
  posterSrc?: string;
  mediaClassName?: string;
}

export interface ScrollSectionsProps {
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
  activeIndex,
}: {
  slide: Slide;
  index: number;
  total: number;
  scrollYProgress: any;
  showTitles: boolean;
  activeIndex: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacityRaw = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0],
  );

  const scaleRaw = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0.95, 1, 1, 0.95],
  );

  const opacity = useSpring(opacityRaw, {
    stiffness: 140,
    damping: 30,
    mass: 0.35,
  });

  const scale = useSpring(scaleRaw, {
    stiffness: 140,
    damping: 30,
    mass: 0.35,
  });

  const isActive = index === activeIndex;

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {showTitles && (slide.title || slide.subtitle) && (
          <div className="mb-8 text-center max-w-3xl mx-auto">
            {slide.title && (
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground mb-2">
                {slide.title}
              </h2>
            )}
            {slide.subtitle && (
              <p className="text-pretty text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground">
                {slide.subtitle}
              </p>
            )}
          </div>
        )}
        <div className="w-full max-w-7xl">
          <SlideMedia slide={slide} isActive={isActive} />
        </div>
      </div>
    </motion.div>
  );
}

function getMediaKind(src: string): "video" | "image" {
  const lower = src.toLowerCase();
  if (
    lower.endsWith(".mp4") ||
    lower.endsWith(".webm") ||
    lower.endsWith(".ogg") ||
    lower.endsWith(".mov") ||
    lower.endsWith(".m4v")
  ) {
    return "video";
  }
  return "image";
}

function getVideoMimeType(src: string): string {
  const lower = src.toLowerCase();
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".ogg") || lower.endsWith(".ogv")) return "video/ogg";
  if (lower.endsWith(".mov")) return "video/quicktime";
  if (lower.endsWith(".m4v")) return "video/x-m4v";
  return "video/mp4";
}

function SlideMedia({
  slide,
  isActive,
  inView,
}: {
  slide: Slide;
  isActive?: boolean;
  inView?: boolean;
}) {
  const kind = useMemo(() => {
    if (!slide.mediaSrc) return null;
    return getMediaKind(slide.mediaSrc);
  }, [slide.mediaSrc]);

  const shouldPlay = (isActive ?? true) && (inView ?? true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (shouldPlay) {
      const p = el.play();
      if (p && typeof (p as Promise<void>).catch === "function") {
        (p as Promise<void>).catch(() => undefined);
      }
      return;
    }

    el.pause();
  }, [shouldPlay]);

  if (slide.mediaSrc && kind === "video") {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          disablePictureInPicture
          poster={slide.posterSrc}
          className={
            slide.mediaClassName ??
            "w-full max-w-5xl max-h-[70vh] h-auto object-contain rounded-2xl shadow-2xl"
          }
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <source src={slide.mediaSrc} type={getVideoMimeType(slide.mediaSrc)} />
        </motion.video>
      </div>
    );
  }

  if (slide.mediaSrc && kind === "image") {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <motion.img
          src={slide.mediaSrc}
          alt={slide.mediaAlt ?? slide.title ?? ""}
          className={
            slide.mediaClassName ??
            "w-full max-w-5xl max-h-[70vh] h-auto object-contain rounded-2xl shadow-2xl"
          }
          loading="lazy"
          initial={{ opacity: 0, y: 10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  return slide.content ?? null;
}

function MobileSlideItem({
  slide,
  index,
  className,
  showTitles,
}: {
  slide: Slide;
  index: number;
  className: string;
  showTitles: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-100px 0px -100px 0px", amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`min-h-screen flex items-center justify-center py-16 ${className}`}
    >
      <div className="w-full px-4 sm:px-6">
        {showTitles && (slide.title || slide.subtitle) && (
          <div className="mb-8 text-center max-w-3xl mx-auto">
            {slide.title && (
              <h2 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.1] text-foreground mb-2">
                {slide.title}
              </h2>
            )}
            {slide.subtitle && (
              <p className="text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                {slide.subtitle}
              </p>
            )}
          </div>
        )}
        <div className="w-full max-w-4xl mx-auto">
          <SlideMedia slide={slide} inView={inView} />
        </div>
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

function ScrollSections({
  slides = [],
  height = "100vh",
  showProgress = true,
  showTitles = true,
  className = "",
  progressPosition = "bottom",
  onSlideChange,
}: ScrollSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heightVh = Number.parseFloat(height);
  const totalHeightVh =
    (slides.length || 0) * (Number.isFinite(heightVh) ? heightVh : 100);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndexRef = useRef(0);
  const activeIndexRef = useRef(0);
  const wheelLockRef = useRef(false);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (slides.length === 0) return;
    const steps = Math.max(1, slides.length - 1);
    const nextIndex = Math.floor(progress * steps + 1e-6);
    const clampedIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    if (clampedIndex === lastIndexRef.current) return;
    lastIndexRef.current = clampedIndex;
    setActiveIndex(clampedIndex);
    onSlideChange?.(clampedIndex);
  });

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (slides.length <= 1) return;

    const stepPx =
      window.innerHeight * (Number.isFinite(heightVh) ? heightVh / 100 : 1);

    const onWheel = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect();
      const isPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isPinned) return;

      const direction = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      if (direction === 0) return;

      const currentIndex = activeIndexRef.current;
      const nextIndex = Math.max(
        0,
        Math.min(slides.length - 1, currentIndex + direction),
      );

      if (nextIndex === currentIndex) return;

      e.preventDefault();

      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const containerTop = window.scrollY + rect.top;
      window.scrollTo({
        top: containerTop + nextIndex * stepPx,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 650);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [heightVh, slides.length]);

  return (
    <>
      {/* Desktop pinned scroll view */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className={`relative ${className}`}
          style={{ height: `${totalHeightVh}vh` }}
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
                  activeIndex={activeIndex}
                />
              ))}

              {/* {showProgress && slides.length > 0 && (
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
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked scroll view */}
      <div className="lg:hidden">
        {slides.map((slide, index) => (
          <MobileSlideItem
            key={slide.id}
            slide={slide}
            index={index}
            className={className}
            showTitles={showTitles}
          />
        ))}
      </div>
    </>
  );
}

export default ScrollSections;
export { ScrollSections };
// export type { ScrollSectionsProps };
