import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

function PortfolioCard({ item, index, spanClass }: { item: PortfolioItem; index: number; spanClass?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${spanClass || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-portfolio-${item.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-muted h-full">
        <motion.img
          src={item.imageUrl}
          alt={`${item.client} - ${item.title}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs md:text-sm text-primary font-semibold mb-2 uppercase tracking-wider" data-testid={`text-category-${item.id}`}>
            {item.category}
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2" data-testid={`text-client-${item.id}`}>
            {item.client}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground" data-testid={`text-title-${item.id}`}>
            {item.title}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PortfolioGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[300px]">
      {[...Array(6)].map((_, i) => (
        <Skeleton 
          key={i} 
          className={`rounded-lg ${
            i % 3 === 0 ? 'md:col-span-3 md:row-span-2' : 
            i % 2 === 0 ? 'md:col-span-3' : 'md:col-span-2'
          }`}
          data-testid={`skeleton-portfolio-${i}`}
        />
      ))}
    </div>
  );
}

export function PortfolioGrid() {
  const { data: portfolioItems, isLoading, error } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  // Define custom grid spanning for masonry effect
  const gridSpans = [
    'md:col-span-3 md:row-span-2',  // Large square
    'md:col-span-3',                 // Wide horizontal
    'md:col-span-2',                 // Small
    'md:col-span-2',                 // Small
    'md:col-span-2',                 // Small
    'md:col-span-4',                 // Large wide
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-portfolio-heading">
            Featured work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" data-testid="text-portfolio-subtitle">
            From Fortune 500 brands to high-growth startups, we deliver creative excellence at scale
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && <PortfolioGridSkeleton />}

        {/* Error State */}
        {error && (
          <div className="text-center py-12" data-testid="error-portfolio">
            <p className="text-destructive text-lg">Failed to load portfolio items. Please try again later.</p>
          </div>
        )}

        {/* Portfolio Masonry Grid */}
        {portfolioItems && portfolioItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[300px]">
            {portfolioItems.map((item, index) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                index={index}
                spanClass={gridSpans[index % gridSpans.length]}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {portfolioItems && portfolioItems.length === 0 && (
          <div className="text-center py-12" data-testid="empty-portfolio">
            <p className="text-muted-foreground text-lg">No portfolio items available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
