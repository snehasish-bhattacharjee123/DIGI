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
    <section className="relative overflow-hidden bg-black text-white py-16 md:py-20 lg:py-32">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px] md:min-h-0">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 z-10 order-2 lg:order-1"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 block">
                OUR GLOBAL TEAM
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                When we say "world-class",{" "}
                <span className="font-serif italic text-primary">
                  we really mean it
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                As a fully remote company, we aren't bound by borders. So we're
                able to hire the best, no matter where they live, including
                South Africa, Brazil, Germany, Malaysia, Canada and more.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/15 transition-all duration-300"
                >
                  <span className="hidden lg:flex items-center justify-center rounded-lg border border-white/15 p-4 flex-shrink-0">
                    {feature.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/c4f5fdeae73ba665af447d9bd9bebc04d58ff18f-2271x1244.png?q=100&auto=format&fit=min"
              alt="Global team collaboration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border-4 border-primary/30 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-primary/20 rounded-lg rotate-12"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
