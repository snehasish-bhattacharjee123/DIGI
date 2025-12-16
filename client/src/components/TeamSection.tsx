import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Anurag Chanda",
    position: "Founder",
    image: "/images/work/Copy of DSC09129.jpg",
  },
  {
    id: "2",
    name: "Sougata Das",
    position: "Co Founder",
    image: "/images/work/DSC09150.jpg",
  },
  {
    id: "3",
    name: "Sombit Saha",
    position: "Creative Director",
    image: "/images/work/IMG_7981.JPG",
  },
  {
    id: "4",
    name: "Rahul Majumdar",
    position: "Editor",
    image: "/images/work/IMG_7988.JPG",
  },
  {
    id: "5",
    name: "Srikanta kar",
    position: "Graphic Designer",
    image: "/images/work/IMG_7999.JPG",
  },
  {
    id: "6",
    name: "Anirban Baidya",
    position: "Editor",
    image: "/images/work/IMG_20251210_205642.jpg",
  }
];

const teamFallbackImages = [
  "https://source.unsplash.com/600x800/?portrait,person&sig=11",
  "https://source.unsplash.com/600x800/?portrait,woman&sig=12",
  "https://source.unsplash.com/600x800/?portrait,man&sig=13",
  "https://source.unsplash.com/600x800/?portrait,professional&sig=14",
];

function getTeamFallbackImage(memberId: string) {
  const id = Number.parseInt(memberId, 10);
  const index = Number.isFinite(id) ? id % teamFallbackImages.length : 0;
  return teamFallbackImages[index];
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col flex-shrink-0 w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[3/4] mb-3 md:mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 scale-110 group-hover:scale-100"
          loading="lazy"
          srcSet={`${member.image} 1x`}
          onError={(e) => {
            const img = e.currentTarget;
            const fallback = getTeamFallbackImage(member.id);
            if (img.src.endsWith(fallback)) return;
            img.src = fallback;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="space-y-0.5 md:space-y-1 px-1">
        <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-brand-beige-100 group-hover:text-accent transition-colors duration-300 leading-tight">
          {member.name}
        </h3>
        <p className="font-din text-xs sm:text-xs md:text-sm text-brand-beige-100/70 uppercase tracking-wide leading-tight">
          {member.position}
        </p>
      </div>
    </div>
  );
}

interface TeamScrollerProps {
  members: TeamMember[];
}

const TeamScroller: React.FC<TeamScrollerProps> = ({ members }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const existing = (root as any).splide;
    if (existing) existing.destroy(true);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const splide = new Splide(root, {
      type: "loop",
      drag: "free",
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: "1.25rem",
      autoScroll: prefersReducedMotion
        ? undefined
        : {
            speed: 0.9,
            pauseOnHover: true,
            pauseOnFocus: true,
          },
    });

    if (prefersReducedMotion) {
      splide.mount();
    } else {
      splide.mount({ AutoScroll });
    }

    return () => {
      splide.destroy(true);
    };
  }, [members.length]);

  return (
    <div className="relative overflow-hidden select-none">
      {/* Left fade - responsive widths */}
      <div className="hidden" />
      {/* Right fade - responsive widths */}
      <div className="hidden" />

      <div ref={rootRef} className="splide select-none max-w-full overflow-x-hidden">
        <div className="splide__track overflow-hidden cursor-grab active:cursor-grabbing">
          <ul className="splide__list">
            {/* Triple the members for seamless infinite loop */}
            {[...members, ...members, ...members].map((member, index) => (
              <li key={`${member.id}-${index}`} className="splide__slide !w-auto py-4">
                <TeamMemberCard member={member} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-900 text-brand-beige-100 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32" data-mood="brand-dark">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <span className="font-din text-xs sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-brand-beige-100/70 mb-2 md:mb-3 block">
            EXECUTIVE COMMITTEE
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Our Core{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
              Strength
            </span>
          </h2>
        </motion.div>

        {/* Single Continuous Scrolling Row */}
        <div className="mb-8 md:mb-12">
          <TeamScroller members={teamMembers} />
        </div>

        {/* Helper text */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-xs sm:text-sm md:text-base text-brand-beige-100/70">
            <span className="hidden sm:inline">
              Drag to explore • Hover to pause
            </span>
            <span className="sm:hidden">Swipe to explore</span>
          </p>
        </motion.div> */}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 sm:-left-48 md:-left-64 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 sm:-right-48 md:-right-64 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-team {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll-team {
            animation: scroll-team 120s linear infinite;
          }

          .animate-pause {
            animation-play-state: paused !important;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Improve image rendering on mobile */
          @media (max-width: 640px) {
            .animate-scroll-team {
              animation: scroll-team 90s linear infinite;
            }
          }

          /* Better touch interaction */
          @media (hover: none) and (pointer: coarse) {
            .group:active .group-hover\\:scale-110 {
              transform: scale(1.05);
            }
            .group:active .group-hover\\:opacity-100 {
              opacity: 1;
            }
            .group:active .group-hover\\:text-primary {
              color: var(--primary);
            }
          }
        `,
        }}
      />
    </section>
  );
}
