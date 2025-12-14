import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-brand-beige-100 via-brand-beige-50 to-brand-beige-100 relative overflow-hidden" data-mood="light-beige">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue-900 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Overline */}
          <p
            className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-6"
            data-testid="text-cta-overline"
          >
            Start creating today
          </p>

          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-brand-blue-900"
            data-testid="text-cta-heading"
          >
            Let's make something
            <br />
            <span className="text-brand-orange">amazing together</span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-brand-gray-700 mb-12 max-w-2xl mx-auto"
            data-testid="text-cta-subtitle"
          >
            Book a demo to see how DIGITELLER CREATIVE can transform your
            creative workflow and help you deliver exceptional work faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[220px] text-base group"
              data-testid="button-cta-book-demo"
            >
              Book a demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[220px] text-base border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-brand-beige-100"
              data-testid="button-cta-contact-sales"
            >
              Contact sales
            </Button>
          </div>

          {/* Trust badges with brand colors */}
          <div className="mt-16 flex flex-wrap gap-8 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <p className="text-sm text-brand-gray-700 font-medium">
                500+ Projects Delivered
              </p>
            </div>
            <div className="h-4 w-px bg-brand-gray-400 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <p className="text-sm text-brand-gray-700 font-medium">
                98% Client Satisfaction
              </p>
            </div>
            <div className="h-4 w-px bg-brand-gray-400 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <p className="text-sm text-brand-gray-700 font-medium">
                Award-Winning Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
