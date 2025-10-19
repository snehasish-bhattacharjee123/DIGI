import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@shared/schema";
import { ScrollingImages } from "./aceternity/ScrollingImages";

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
    <section className="relative min-h-screen flex items-center bg-[#101c1c] text-white overflow-hidden pt-24 pb-12 lg:py-0">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#9bf5b3] leading-tight">
                Your creative team's
                <br />
                creative team™
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8">
                Scale your in-house creative team with top global talent powered
                by industry-leading AI workflows, delivering anything you can
                imagine fast and affordably.
              </p>

              <Button
                size="lg"
                className="bg-[#b3ffcb] text-black hover:bg-[#a2e6b9] rounded-full px-8 py-6 text-base font-semibold"
                data-testid="button-hero-book-demo"
              >
                Book a demo
              </Button>
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
          </div>
        </div>
      </div>
    </section>
  );
}
