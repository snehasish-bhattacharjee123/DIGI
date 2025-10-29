import React, {
  useState,
  useEffect,
  useCallback,
  memo,
  useRef,
  useMemo,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import customerQuotes from "../data/customer-quotes.json";

// Type definitions
interface Metric {
  data: string;
  description: string;
}

interface Story {
  title: string;
  link: string;
  image: string;
}

interface Quote {
  id: string;
  quote: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatar: string;
  };
  logo: string;
  metrics: Metric[];
  story: Story | null;
}

const quotes: Quote[] = customerQuotes;

// -----------------------------
// Single Testimonial Slide
// -----------------------------
const TestimonialSlide = memo(({ quote }: { quote: Quote }) => {
  return (
    <motion.div
      className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          {/* Logo */}
          <div
            className="w-28 h-auto text-white opacity-80"
            dangerouslySetInnerHTML={{ __html: quote.logo }}
          />

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-white/90">
            “{quote.quote}”
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img
              src={quote.author.avatar}
              alt={quote.author.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white/20"
            />
            <div>
              <p className="font-semibold text-lg">{quote.author.name}</p>
              <p className="text-sm text-white/70">
                {quote.author.position}, {quote.author.company}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-10">
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-8">
            {quote.metrics.map((metric, i) => (
              <div key={i}>
                <p className="text-4xl lg:text-5xl font-bold text-white">
                  {metric.data}
                </p>
                <p className="text-white/70 mt-2 text-sm lg:text-base">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story */}
          {quote.story && (
            <a
              href={quote.story.link}
              className="relative block overflow-hidden rounded-xl group"
            >
              <img
                src={quote.story.image}
                alt={quote.story.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-semibold text-xl text-white">
                  {quote.story.title}
                </p>
                <span className="text-sm underline text-white/80">
                  Read the story
                </span>
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// -----------------------------
// Carousel Controls
// -----------------------------
const CarouselControls = memo(
  ({
    total,
    selected,
    onSelect,
    prev,
    next,
  }: {
    total: number;
    selected: number;
    onSelect: (index: number) => void;
    prev: () => void;
    next: () => void;
  }) => (
    <div className="flex items-center justify-between mt-12">
      {/* Dots */}
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === selected ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
);

// -----------------------------
// Main Carousel Component
// -----------------------------
const TestimonialCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Setup Embla
  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play logic
  useEffect(() => {
    if (!emblaApi) return;
    if (isHovered) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, isHovered]);

  return (
    <section
      className="relative w-full bg-[#0D1224] text-white py-20 md:py-28 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            <AnimatePresence mode="wait">
              {quotes.map((quote) => (
                <TestimonialSlide key={quote.id} quote={quote} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <CarouselControls
          total={snaps.length}
          selected={selected}
          onSelect={scrollTo}
          prev={prev}
          next={next}
        />
      </div>
    </section>
  );
};

export default TestimonialCarousel;
