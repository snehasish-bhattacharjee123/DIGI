import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface StatItem {
  number: string;
  description: string;
  cta?: {
    text: string;
    url: string;
  };
}

const stats: StatItem[] = [
  {
    number: "500+",
    description:
      "Startups, enterprises, and mid-market companies trust Digiteller Creative to deliver pixel-perfect creative, at scale.",
  },
  {
    number: "70k+",
    description: "Projects successfully delivered — and counting.",
  },
  {
    number: "94%",
    description:
      "Clients see a three-year ROI of 94% on their creative investment.",
    cta: {
      text: "Read our success stories",
      url: "#case-studies",
    },
  },
  {
    number: "6 months",
    description: "Average payback period for creative service subscriptions.",
    cta: {
      text: "Learn about our pricing",
      url: "#pricing",
    },
  },
];

const itemVariants = (i: number, reduced: boolean) => ({
  hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0 : 0.6,
      delay: reduced ? 0 : i * 0.08,
      ease: "easeOut",
    },
  },
});

export default function StatsSection(): JSX.Element {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-brand-blue-900 text-brand-beige-100 py-16 md:py-24 lg:py-32"
      data-mood="brand-dark"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-brand-green mb-3 block">
            Success in numbers
          </span>

          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight"
          >
            The best return on{" "}
            <span className="font-serif italic text-brand-green">
              your investment
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-brand-beige-100/80 max-w-[860px] mx-auto">
            We combine data-driven creative with a repeatable delivery engine so
            you get measurable impact — faster.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.article
              key={idx}
              className="relative p-6 lg:p-8 rounded-2xl bg-white/2 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={itemVariants(idx, reduceMotion)}
              aria-label={`${stat.number} — ${stat.description}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <p className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-brand-green leading-none tracking-tight">
                    {stat.number}
                  </p>
                </div>

                {/* Text + CTA */}
                <div className="flex-1 min-w-0">
                  <p className="text-base md:text-lg text-brand-beige-100/85 leading-relaxed tracking-[0.01em]">
                    {stat.description}
                  </p>

                  {stat.cta && (
                    <a
                      href={stat.cta.url}
                      className="mt-4 inline-flex items-center gap-3 text-sm md:text-base font-medium text-brand-green hover:text-brand-orange-400 transition-colors duration-200"
                      aria-label={stat.cta.text}
                      {...(stat.cta.url.startsWith("#")
                        ? { role: "link" }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <span className="relative overflow-hidden">
                        <span className="inline-block align-middle">
                          {stat.cta.text}
                        </span>
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
                      </span>

                      <ArrowUpRight className="w-4 h-4 translate-y-0 transition-transform duration-200" />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative separator for large screens */}
              <div
                className="hidden lg:block absolute right-6 top-6 bottom-6 w-px bg-white/6"
                aria-hidden
              />
            </motion.article>
          ))}
        </div>

        {/* Optional: small caption or note */}
        <p className="mt-8 text-xs md:text-sm text-brand-beige-100/70 text-center max-w-2xl mx-auto">
          Real customers. Real results. Numbers updated yearly.
        </p>
      </div>
    </section>
  );
}
