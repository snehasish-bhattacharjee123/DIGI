import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`group relative flex flex-col overflow-hidden rounded-[14px] border border-black/5 shadow-[0_18px_50px_-25px_rgba(0,0,0,0.45)]
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        h-[clamp(340px,44vw,760px)] w-[clamp(220px,28vw,520px)]
        ${moodStyles[card.mood]}`}
      whileHover={shouldReduceMotion ? undefined : { rotate: 0.6, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.55 }}
    >
      <a
        href={card.link}
        className="relative flex h-full w-full flex-col justify-end outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="relative flex-grow">
          <motion.img
            src={card.imageUrl}
            alt={card.client}
            className="absolute inset-0 h-full w-full object-cover p-0 will-change-transform"
            loading="lazy"
            decoding="async"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.06,
                    y: -4,
                  }
            }
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        <div className="z-10 flex flex-col p-[clamp(0.75rem,1.2vw,2rem)]">
          <span className="mb-1 hidden md:block text-[clamp(0.62rem,0.55vw+0.5rem,0.9rem)] font-semibold uppercase tracking-[0.18em] opacity-55">
            {card.category}
          </span>
          <motion.h4
            className="mb-2 font-serif text-[clamp(1.35rem,2.2vw+0.9rem,3.75rem)] leading-[1.02] tracking-[-0.02em]"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {card.client}
          </motion.h4>
          <div className="mt-1 flex gap-1 overflow-hidden opacity-70 sm:mt-2 lg:mt-3 lg:gap-2">
            {card.tags.slice(0, 2).map((tag, idx) => (
              <div
                key={idx}
                className="flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-current/70 bg-transparent font-semibold
                  text-[clamp(0.62rem,0.45vw+0.55rem,0.95rem)]
                  px-[clamp(0.5rem,0.75vw,0.9rem)] py-[clamp(0.2rem,0.35vw,0.35rem)]"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>

      <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-black/10 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.div>
  );
}

// === Showcase Section ===
export function WorkShowcaseCards() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const root = document.getElementById("work-splide");
    if (!root) return;

    const existing = (root as any).splide;
    if (existing) existing.destroy(true);

    const splide = new Splide("#work-splide", {
      type: "loop",
      drag: "free",
      arrows: false,
      pagination: false,
      gap: "2rem",
      perPage: 3,
      autoScroll: shouldReduceMotion
        ? undefined
        : {
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

    if (shouldReduceMotion) {
      splide.mount();
    } else {
      splide.mount({ AutoScroll });
    }

    return () => {
      splide.destroy(true);
    };
  }, [shouldReduceMotion]);

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
          <h2 className="font-heading text-h2 leading-tight-13 font-bold tracking-tight mb-4">
            Our Work{" "}
            <span className="font-serif text-[clamp(2.25rem,3vw+1.25rem,4.5rem)] font-normal italic">
              Showcase
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0">
            Explore our portfolio of creative excellence across industries.
          </p>
        </motion.div>

        {/* === Splide Slider (NO gradient mask) === */}
        <div id="work-splide" className="splide select-none">
          <div className="splide__track !overflow-visible cursor-grab active:cursor-grabbing">
            <ul className="splide__list">
              {workCards.map((card) => (
                <li key={card.id} className="splide__slide flex justify-center py-4">
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
