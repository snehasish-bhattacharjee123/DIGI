import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-portfolio-${item.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-muted">
        <motion.img
          src={item.imageUrl}
          alt={`${item.client} - ${item.title}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-1" data-testid={`text-category-${item.id}`}>
            {item.category}
          </p>
          <h3 className="text-xl font-bold text-foreground mb-1" data-testid={`text-client-${item.id}`}>
            {item.client}
          </h3>
          <p className="text-sm text-foreground/80" data-testid={`text-title-${item.id}`}>
            {item.title}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PortfolioGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={i % 3 === 0 ? "md:row-span-2" : ""}>
          <Skeleton className="w-full h-[400px] rounded-md" data-testid={`skeleton-portfolio-${i}`} />
        </div>
      ))}
    </div>
  );
}

export function PortfolioGrid() {
  const { data: portfolioItems, isLoading, error } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-portfolio-heading">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            Creative excellence delivered for the world's leading brands
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

        {/* Portfolio Grid */}
        {portfolioItems && portfolioItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={item.aspectRatio === "portrait" ? "md:row-span-2" : ""}
              >
                <PortfolioCard item={item} index={index} />
              </div>
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
