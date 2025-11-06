import { motion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";

interface WorkCard {
  id: string;
  client: string;
  category: string;
  tags: string[];
  imageUrl: string;
  mood: "peach" | "stone" | "blue" | "green";
  link: string;
}

const workCards: WorkCard[] = [
  {
    id: "1",
    client: "Reddit",
    category: "SAAS",
    tags: ["Motion Design", "Social Media Creative"],
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/a999439e397e508cda372c4b961e7d1aa3b89537-544x601.png?q=100&auto=format&fit=min",
    mood: "peach",
    link: "/our-work/reddit",
  },
  {
    id: "2",
    client: "Opa!",
    category: "Food & Beverages",
    tags: ["Brand Identity", "Social Media Creative"],
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/9c2811814c32b8f66f0a39af5ccad2262ec8a209-544x801.png?q=100&auto=format&fit=min",
    mood: "stone",
    link: "/our-work/opa",
  },
  {
    id: "3",
    client: "TechFlow",
    category: "Technology",
    tags: ["UI/UX Design", "Web Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=544&h=601&fit=crop",
    mood: "blue",
    link: "/our-work/techflow",
  },
  {
    id: "4",
    client: "GreenEarth",
    category: "Sustainability",
    tags: ["Brand Strategy", "Content Creation"],
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=544&h=601&fit=crop",
    mood: "green",
    link: "/our-work/greenearth",
  },
  {
    id: "5",
    client: "Spotify",
    category: "Music & Entertainment",
    tags: ["Brand Campaign", "Video Production"],
    imageUrl:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=544&h=601&fit=crop",
    mood: "peach",
    link: "/our-work/spotify",
  },
  {
    id: "6",
    client: "Nike",
    category: "Sports & Fitness",
    tags: ["Product Design", "Marketing"],
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=544&h=601&fit=crop",
    mood: "stone",
    link: "/our-work/nike",
  },
];

const moodStyles = {
  peach: "bg-[#FFE5D9] text-[#2D2D2D]",
  stone: "bg-[#F5F5F0] text-[#2D2D2D]",
  blue: "bg-[#E3F2FD] text-[#1A1A1A]",
  green: "bg-[#E8F5E9] text-[#1A1A1A]",
};

function WorkCard({ card }: { card: WorkCard }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group flex flex-col flex-shrink-0">
      <motion.div
        className={`flex flex-col overflow-hidden rounded-[10px] transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          h-[320px] w-[200px]
          xs:h-[360px] xs:w-[220px]
          sm:h-[400px] sm:w-[250px]
          md:h-[480px] md:w-[320px]
          lg:h-[588px] lg:w-[400px]
          xl:h-[720px] xl:w-[480px]
          ${moodStyles[card.mood]}`}
        whileHover={{ rotate: 1, scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href={card.link}
          className="relative flex h-full w-full flex-col justify-end"
        >
          {/* Image Container */}
          <div className="relative flex-grow">
            <div className="w-full h-full absolute inset-0">
              <motion.img
                src={card.imageUrl}
                alt={`${card.client} project`}
                className="absolute inset-0 h-full w-full object-contain p-2 sm:p-3 md:p-4"
                loading="lazy"
                decoding="async"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col p-3 sm:p-4 md:p-5 lg:p-8 z-10">
            {/* Category Label - Hidden on mobile, visible on desktop */}
            <span className="text-[10px] md:text-xs lg:text-sm tracking-[0.15em] font-semibold uppercase mb-1 hidden md:block opacity-50">
              {card.category}
            </span>

            {/* Client Name */}
            <h4 className="box-border tracking-[0.1px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-serif mb-1 sm:mb-2 lg:mb-3 leading-tight">
              {card.client}
            </h4>

            {/* Tags */}
            <div
              className="flex mt-1 sm:mt-2 w-full flex-row gap-1 opacity-60 lg:mt-3 lg:gap-2 overflow-hidden"
              style={{
                maskImage: "linear-gradient(90deg, #000 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, #000 85%, transparent 100%)",
              }}
            >
              {card.tags.slice(0, 2).map((tag, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center gap-1 rounded-full border font-semibold
                    text-[10px] sm:text-xs md:text-sm
                    px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1
                    border-current bg-transparent whitespace-nowrap"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
}

interface WorkScrollerProps {
  cards: WorkCard[];
}

const WorkScroller: React.FC<WorkScrollerProps> = ({ cards }) => {
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
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

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown || !scrollerRef.current) return;
    const x = e.touches[0].pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative overflow-hidden select-none">
      {/* Left fade - responsive widths */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 bg-gradient-to-r from-background via-background/90 to-transparent z-10" /> */}
      {/* Right fade - responsive widths */}
      {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 bg-gradient-to-l from-background via-background/90 to-transparent z-10" /> */}

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
        <div
          ref={contentRef}
          className="flex w-max hover:animate-pause animate-scroll-work"
        >
          {/* Triple the cards for seamless infinite loop */}
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-6 py-4 sm:py-6 md:py-8"
            >
              <WorkCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function WorkShowcaseCards() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <span className="text-xs sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2 md:mb-3 block">
            FEATURED PROJECTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
            Our Work{" "}
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal">
              <em>Showcase</em>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0">
            Explore our portfolio of creative excellence across industries.
          </p>
        </motion.div>

        {/* Scrolling Cards */}
        <div className="mb-6 md:mb-8">
          <WorkScroller cards={workCards} />
        </div>

        {/* Helper text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-6 md:mt-8"
        >
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/60">
            <span className="hidden sm:inline">
              Drag to explore • Hover to pause
            </span>
            <span className="sm:hidden">Swipe to explore</span>
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-24 sm:-left-32 md:-left-48 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 sm:-right-32 md:-right-48 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-work {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll-work {
            animation: scroll-work 80s linear infinite;
          }

          .animate-pause {
            animation-play-state: paused !important;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Faster animation on mobile for better experience */
          @media (max-width: 640px) {
            .animate-scroll-work {
              animation: scroll-work 60s linear infinite;
            }
          }

          @media (min-width: 641px) and (max-width: 1024px) {
            .animate-scroll-work {
              animation: scroll-work 70s linear infinite;
            }
          }

          /* Better touch interaction for mobile */
          @media (hover: none) and (pointer: coarse) {
            .group:active .group-hover\\:scale-110 {
              transform: scale(1.05);
            }
            .group:active .group-hover\\:rotate-1 {
              transform: rotate(0.5deg);
            }
          }
        `,
        }}
      />
    </section>
  );
}
