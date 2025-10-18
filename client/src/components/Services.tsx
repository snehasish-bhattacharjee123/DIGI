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
    icon: <Palette className="w-8 h-8" />,
    title: "Design",
    description: "Brand identity, UI/UX, and visual design that captures your vision and connects with your audience.",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video & Motion",
    description: "Stunning video content and motion graphics that bring your stories to life with cinematic quality.",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Creative Strategy",
    description: "Data-driven creative strategies that align with your business goals and resonate with customers.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Web & Digital",
    description: "Beautiful, responsive websites and digital experiences optimized for conversion and engagement.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI-Powered Workflows",
    description: "Industry-leading AI tools that accelerate production while maintaining exceptional quality.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Delivery",
    description: "Fast turnaround times without compromising on quality, keeping your projects on schedule.",
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
      <Card className="p-8 h-full hover-elevate" data-testid={`card-service-${index}`}>
        <div className="text-primary mb-4" data-testid={`icon-service-${index}`}>
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3" data-testid={`text-service-title-${index}`}>
          {service.title}
        </h3>
        <p className="text-muted-foreground" data-testid={`text-service-description-${index}`}>
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-heading">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            End-to-end creative services powered by global talent and cutting-edge AI
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
