import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "./types";
import { Slide } from "./Slide";
import { getImageUrl } from "../../lib/utils";

interface CarouselProps {
  quotes: Quote[];
  hideAvatars?: boolean;
}

const Carousel = ({ quotes, hideAvatars = false }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeQuote = useMemo(() => quotes[activeIndex], [quotes, activeIndex]);

  const duplicatedQuotes = useMemo(() => [...quotes, ...quotes, ...quotes], [quotes]);

  const getTransformValue = () => {
    if (isLg) {
      const slideHeight = 240; // lg:h-[240px]
      const offset = (duplicatedQuotes.length / 3) * slideHeight;
      return `translate3d(0px, -${activeIndex * slideHeight + offset}px, 0px)`;
    }
    const slideWidth = 108; // h-[108px] w-[108px]
    const offset = (duplicatedQuotes.length / 3) * slideWidth;
    return `translate3d(-${activeIndex * slideWidth + offset}px, 0px, 0px)`;
  };

  return (
    <div className="flex max-w-full flex-[0_0_auto] flex-col gap-[60px] py-16 lg:flex-row lg:justify-between lg:gap-16 lg:py-0 xl:gap-[160px]">
      {!hideAvatars && (
        <div className="flex max-w-full flex-[0_0_auto] flex-col mx-auto overflow-hidden max-lg:w-[580px] relative mask-image-y lg:mask-image-x">
          <div
            className="flex max-w-full flex-[0_0_auto] flex-row lg:h-[780px] lg:flex-col items-center justify-center"
            style={{
              transform: getTransformValue(),
              transition: "transform 0.5s ease",
            }}
          >
            {duplicatedQuotes.map((quote, index) => (
              <div
                key={`${quote._id}-${index}`}
                className={`flex max-w-full flex-[0_0_auto] flex-col transition-all duration-300 h-[108px] w-[108px] p-4 lg:h-[240px] lg:w-[240px] cursor-pointer ${
                  activeIndex === (index % quotes.length)
                    ? "opacity-100 p-0"
                    : "opacity-25"
                }`}
                onClick={() => handleAvatarClick(index % quotes.length)}
              >
                <div className="flex max-w-full flex-[0_0_auto] flex-col relative h-full w-full overflow-hidden rounded-full">
                  <img
                    alt={quote.author.name}
                    loading="lazy"
                    className="absolute h-full w-full object-cover object-center"
                    src={getImageUrl(quote.author.image.asset._ref)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex max-w-full flex-[0_0_auto] flex-col grow basis-0">
        <div className="flex max-w-full flex-[0_0_auto] flex-row gap-4 lg:flex-col lg:h-[780px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center"
            >
              <Slide quote={activeQuote} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex max-w-full flex-[0_0_auto] flex-col items-center justify-center">
        <div className="flex max-w-full flex-[0_0_auto] flex-row gap-3 lg:flex-col">
          <button
            aria-label="Previous slide"
            className="border-bor-foreground flex h-[46px] w-[46px] items-center justify-center rounded-full border opacity-80 lg:h-[54px] lg:w-[54px]"
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : quotes.length - 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="-rotate-90 lg:rotate-0"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="216"
                x2="128"
                y2="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="56 112 128 40 200 112"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </button>
          <button
            aria-label="Next slide"
            className="border-bor-foreground flex h-[46px] w-[46px] items-center justify-center rounded-full border opacity-80 lg:h-[54px] lg:w-[54px]"
            onClick={() => setActiveIndex((prev) => (prev < quotes.length - 1 ? prev + 1 : 0))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="rotate-90 lg:rotate-180"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="216"
                x2="128"
                y2="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="56 112 128 40 200 112"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
