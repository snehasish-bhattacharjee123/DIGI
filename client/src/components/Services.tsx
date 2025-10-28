import { motion } from "framer-motion";
import { Palette, Video, Wand2, Layout, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production & Editing",
    description:
      "High-quality video, reels, and professional editing for compelling visual storytelling.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Logo Design & Branding",
    description:
      "Complete visual identity services from logo design to full brandboarding and style guides.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Website & Graphic Design",
    description:
      "Sleek, modern websites and stunning graphics that create a powerful brand presence.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "2D & 3D Animation",
    description:
      "Engaging 2D and 3D motion graphics and animations that bring your creative ideas to life.",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Social Media Management",
    description:
      "Strategic SMM to build your brand, engage your audience, and drive growth across platforms.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Google & Meta Ads",
    description:
      "Targeted advertising campaigns on Google and Meta to reach your ideal customers and maximize ROI.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card
        className="p-8 h-full hover-elevate hover:border-brand-orange/40 transition-all duration-300"
        data-testid={`card-service-${index}`}
      >
        <div
          className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300"
          data-testid={`icon-service-${index}`}
        >
          {service.icon}
        </div>
        <h3
          className="text-xl font-bold mb-3 text-brand-blue-900 group-hover:text-brand-orange transition-colors duration-300"
          data-testid={`text-service-title-${index}`}
        >
          {service.title}
        </h3>
        <p
          className="text-brand-gray-700 leading-relaxed"
          data-testid={`text-service-description-${index}`}
        >
          {service.description}
        </p>
      </Card>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-beige-100">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4"
            data-testid="text-services-overline"
          >
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-blue-900"
            data-testid="text-services-heading"
          >
            Our Core <span className="text-brand-orange">Services</span>
          </h2>
          <p
            className="text-lg md:text-xl text-brand-gray-700 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-services-subtitle"
          >
            A complete suite of creative and digital marketing solutions to
            elevate your brand and drive meaningful results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-brand-gray-700 mb-4">
            Looking for something specific?
          </p>
          <a
            href="/contact"
            className="inline-block text-brand-orange font-semibold hover:text-brand-orange-600 transition-colors duration-300 group"
          >
            Let's discuss your project{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
