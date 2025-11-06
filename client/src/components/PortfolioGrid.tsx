import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

// =====================
// PORTFOLIO CARD
// =====================
function PortfolioCard({
  item,
  index,
  spanClass,
}: {
  item: PortfolioItem;
  index: number;
  spanClass?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch devices
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
    }
  }, []);

  return (
    <motion.a
      href={item.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-xl bg-muted cursor-pointer block ${
        spanClass || ""
      }`}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={() => !isTouch && setIsHovered(false)}
      onClick={() => isTouch && setIsHovered((prev) => !prev)}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={`${item.client} - ${item.title}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient + content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        {/* Top Text */}
        <div>
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2"
            animate={{ y: isHovered ? -3 : 0 }}
          >
            {item.client}
          </motion.h3>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-white/80 max-w-sm leading-relaxed"
            animate={{ y: isHovered ? -3 : 0 }}
          >
            {item.title}
          </motion.p>
        </div>

        {/* Bottom link — animated underline */}
        <motion.div
          className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white mt-4 transition-all duration-300 ${
            isHovered || isTouch
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <span className="relative after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-500 after:ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:after:w-full">
            Learn more
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

// =====================
// SKELETON STATE
// =====================
function PortfolioGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[300px] grid-flow-dense">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="rounded-xl h-full w-full" />
      ))}
    </div>
  );
}

// =====================
// PORTFOLIO GRID
// =====================
export function PortfolioGrid() {
  const { data, isLoading, error } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
    queryFn: async () => {
      const res = await fetch("/api/portfolio");
      if (!res.ok) {
        // fallback demo data
        return [
          {
            id: "1",
            client: "Nike",
            title: "New Season Campaign",
            imageUrl:
              "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
            category: "Branding",
          },
          {
            id: "2",
            client: "Apple",
            title: "Product Launch Creative",
            imageUrl:
              "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800",
            category: "Digital",
          },
          {
            id: "3",
            client: "Spotify",
            title: "Soundwave Experience Design",
            imageUrl:
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
            category: "UX/UI",
          },
        ];
      }
      return res.json();
    },
  });

  const portfolioItems = data ?? [];

  const getGridSpanClass = (index: number) => {
    const pattern = index % 7;
    switch (pattern) {
      case 0:
        return "md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2";
      case 1:
        return "md:col-span-1 lg:col-span-2";
      case 2:
        return "md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2";
      case 3:
        return "md:col-span-1 lg:col-span-3";
      case 4:
      case 5:
        return "md:col-span-1 lg:col-span-2";
      case 6:
        return "md:col-span-2 lg:col-span-4";
      default:
        return "md:col-span-1 lg:col-span-2";
    }
  };

  return (
    <section
      id="work"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-background overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Featured work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            From Fortune 500 brands to high-growth startups, we deliver creative
            excellence at scale.
          </p>
        </motion.div>

        {/* Loading */}
        {isLoading && <PortfolioGridSkeleton />}

        {/* Error */}
        {error && (
          <div className="text-center py-16 text-destructive">
            <p className="text-lg font-semibold">Unable to load portfolio</p>
            <p className="text-sm opacity-70">Please try again later.</p>
          </div>
        )}

        {/* Portfolio Grid */}
        {!isLoading && portfolioItems.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[300px] grid-flow-dense"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                spanClass={getGridSpanClass(index)}
              />
            ))}
          </motion.div>
        )}

        {/* Empty */}
        {!isLoading && portfolioItems.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-medium">No portfolio items yet</p>
            <p className="opacity-75">
              Check back soon for our latest creative projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
