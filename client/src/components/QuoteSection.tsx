import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12" data-testid="text-quote">
            "Superside helps us move at the{" "}
            <span className="text-primary">speed of culture</span>, delivering
            creative that resonates with our global audience."
          </blockquote>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold text-foreground" data-testid="text-quote-author">
              Sarah Mitchell
            </p>
            <p className="text-base text-muted-foreground" data-testid="text-quote-role">
              VP of Marketing, Global Tech Corp
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
