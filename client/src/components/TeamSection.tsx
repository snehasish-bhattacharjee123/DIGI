import { motion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Soumitra Mitra",
    position: "President",
    image: "/uploads/team/cat250517042503.jpeg",
  },
  {
    id: "2",
    name: "Rajat Bandyopadhyay",
    position: "Working President",
    image: "/uploads/team/cat250517042659.jpeg",
  },
  {
    id: "3",
    name: "Pranati Tagore",
    position: "Working President",
    image: "/uploads/team/cat250517042752.jpeg",
  },
  {
    id: "4",
    name: "Rabin Bhattacharya",
    position: "Vice-President",
    image: "/uploads/team/cat250517042951.jpeg",
  },
  {
    id: "5",
    name: "Alok Roy Ghatak",
    position: "Vice-President",
    image: "/uploads/team/cat250517043101.jpeg",
  },
  {
    id: "6",
    name: "Aloke Mukherjee",
    position: "Vice-President",
    image: "/uploads/team/cat250517042828.jpeg",
  },
  {
    id: "7",
    name: "Chandan Majumdar",
    position: "Jt. Secretary",
    image: "/uploads/team/cat250517043155.jpeg",
  },
  {
    id: "8",
    name: "Sekhar Dey",
    position: "Jt. Secretary",
    image: "/uploads/team/cat250517043234.jpeg",
  },
  {
    id: "9",
    name: "Subhabrata Raychaudhuri",
    position: "Asst. Secretary",
    image: "/uploads/team/cat250519010744.jpeg",
  },
  {
    id: "10",
    name: "Sarnava Roy",
    position: "Asst. Secretary",
    image: "/uploads/team/cat250517043531.jpeg",
  },
  {
    id: "11",
    name: "Prosenjit Ghosh",
    position: "Treasurer",
    image: "/uploads/team/cat250517043613.jpeg",
  },
  {
    id: "12",
    name: "Jagannath Chattopadhyay",
    position: "Member",
    image: "/uploads/team/cat250517043652.jpeg",
  },
  {
    id: "13",
    name: "Asish Dasgupta",
    position: "Member",
    image: "/uploads/team/cat250517044327.jpeg",
  },
  {
    id: "14",
    name: "Krishnapada Das",
    position: "Member",
    image: "/uploads/team/cat250517043728.jpeg",
  },
  {
    id: "15",
    name: "Ranjan Sen",
    position: "Member",
    image: "/uploads/team/cat250517043803.jpeg",
  },
  {
    id: "16",
    name: "Pitam Bhattacharya",
    position: "Member",
    image: "/uploads/team/cat250517043846.jpeg",
  },
  {
    id: "17",
    name: "Tusharkanti Ghosh",
    position: "Member",
    image: "/uploads/team/cat250517043925.jpeg",
  },
  {
    id: "18",
    name: "Saswati Guha",
    position: "Member",
    image: "/uploads/team/cat250517043955.jpeg",
  },
  {
    id: "19",
    name: "Iva Kanrar",
    position: "Member",
    image: "/uploads/team/cat250517044021.jpeg",
  },
  {
    id: "20",
    name: "Sreetama Mukherjee",
    position: "Member",
    image: "/uploads/team/cat250517044039.jpeg",
  },
  {
    id: "21",
    name: "Nibedita Nagtahabildar",
    position: "Member",
    image: "/uploads/team/cat250517044118.jpg",
  },
  {
    id: "22",
    name: "Srabonti Maitra",
    position: "Member",
    image: "/uploads/team/cat250517044151.jpeg",
  },
  {
    id: "23",
    name: "Chumki Dutta",
    position: "Member",
    image: "/uploads/team/cat250517044301.jpeg",
  },
  {
    id: "24",
    name: "Subir Bhattacharya",
    position: "Member",
    image: "/uploads/team/cat250517044417.jpeg",
  },
  {
    id: "25",
    name: "Minakshi Ghosh",
    position: "Member",
    image: "/uploads/team/cat250517044451.jpeg",
  },
  {
    id: "26",
    name: "Maloy Poddar",
    position: "Member",
    image: "/uploads/team/cat250517044521.jpeg",
  },
  {
    id: "27",
    name: "Parthapratim Nandy",
    position: "Member",
    image: "/uploads/team/cat250517044631.jpeg",
  },
  {
    id: "28",
    name: "Debabrata Dutta",
    position: "Member",
    image: "/uploads/team/cat250517044653.jpeg",
  },
  {
    id: "29",
    name: "Pranabesh Ray",
    position: "Member",
    image: "/uploads/team/cat250517044735.jpeg",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col flex-shrink-0 w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[3/4] mb-3 md:mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          srcSet={`${member.image} 1x`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="space-y-0.5 md:space-y-1 px-1">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-bor-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
          {member.name}
        </h3>
        <p className="text-xs sm:text-xs md:text-sm text-bor-foreground/60 uppercase tracking-wide leading-tight">
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
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 bg-gradient-to-r from-bor-background via-bor-background/90 to-transparent z-10" />
      {/* Right fade - responsive widths */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 bg-gradient-to-l from-bor-background via-bor-background/90 to-transparent z-10" />

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
          className="flex w-max hover:animate-pause animate-scroll-team"
        >
          {/* Triple the members for seamless infinite loop */}
          {[...members, ...members, ...members].map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-6 py-4"
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-bor-background text-bor-foreground py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32" data-mood="brand-dark">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <span className="text-xs sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-bor-gray mb-2 md:mb-3 block">
            EXECUTIVE COMMITTEE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Our Core{" "}
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal">
              <em>Strength</em>
            </span>
          </h2>
        </motion.div>

        {/* Single Continuous Scrolling Row */}
        <div className="mb-8 md:mb-12">
          <TeamScroller members={teamMembers} />
        </div>

        {/* Helper text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-xs sm:text-sm md:text-base text-bor-foreground/60">
            <span className="hidden sm:inline">
              Drag to explore • Hover to pause
            </span>
            <span className="sm:hidden">Swipe to explore</span>
          </p>
        </motion.div>
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
