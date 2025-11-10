import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Superside transformed how we approach creative work. Their team feels like an extension of ours, delivering exceptional quality at a pace that keeps up with our ambitious growth.",
    author: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "Tech Innovations Inc",
    initials: "SM",
  },
  {
    quote:
      "The combination of world-class talent and AI-powered workflows is a game changer. We've cut our creative production time in half while maintaining the high quality our brand demands.",
    author: "James Chen",
    role: "Creative Director",
    company: "Brand Studio",
    initials: "JC",
  },
  {
    quote:
      "Working with Superside has been transformative for our marketing team. They understand our vision and consistently deliver beyond our expectations, project after project.",
    author: "Emily Rodriguez",
    role: "VP of Design",
    company: "Digital Ventures",
    initials: "ER",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="p-8 md:p-10 h-full bg-card/50 backdrop-blur-sm border-border/50"
        data-testid={`card-testimonial-${index}`}
      >
        <blockquote
          className="text-lg md:text-xl mb-8 leading-relaxed"
          data-testid={`text-quote-${index}`}
        >
          "{testimonial.quote}"
        </blockquote>

        <div className="flex items-center gap-4 pt-6 border-t border-border/50">
          <Avatar className="w-12 h-12" data-testid={`avatar-${index}`}>
            <AvatarFallback className="bg-primary text-primary-foreground text-base font-semibold">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>

          <div>
            <p
              className="font-semibold text-foreground text-base"
              data-testid={`text-author-${index}`}
            >
              {testimonial.author}
            </p>
            <p
              className="text-sm text-muted-foreground"
              data-testid={`text-role-${index}`}
            >
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
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-accent/5" data-mood="brand-surface">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-sm md:text-base text-primary uppercase tracking-wider font-semibold mb-4"
            data-testid="text-testimonials-overline"
          >
            Client success stories
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-testid="text-testimonials-heading"
          >
            Loved by creative teams
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            data-testid="text-testimonials-subtitle"
          >
            See why leading brands choose Superside to power their creative
            operations
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
