import { motion } from "framer-motion";
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
      "Startup, enterprises and mid-market companies trust Digiteller Creative to deliver pixel-perfect creative, at scale.",
  },
  {
    number: "70k+",
    description: "Projects delivered to this day and counting.",
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
    description: "Average payback period on creative services subscription.",
    cta: {
      text: "Learn about our pricing",
      url: "#pricing",
    },
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-16 md:py-20 lg:py-28">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 block">
            SUCCESS IN NUMBERS
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The best return on{" "}
            <span className="font-serif italic text-primary">
              your investment
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pb-8 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/15"
            >
              <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                {/* Description */}
                <div className="flex-1 space-y-3 max-w-[500px]">
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                  {stat.cta && (
                    <a
                      href={stat.cta.url}
                      className="group inline-flex items-center gap-2 text-sm md:text-base text-white hover:text-primary transition-colors duration-300"
                    >
                      <span className="relative">
                        {stat.cta.text}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-500"></span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  )}
                </div>

                {/* Number */}
                <div className="flex-shrink-0">
                  <p className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal whitespace-nowrap">
                    {stat.number}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
