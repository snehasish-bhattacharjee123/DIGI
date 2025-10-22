import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    value: "Flexible",
    label: "Production Options",
  },
  {
    value: "Ultra-Fast",
    label: "Turnaround Time",
  },
  {
    value: "10k",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: "20",
    suffix: "+",
    label: "Years of Experience",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="mb-3">
                <span
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary"
                  data-testid={`stat-value-${index}`}
                >
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p
                className="text-sm md:text-base text-muted-foreground"
                data-testid={`stat-label-${index}`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
