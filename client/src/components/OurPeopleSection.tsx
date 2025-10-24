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
            alt="Creative talent mobile background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Tablet Background */}
        <div className="hidden md:block lg:hidden absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/k0dlbavy/production/756cdd2202f11ba858779646f765538ab4c9ec60-904x1472.png?q=100&auto=format&fit=min"
            alt="Creative talent tablet background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Desktop Background */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/k0dlbavy/production/3daae34abf4f82ebdd8a4d7ba28ef309c607d708-3952x1626.png?q=100&auto=format&fit=min"
            alt="Creative talent desktop background"
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
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 block">
            Our People
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-[1.15] xl:leading-none">
            Partner with world-class
            <br />
            creative talent{" "}
            <span className="font-serif italic text-[calc(100%+2px)] md:text-[calc(100%+6px)] font-normal text-primary">
              without
              <br />
              the hassle of hiring
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-[600px]">
            Our people are our biggest strength. Superside has hired 750+ elite
            designers, project managers, animators, copywriters, and AI
            technologists — so you can get high-quality creative work without
            compromise.
          </p>

          {/* CTA */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <a
              href="https://wa.me/917998596948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold px-6 md:px-8 py-4 md:py-5 text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
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
