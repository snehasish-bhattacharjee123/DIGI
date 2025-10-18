import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cta-heading">
            Ready to scale your creative output?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Join hundreds of companies using Superside to deliver exceptional
            creative work, faster and more affordably.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px] group" data-testid="button-cta-book-demo">
              Book a demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px]"
              data-testid="button-cta-view-pricing"
            >
              View pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
