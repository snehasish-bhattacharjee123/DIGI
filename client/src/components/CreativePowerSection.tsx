import React from "react";
import { motion } from "framer-motion";

export const CreativePowerSection = () => {
  return (
    <section
      aria-labelledby="creative-power-heading"
      className="relative w-full overflow-hidden bg-bor-background text-bor-foreground"
    >
      {/* Image container with margin, rounding, and shadow */}
      <div className="relative mx-4 sm:mx-8 lg:mx-16 my-8 sm:my-12 lg:my-20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {/* Background Images */}
        <img
          alt="Creative power visual"
          loading="lazy"
          srcSet="
            https://cdn.sanity.io/images/k0dlbavy/production/430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png?q=100&auto=format&fit=min 720w,
            https://cdn.sanity.io/images/k0dlbavy/production/30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png?q=100&auto=format&fit=min 1920w
          "
          sizes="(max-width: 1024px) 100vw, 1920px"
          src="https://cdn.sanity.io/images/k0dlbavy/production/30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png?q=100&auto=format&fit=min"
          className="object-cover w-full h-full absolute inset-0"
        />

        {/* Optional dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Foreground Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 max-w-layout mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h3
            id="creative-power-heading"
            className="font-heading text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-white max-w-5xl"
          >
            Now imagine this{" "}
            <span className="font-serif font-normal italic text-[calc(100%+4px)]">
              creative power
            </span>{" "}
            behind your next project
          </h3>

          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">
            This is just one of many creative services — what you do with them
            is up to you. Let’s chat.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="mt-10 rounded-md font-semibold bg-bor-primary text-bor-foreground-inverted text-sm leading-5 px-8 py-4"
          >
            Book a demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
