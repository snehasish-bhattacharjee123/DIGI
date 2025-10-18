import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";

export function Hero() {
  const { data: portfolioItems } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Portfolio Images Background Grid */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4 opacity-20">
        {portfolioItems?.slice(0, 15).map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative aspect-square overflow-hidden rounded-md"
          >
            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small overline text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground uppercase tracking-wider mb-6"
          >
            The world's leading creative teams use Superside
          </motion.p>

          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Make <span className="text-primary">amazing</span>
            <br />
            creative. <span className="text-primary">Fast.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-hero-subtitle">
            Scale your in-house creative team with top global talent powered by
            industry-leading AI workflows.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px] text-base" data-testid="button-hero-book-demo">
              Book a demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] text-base backdrop-blur-sm bg-background/50 border-primary/30 hover:border-primary/50"
              data-testid="button-hero-view-work"
            >
              View our work
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
