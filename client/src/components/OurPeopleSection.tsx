import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function OurPeopleSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-16 md:py-24 lg:py-32 flex items-end min-h-[600px] md:min-h-[90vh] lg:min-h-screen">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/k0dlbavy/production/756cdd2202f11ba858779646f765538ab4c9ec60-904x1472.png?q=100&auto=format&fit=min"
            alt="Creative team mobile background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Tablet Background */}
        <div className="hidden md:block lg:hidden absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/k0dlbavy/production/756cdd2202f11ba858779646f765538ab4c9ec60-904x1472.png?q=100&auto=format&fit=min"
            alt="Creative team tablet background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Desktop Background */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/k0dlbavy/production/3daae34abf4f82ebdd8a4d7ba28ef309c607d708-3952x1626.png?q=100&auto=format&fit=min"
            alt="Creative team desktop background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[850px] mb-8 md:mb-16 space-y-4 sm:space-y-6 md:space-y-8"
        >
          {/* Section Label */}
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-gray-400 block">
            Our People
          </span>

          {/* Heading */}
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight sm:leading-[1.15] xl:leading-none">
            Collaborate with{" "}
            <span className="text-primary font-serif italic font-normal">
              world-class creators
            </span>{" "}
            — without the hiring grind.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-[620px]">
            We’ve built a dream team of over{" "}
            <span className="text-white font-semibold">750+ creative experts</span> —
            including designers, motion artists, writers, project leads, and AI
            innovators — so you can access top-tier talent without compromise or
            complexity.
          </p>

          {/* CTA */}
          <div className="pt-6 sm:pt-8">
            <a
              href="https://wa.me/917998596948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-5 text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
              >
                Book a Demo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 -left-48 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
