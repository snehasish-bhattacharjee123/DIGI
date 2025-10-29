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

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-900 text-brand-beige-100 py-20 md:py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-brand-green mb-3 block">
            Success in Numbers
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            The best return on{" "}
            <span className="font-serif italic text-brand-green">
              your investment
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pb-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/10"
            >
              <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                {/* Text Section */}
                <div className="flex-1 space-y-4 max-w-[500px]">
                  <p className="text-base md:text-lg text-brand-beige-100/80 leading-relaxed tracking-[0.01em]">
                    {stat.description}
                  </p>
                  {stat.cta && (
                    <a
                      href={stat.cta.url}
                      className="group inline-flex items-center gap-2 text-sm md:text-base font-medium text-brand-green hover:text-brand-orange-400 transition-colors duration-300"
                    >
                      <span className="relative">
                        {stat.cta.text}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-500"></span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  )}
                </div>

                {/* Number Section */}
                <div className="flex-shrink-0">
                  <p className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-brand-green leading-none tracking-tight">
                    {stat.number}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
