import React from "react";
import { motion } from "framer-motion";

export const CreativePowerSection = () => {
  return (
    <section
      aria-labelledby="creative-power-heading"
      className="relative w-full overflow-hidden bg-bor-background text-bor-foreground"
    >
      {/* Image container */}
      <div className="relative mx-4 sm:mx-8 lg:mx-16 my-8 sm:my-12 lg:my-20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {/* Image */}
        <div className="relative w-full">
          <img
            alt="Creative power visual"
            loading="lazy"
            srcSet="
              https://cdn.sanity.io/images/k0dlbavy/production/430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png?q=100&auto=format&fit=min 720w,
              https://cdn.sanity.io/images/k0dlbavy/production/30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png?q=100&auto=format&fit=min 1920w
            "
            sizes="(max-width: 1024px) 100vw, 1920px"
            src="https://cdn.sanity.io/images/k0dlbavy/production/30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png?q=100&auto=format&fit=min"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        {/* Foreground Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28"
        >
          {/* Heading */}
          <h3
            id="creative-power-heading"
            className="
              font-heading font-bold text-white leading-tight
              text-[clamp(1.75rem,5vw,4.5rem)]
              max-w-[95%] sm:max-w-2xl md:max-w-4xl
            "
          >
            Now imagine this{" "}
            <span className="font-serif font-normal italic text-[clamp(1.9rem,5.2vw,4.8rem)]">
              creative power
            </span>{" "}
            behind your next project
          </h3>

          {/* Paragraph */}
          <p
            className="
              mt-4 sm:mt-6 text-white/90 
              text-[clamp(0.9rem,1.5vw,1.25rem)]
              max-w-[90%] sm:max-w-2xl md:max-w-3xl
              leading-relaxed
            "
          >
            This is just one of many creative services — what you do with them
            is up to you. Let’s chat.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
              mt-6 sm:mt-8 md:mt-10
              rounded-md font-semibold 
              bg-bor-primary text-bor-foreground-inverted
              text-[clamp(0.8rem,1.2vw,1rem)]
              px-[clamp(1.5rem,2vw,2.5rem)]
              py-[clamp(0.75rem,1vw,1rem)]
              shadow-md hover:shadow-lg transition
            "
          >
            Book a demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
