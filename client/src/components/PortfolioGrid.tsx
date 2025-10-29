import { motion } from "framer-motion";
import { useState } from "react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-xl cursor-pointer bg-muted ${
        spanClass || ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-portfolio-${item.id}`}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={item.imageUrl}
          alt={`${item.client} - ${item.title}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:from-black/60 md:via-black/20 md:to-transparent" />

      {/* Hover Overlay */}
      <motion.div
        className="hidden md:block absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8">
          {/* Category */}
          <motion.p
            className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider mb-2 sm:mb-3"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.category}
          </motion.p>

          {/* Client */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white transition-colors duration-300 line-clamp-2"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.client}
          </motion.h3>

          {/* Title */}
          <motion.p
            className="text-sm sm:text-base md:text-base lg:text-lg text-white/90 transition-colors duration-300 line-clamp-2 md:line-clamp-3"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.p>

          {/* View Project */}
          <motion.div
            className="hidden md:flex items-center gap-2 mt-4 text-sm text-primary font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4"
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
      </div>

      {/* Border hover */}
      <motion.div
        className="hidden md:block absolute inset-0 border-2 border-primary/0 rounded-xl pointer-events-none"
        animate={{
          borderColor: isHovered
            ? "rgba(var(--primary), 0.3)"
            : "rgba(var(--primary), 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// =====================
// SKELETON STATE
// =====================
function PortfolioGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:auto-rows-[300px] grid-flow-dense">
      {[...Array(6)].map((_, i) => {
        const pattern = i % 6;
        const spanMap: Record<number, string> = {
          0: "lg:col-span-4 lg:row-span-2",
          1: "lg:col-span-2",
          2: "lg:col-span-3 lg:row-span-2",
          3: "lg:col-span-3",
          4: "lg:col-span-2",
          5: "lg:col-span-4",
        };
        return (
          <Skeleton
            key={i}
            className={`rounded-xl h-[280px] ${spanMap[pattern]}`}
          />
        );
      })}
    </div>
  );
}

// =====================
// PORTFOLIO GRID
// =====================
export function PortfolioGrid() {
  const {
    data: portfolioItems,
    isLoading,
    error,
  } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  // Define a visually balanced span pattern (dense grid)
  const getGridSpanClass = (index: number) => {
    const pattern = index % 7;
    switch (pattern) {
      case 0:
        return "lg:col-span-4 lg:row-span-2"; // Big wide
      case 1:
        return "lg:col-span-2"; // Small
      case 2:
        return "lg:col-span-3 lg:row-span-2"; // Tall medium
      case 3:
        return "lg:col-span-3"; // Medium wide
      case 4:
      case 5:
        return "lg:col-span-2"; // Two smalls
      case 6:
        return "lg:col-span-4"; // Medium wide
      default:
        return "lg:col-span-2";
    }
  };

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background overflow-hidden"
    >
      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <div className="max-w-4xl">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"
              data-testid="text-portfolio-heading"
            >
              Featured work
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
              data-testid="text-portfolio-subtitle"
            >
              From Fortune 500 brands to high-growth startups, we deliver
              creative excellence at scale.
            </p>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && <PortfolioGridSkeleton />}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 sm:py-20 px-4"
            data-testid="error-portfolio"
          >
            <div className="max-w-md mx-auto">
              <div className="mb-4 text-destructive">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-destructive text-base sm:text-lg font-semibold mb-2">
                Unable to load portfolio
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Please try again later.
              </p>
            </div>
          </motion.div>
        )}

        {/* Portfolio Items */}
        {portfolioItems && portfolioItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:auto-rows-[300px] grid-flow-dense">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                spanClass={getGridSpanClass(index)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {portfolioItems && portfolioItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 sm:py-20 px-4"
            data-testid="empty-portfolio"
          >
            <div className="max-w-md mx-auto text-muted-foreground">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 opacity-60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg font-medium mb-2">No portfolio items yet</p>
              <p className="opacity-75">
                Check back soon for our latest creative projects.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
