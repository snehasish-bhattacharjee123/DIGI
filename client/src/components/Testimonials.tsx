import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Superside has been instrumental in scaling our creative output. Their team delivers exceptional quality at a pace that matches our fast-growing business.",
    author: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "Tech Innovations Inc",
    initials: "SM",
  },
  {
    quote: "The AI-powered workflows combined with world-class talent have transformed how we approach creative projects. Faster turnarounds without compromising on quality.",
    author: "James Chen",
    role: "Creative Director",
    company: "Brand Studio",
    initials: "JC",
  },
  {
    quote: "Working with Superside feels like having an extension of our in-house team. They understand our brand and consistently deliver beyond our expectations.",
    author: "Emily Rodriguez",
    role: "VP of Design",
    company: "Digital Ventures",
    initials: "ER",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-8 h-full" data-testid={`card-testimonial-${index}`}>
        <Quote className="w-10 h-10 text-primary mb-6" />
        
        <blockquote className="text-lg mb-6" data-testid={`text-quote-${index}`}>
          "{testimonial.quote}"
        </blockquote>
        
        <div className="flex items-center gap-4">
          <Avatar data-testid={`avatar-${index}`}>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-semibold text-foreground" data-testid={`text-author-${index}`}>
              {testimonial.author}
            </p>
            <p className="text-sm text-muted-foreground" data-testid={`text-role-${index}`}>
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-testimonials-heading">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Trusted by innovative teams around the world
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
