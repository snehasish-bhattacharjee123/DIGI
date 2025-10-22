import { motion } from "framer-motion";
const clients = [
  "Parle",
  "Naksha",
  "MKT Rugs",
  "Dhruwo Cabs",
  "ASR Doctors Clinic",
  "Kulina Entertainment",
  "Mehakleen",
  "Celestial Guidance",
  "KODC",
  "RedOchre",
  "The Smash",
  "Viracocha Little Learners",
  "Teamax",
  "Transformation & Strength",
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
            data-testid="text-clients-label"
          >
            Trusted by leading brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-10 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center text-center"
            >
              <span
                className="text-sm font-medium text-muted-foreground/80 hover:text-foreground transition-colors duration-300"
                data-testid={`text-client-${client
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
