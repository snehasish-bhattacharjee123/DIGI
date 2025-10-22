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
    >
      <Card
        className="p-8 h-full hover-elevate"
        data-testid={`card-service-${index}`}
      >
        <div
          className="text-primary mb-4"
          data-testid={`icon-service-${index}`}
        >
          {service.icon}
        </div>
        <h3
          className="text-xl font-bold mb-3"
          data-testid={`text-service-title-${index}`}
        >
          {service.title}
        </h3>
        <p
          className="text-muted-foreground"
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
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-services-heading"
          >
            Our Core Services
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-services-subtitle"
          >
            A complete suite of creative and digital marketing solutions to
            elevate your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
