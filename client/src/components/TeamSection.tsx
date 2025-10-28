import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg md:text-xl font-semibold text-bor-foreground group-hover:text-primary transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm md:text-base text-bor-foreground/60 uppercase tracking-wide">
          {member.position}
        </p>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const newScrollLeft =
      scrollContainerRef.current.scrollLeft +
      (direction === "right" ? scrollAmount : -scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    setTimeout(checkScrollButtons, 100);
  };

  return (
    <section className="relative overflow-hidden bg-bor-background text-bor-foreground py-16 md:py-24 lg:py-32">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-bor-gray mb-3 block">
            EXECUTIVE COMMITTEE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Core{" "}
            <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal">
              <em>Strength</em>
            </span>
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Scrollable Grid */}
        <div className="hidden md:block relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "opacity-100 hover:bg-primary hover:border-primary"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous members"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "opacity-100 hover:bg-primary hover:border-primary"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next members"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto scrollbar-hide -mx-4 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-6 lg:gap-8 pb-4">
              {teamMembers.map((member, index) => (
                <div key={member.id} className="flex-shrink-0 w-72 lg:w-80">
                  <TeamMemberCard member={member} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-1 w-8 rounded-full bg-bor-foreground/20"
                ></div>
              ),
            )}
          </div>
        </div>

        {/* Mobile: Grid Layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `,
        }}
      />
    </section>
  );
}
