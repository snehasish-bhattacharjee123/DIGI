import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LiquidButton } from "@/components/LiquidButton";

export function WorkWithTheBestSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center lg:justify-end order-2 lg:order-1 py-12 md:py-16 lg:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        >
          <div className="max-w-xl lg:max-w-2xl w-full">
            <span className="inline-block font-semibold uppercase text-xs tracking-widest text-primary mb-6 pb-3 border-b-2 border-primary/30">
              Work with the Best
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="font-serif italic font-normal text-primary">
                Top-Tier Talent
              </span>{" "}
              <span className="block mt-2">for Every Project</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
                Our team consists of elite designers, project managers,
                animators, and copywriters, recruited from the best brands and
                agencies worldwide.
              </p>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                You'll get a dedicated project manager to ensure your briefs
                stay on track from start to finish, delivering exceptional
                results every time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917998596948"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <LiquidButton
                  label="Book a Demo" // ✅ use `label` instead of children
                  color="#646cff" // optional, primary color
                  duration={700} // optional, animation duration in ms
                  className="w-full sm:w-auto rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                />
              </a>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-lg px-8 py-6 text-base font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    500+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Clients Served
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    70k+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Projects Done
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    24/7
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image - Full Width */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
          <img
            src="https://cdn.sanity.io/images/k0dlbavy/production/d30228afb9c19b5470843abd242786f9835466ca-1650x1380.png"
            alt="Global creative talent collaborating"
            className="w-full h-full object-cover"
          />
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-primary/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-primary/20 rounded-lg rotate-12"></div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
