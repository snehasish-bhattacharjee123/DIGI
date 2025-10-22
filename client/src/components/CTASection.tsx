import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm md:text-base text-primary uppercase tracking-wider font-semibold mb-6"
            data-testid="text-cta-overline"
          >
            Start creating today
          </p>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            data-testid="text-cta-heading"
          >
            Let's make something
            <br />
            <span className="text-primary">amazing together</span>
          </h2>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            data-testid="text-cta-subtitle"
          >
            Book a demo to see how DIGITELLER CREATIVE can transform your
            creative workflow and help you deliver exceptional work faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="min-w-[220px] text-base group"
              data-testid="button-cta-book-demo"
            >
              Book a demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[220px] text-base border-primary/30 hover:border-primary/50"
              data-testid="button-cta-contact-sales"
            >
              Contact sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
