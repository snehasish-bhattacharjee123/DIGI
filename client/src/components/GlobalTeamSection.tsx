import { motion } from "framer-motion";
import { Flag, Clock, Lightbulb } from "lucide-react";

interface FeaturePill {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const features: FeaturePill[] = [
  {
    icon: <Flag className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: "67 countries",
    delay: 0,
  },
  {
    icon: <Clock className="w-6 h-6 lg:w-8 lg:h-8" />,
    title: "Video/photo production hubs in Bogotá and Johannesburg",
    delay: 0.2,
  },
  {
    icon: <Lightbulb className="w-6 h-6 lg:w-8 lg:h-8" />,
    title:
      "100% remote from day one, so we're expert collaborators in remote settings",
    delay: 0.4,
  },
];

export function GlobalTeamSection() {
  return (
    <section className="relative overflow-hidden text-white py-0 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.sanity.io/images/k0dlbavy/production/c4f5fdeae73ba665af447d9bd9bebc04d58ff18f-2271x1244.png?q=100&auto=format&fit=min"
          alt="Global team collaboration"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        {/* Additional subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 md:py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Header */}
            <div className="space-y-5">
              <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-400 block">
                OUR GLOBAL TEAM
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15]">
                When we say "world-class",{" "}
                <span className="font-serif italic font-light text-primary">
                  we really mean it
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-light max-w-xl">
                As a fully remote company, we aren't bound by borders. So we're
                able to hire the best, no matter where they live, including
                South Africa, Brazil, Germany, Malaysia, Canada and more.
              </p>
            </div>

            {/* Glass Morphism Info Cards */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 shadow-xl"
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative flex items-start gap-4 md:gap-5">
                    <span className="flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 md:p-3.5 flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                      {feature.icon}
                    </span>
                    <div className="flex-1 pt-1">
                      <h3 className="text-base md:text-lg lg:text-xl font-light tracking-wide text-gray-100 leading-relaxed">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
