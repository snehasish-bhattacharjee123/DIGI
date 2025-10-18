import { motion } from "framer-motion";
import { SiAmazon, SiReddit, SiAirbnb, SiMeta, SiSpotify, SiNetflix } from "react-icons/si";

const clients = [
  { name: "Amazon", icon: SiAmazon },
  { name: "Reddit", icon: SiReddit },
  { name: "Airbnb", icon: SiAirbnb },
  { name: "Meta", icon: SiMeta },
  { name: "Spotify", icon: SiSpotify },
  { name: "Netflix", icon: SiNetflix },
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
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider" data-testid="text-clients-label">
            Trusted by leading brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <client.icon
                className="w-16 h-16 text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
                data-testid={`icon-client-${client.name.toLowerCase()}`}
                aria-label={client.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
