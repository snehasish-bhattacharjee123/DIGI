import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@shared/schema";
import { ScrollingImages } from "./aceternity/ScrollingImages";
import { LiquidButton } from "./LiquidButton";

const images = [
  "/generated_images/Amazon_Pharmacy_app_mockup_8bf3e1d7.png",
  "/generated_images/Brand_identity_system_8af1f13b.png",
  "/generated_images/E-commerce_website_design_43c43606.png",
  "/generated_images/Fintech_app_design_413d4352.png",
  "/generated_images/Pernod_Ricard_video_production_685784cf.png",
  "/generated_images/Reddit_campaign_creative_1b23ce70.png",
];

// 15 portfolio items cycling through the actual images
const portfolioItems: PortfolioItem[] = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  imageUrl: images[i % images.length],
  title: `Portfolio Item ${i + 1}`,
  client: "Creative Brand",
  category: "Design",
  aspectRatio: "portrait",
}));

export function Hero() {
  const items1 = portfolioItems.slice(0, 5);
  const items2 = portfolioItems.slice(5, 10);
  const items3 = portfolioItems.slice(10, 15);

  return (
    <section
      className="relative bg-brand-blue-900 text-brand-beige-100 overflow-hidden z-0 min-h-[80vh] md:min-h-[90vh] lg:min-h-[656px] xl:min-h-[965px] pt-6 md:pt-0 pb-10 lg:py-40"
      data-mood="brand-dark"
      aria-label="Hero section showcasing portfolio and brand introduction"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 opacity-50" />

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 xl:gap-32 items-center">
          {/* LEFT SIDE — Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                <span className="block text-brand-gray-400">DIGITELLER</span>
                <span className="block text-brand-beige-100">CREATIVE</span>
              </h1>

              <p className="text-lg md:text-xl text-brand-beige-200 max-w-xl mx-auto lg:mx-0 mb-4">
                Tailor of Tales
              </p>

              <p className="text-base md:text-lg text-brand-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
                Crafting digital experiences that tell your story with
                creativity, precision, and purpose.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <LiquidButton
                  label="Book a Demo"
                  color="#ff751f"
                  duration={1000}
                  className="shadow-brand-lg hover:shadow-brand-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-brand-blue-900"
                />

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-brand-blue-900"
                >
                  View Our Work
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start items-center">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-brand-green">500+</p>
                  <p className="text-sm text-brand-gray-400">
                    Projects Delivered
                  </p>
                </div>
                <div className="h-12 w-px bg-brand-gray-600 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-brand-green">98%</p>
                  <p className="text-sm text-brand-gray-400">
                    Client Satisfaction
                  </p>
                </div>
                <div className="h-12 w-px bg-brand-gray-600 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-brand-green">50+</p>
                  <p className="text-sm text-brand-gray-400">Global Brands</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — Scrolling Images */}
          {/* RIGHT SIDE — Scrolling Images */}
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] overflow-hidden">
            {/* Mobile: horizontal row, Desktop: vertical columns */}
            {/* ── < 1280 px : two horizontal rows, long enough to scroll ── */}
            <div className="flex lg:hidden gap-3 h-full">
              {/* Row 1 → scroll right (10 items) */}
              <div className="flex-shrink-0 h-full">
                <ScrollingImages
                  items={[...items1, ...items2]} // 10 items
                  direction="right"
                  speed="slow"
                  imgProps={{ loading: "lazy" }}
                  className="h-full"
                />
              </div>

              {/* Row 2 ← scroll left (10 items) */}
              <div className="flex-shrink-0 h-full">
                <ScrollingImages
                  items={[...items3, ...items1]} // 10 items (re-use items1 to fill)
                  direction="left"
                  speed="normal"
                  imgProps={{ loading: "lazy" }}
                  className="h-full"
                />
              </div>
            </div>

            {/* Desktop: original 3-column vertical layout */}
            <div className="hidden lg:flex gap-3 lg:gap-4 h-full">
              <div className="flex-1 h-full">
                <ScrollingImages
                  items={items1}
                  direction="up"
                  speed="slow"
                  imgProps={{ loading: "lazy" }}
                />
              </div>
              <div className="flex-1 h-full">
                <ScrollingImages
                  items={items2}
                  direction="down"
                  speed="normal"
                  imgProps={{ loading: "lazy" }}
                />
              </div>
              <div className="flex-1 h-full">
                <ScrollingImages
                  items={items3}
                  direction="up"
                  speed="slow"
                  imgProps={{ loading: "lazy" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade-out gradient for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-beige-100 to-transparent opacity-10" />
    </section>
  );
}
