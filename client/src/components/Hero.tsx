import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@shared/schema";
import { ScrollingImages } from "./aceternity/ScrollingImages";
import { LiquidButton } from "./LiquidButton";

// Import actual images from attached_assets
const images = [
  "/generated_images/Amazon_Pharmacy_app_mockup_8bf3e1d7.png",
  "/generated_images/Brand_identity_system_8af1f13b.png",
  "/generated_images/E-commerce_website_design_43c43606.png",
  "/generated_images/Fintech_app_design_413d4352.png",
  "/generated_images/Pernod_Ricard_video_production_685784cf.png",
  "/generated_images/Reddit_campaign_creative_1b23ce70.png",
];

// Create a list of 15 portfolio items cycling through actual images
const portfolioItems: PortfolioItem[] = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  imageUrl: images[i % images.length],
  title: `Portfolio Item ${i + 1}`,
  client: "Creative Brand",
  category: "Design",
  aspectRatio: "portrait",
}));

export function Hero() {
  // Split portfolio items for three columns.
  const items1 = portfolioItems.slice(0, 5);
  const items2 = portfolioItems.slice(5, 10);
  const items3 = portfolioItems.slice(10, 15);

  return (
    <section className="relative min-h-screen flex items-center bg-brand-blue-900 text-brand-beige-100 overflow-hidden pt-24 pb-12 lg:py-0">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 opacity-50" />

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading - Using brand gray for subtle contrast */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-brand-beige-100 leading-tight">
                <span className="block text-brand-gray-400">DIGITELLER</span>
                <span className="block text-brand-beige-100">CREATIVE</span>
              </h1>

              {/* Tagline with highlight green accent */}
              <p className="text-lg md:text-xl text-brand-beige-200 max-w-xl mx-auto lg:mx-0 mb-4">
                Tailor of Tales
              </p>

              {/* Supporting text */}
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
                  className="shadow-brand-lg hover:shadow-brand-xl"
                />

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 transition-all duration-300"
                >
                  View Our Work
                </Button>
              </div>

              {/* Trust indicators with brand colors */}
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

          {/* Right Side: Scrolling Images */}
          <div className="relative h-[50vh] lg:h-[600px] lg:col-span-3">
            <div className="absolute inset-0 flex gap-2 sm:gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
              <div
                className="flex-1"
                style={{ transform: "translateY(-3rem)" }}
              >
                <ScrollingImages items={items1} direction="up" speed="slow" />
              </div>
              <div className="flex-1" style={{ transform: "translateY(3rem)" }}>
                <ScrollingImages
                  items={items2}
                  direction="down"
                  speed="normal"
                />
              </div>
              <div
                className="flex-1"
                style={{ transform: "translateY(-5rem)" }}
              >
                <ScrollingImages items={items3} direction="up" speed="slow" />
              </div>
            </div>

            {/* Accent glow effect on images */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-blue-900 via-transparent to-brand-blue-900 opacity-60" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-beige-100 to-transparent opacity-10" />
    </section>
  );
}
