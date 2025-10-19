import React, { useState, useEffect, useCallback, memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

// Memoized component for a single testimonial slide to prevent unnecessary re-renders
const TestimonialSlide: React.FC<{ quote: Quote }> = memo(({ quote }) => {
  return (
    <div
      className="flex-[0_0_100%] min-w-0 px-2"
      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side: Quote, Author, Logo */}
        <div className="space-y-8">
          <div
            className="w-24 h-auto text-white"
            dangerouslySetInnerHTML={{ __html: quote.logo }}
          />
          <blockquote
            className="text-2xl md:text-3xl font-serif leading-tight"
            dangerouslySetInnerHTML={{ __html: `“${quote.quote}”` }}
          />
          <div className="flex items-center space-x-4">
            <img
              src={quote.author.avatar}
              alt={quote.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-lg">{quote.author.name}</p>
              <p className="text-muted-foreground">
                {quote.author.position}, {quote.author.company}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Metrics and Story */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            {quote.metrics.map((metric, index) => (
              <div key={index}>
                <p className="text-4xl lg:text-5xl font-bold">{metric.data}</p>
                <p className="text-muted-foreground mt-2">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
          {quote.story && (
            <a
              href={quote.story.link}
              className="block group relative overflow-hidden rounded-lg"
            >
              <img
                src={quote.story.image}
                alt={quote.story.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-bold text-xl">{quote.story.title}</p>
                <span className="text-sm underline">Read the story</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

// Memoized component for carousel controls
const CarouselControls: React.FC<{
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
}> = memo(
  ({ scrollSnaps, selectedIndex, scrollTo, scrollPrev, scrollNext }) => {
    return (
      <div className="flex items-center justify-between mt-12">
        <div className="flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
    );
  },
);

// Main carousel component
const TestimonialCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full text-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {quotes.map((quote) => (
            <TestimonialSlide key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
      <CarouselControls
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
      />
    </div>
  );
};

export default TestimonialCarousel;
