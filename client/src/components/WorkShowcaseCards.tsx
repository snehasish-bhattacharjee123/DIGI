import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

// === WorkCard Interface ===
interface WorkCard {
  id: string;
  client: string;
  category: string;
  tags: string[];
  imageUrl: string;
  mood: "peach" | "stone" | "blue" | "green";
  link: string;
}

// === Data ===
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

// === Mood Styles ===
const moodStyles = {
  peach: "bg-[#FFE5D9] text-[#2D2D2D]",
  stone: "bg-[#F5F5F0] text-[#2D2D2D]",
  blue: "bg-[#E3F2FD] text-[#1A1A1A]",
  green: "bg-[#E8F5E9] text-[#1A1A1A]",
};

// === Work Card ===
function WorkCard({ card }: { card: WorkCard }) {
  return (
    <motion.div
      className={`flex flex-col overflow-hidden rounded-[10px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        h-[320px] w-[200px]
        xs:h-[360px] xs:w-[220px]
        sm:h-[400px] sm:w-[250px]
        md:h-[480px] md:w-[320px]
        lg:h-[588px] lg:w-[400px]
        xl:h-[720px] xl:w-[480px]
        ${moodStyles[card.mood]}`}
      whileHover={{ rotate: 1, scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href={card.link}
        className="relative flex h-full w-full flex-col justify-end"
      >
        <div className="relative flex-grow">
          <motion.img
            src={card.imageUrl}
            alt={card.client}
            className="absolute inset-0 h-full w-full object-contain p-2 sm:p-3 md:p-4"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <div className="flex flex-col p-3 sm:p-4 md:p-5 lg:p-8 z-10">
          <span className="text-[10px] md:text-xs lg:text-sm tracking-[0.15em] font-semibold uppercase mb-1 hidden md:block opacity-50">
            {card.category}
          </span>
          <h4 className="tracking-[0.1px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-serif mb-2 leading-tight">
            {card.client}
          </h4>
          <div className="flex mt-1 sm:mt-2 gap-1 opacity-60 lg:mt-3 lg:gap-2 overflow-hidden">
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
  );
}

// === Showcase Section ===
export function WorkShowcaseCards() {
  useEffect(() => {
    document.querySelectorAll(".splide").forEach((el) => {
      const instance = (el as any).splide;
      if (instance) instance.destroy(true);
    });

    const splide = new Splide("#work-splide", {
      type: "loop",
      drag: "free",
      arrows: false,
      pagination: false,
      gap: "2rem",
      perPage: 3,
      autoScroll: {
        speed: 1.2,
        pauseOnHover: true,
      },
      breakpoints: {
        1536: { perPage: 3 },
        1280: { perPage: 2.5 },
        1024: { perPage: 2 },
        768: { perPage: 1.5 },
        480: { perPage: 1 },
      },
    });

    splide.mount({ AutoScroll });

    return () => {
      splide.destroy(true);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32" data-mood="brand-surface">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-12"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Our Work{" "}
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic">
              Showcase
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0">
            Explore our portfolio of creative excellence across industries.
          </p>
        </motion.div>

        {/* === Splide Slider (NO gradient mask) === */}
        <div id="work-splide" className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {workCards.map((card) => (
                <li key={card.id} className="splide__slide">
                  <WorkCard card={card} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Helper Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground/60">
            Hover to pause • Drag to explore
          </p>
        </motion.div>
      </div>

      {/* Subtle Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
